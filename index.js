const PASSIVE_SCAN_INTERVAL = 10000,
	PASSIVE_SCAN_TIMEOUT = 10, // Throttle settings to prevent hogging the event loop
	PASSIVE_SCAN_HOLDOFF = 10

const fs = require('fs'),
	path = require('path'),
	{protocol} = require('tera-data-parser')

class PacketInfo {
	constructor(info) {
		Object.assign(this, info)
	}

	parse(strictLength) {
		this.triedParse = true
		this.parsed = null
		this.parsedLength = 0

		let name = this.parseName || this.name(),
			msg = protocol.messages.get(name)

		if(msg)
			try {
				msg = msg.get(Math.max(...msg.keys()))

				this.parsed = protocol.parse(this.version, msg, this.data, name)
				this.parsedLength = protocol.write(this.version, msg, '*', this.parsed, null, name, this.code).length
			}
			catch(e) {}

		if(this.parsed && (!strictLength || this.parsedLength === this.data.length)) return true

		this.parsed = null
		this.parsedLength = 0
		return false
	}

	first(name) {
		if(!this.mapped[name]) return null

		for(let packet of this.history)
			if(packet.name() === name)
				return packet
	}

	prev(name) {
		if(!name) return this.history[this.index - 1]

		if(!this.mapped[name]) return null

		for(let i = this.index - 1; i >= 0; i--) {
			let packet = this.history[i]

			if(packet.name() === name)
				return packet
		}
	}

	next(name) {
		if(!name) return this.history[this.index + 1]

		if(!this.mapped[name]) return null

		for(let i = this.index + 1; i < this.history.length; i++) {
			let packet = this.history[i]

			if(packet.name() === name)
				return packet
		}
	}

	name() {
		return this.map[this.code]
	}
}

module.exports = function OpcodeScanner(dispatch) {
	let patterns = {},
		loggedMatch = {},
		version = 0,
		map = {},
		mapped = {},
		history = [],
		index = 0,
		clientOrder = 0,
		serverOrder = 0

	dispatch.hook('*', 'raw', {order: -999999999}, (code, data, fromServer) => {
		if(!version) {
			version = dispatch.base.protocolVersion

			try {
				let lines = fs.readFileSync(path.join(__dirname, 'maps', 'protocol.' + version + '.map'), 'utf8').split('\n')

				for(let line of lines) {
					line = line.split(' = ')
					map[Number(line[1])] = line[0]
					mapped[line[0]] = true
				}
			}
			catch(e) {}

			let files = fs.readdirSync(path.join(__dirname, 'patterns')).filter(name => name.endsWith('.js'))

			for(let name of files) {
				name = name.slice(0, name.indexOf('.')) || name

				if(!mapped[name]) patterns[name] = require('./patterns/' + name)
			}

			console.log('Opcode scanner initialized, loaded ' + Object.keys(patterns).length + '/' + files.length + ' patterns.')
		}

		let info = new PacketInfo({
			code,
			data: Buffer.from(data),
			fromServer,
			version,
			map,
			mapped,
			history,
			index: index++,
			order: fromServer ? serverOrder++ : clientOrder++,
			time: Date.now()
		})

		if(map[code]) info.parse()
		else scan(info)

		history.push(info)
	})

	// Passively scan packets so that signatures can have lookahead
	;(async () => {
		let connected = true

		while(connected) {
			await sleep(PASSIVE_SCAN_INTERVAL)

			// Set connected state before scanning so that the final pass will definitely happen after disconnect
			connected = dispatch.base.connection.state !== 3

			let totalTime = Date.now(),
				sleepTime = Date.now(),
				unmapped = 0

			for(let packet of history)
				if(!packet.parsed) {
					if(Date.now() - sleepTime > PASSIVE_SCAN_TIMEOUT && connected) {
						await sleep(PASSIVE_SCAN_HOLDOFF)
						sleepTime = Date.now()
					}

					scan(packet)

					if(!packet.parsed) unmapped++
				}

			totalTime = Date.now() - totalTime
			console.log('Passive scan took ' + totalTime + 'ms, ' + unmapped + ' packets checked')
		}
	})()

	function scan(info) {
		let prefix = info.fromServer ? 'S_' : 'C_'

		for(let name in patterns)
			if(name.startsWith(prefix)) {
				info.parseName = name

				if(patterns[name](info)) {
					if(!info.triedParse) info.parse()

					if(info.parsedLength === info.data.length) {
						console.log('Opcode found: ' + name + ' = ' + info.code)
						map[info.code] = name
						mapped[name] = true

						for(let packet of history)
							if(packet.code === info.code && packet.index !== info.index)
								packet.parse()

						writeMap()
						delete patterns[name]
						delete loggedMatch[name]
						break
					}
					else if(!(loggedMatch[name] || (loggedMatch[name] = []))[info.code]) {
						loggedMatch[name][info.code] = true
						console.log('Possible match: ' + name + ' = ' + info.code + ' # length ' + info.parsedLength + ' (expected ' + info.data.length + ')')
					}
				}
				else delete info.parsed

				delete info.parseName
				delete info.triedParse
			}
	}

	function writeMap() {
		let mapsDir = path.join(__dirname, 'maps'),
			out = []

		for(let code in map) out.push(map[code] + ' = ' + code)
		out.sort()

		if(!fs.existsSync(mapsDir)) fs.mkdirSync(mapsDir)

		fs.writeFileSync(path.join(mapsDir, 'protocol.' + version + '.map'), out.join('\n'))
	}

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}
}