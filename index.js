const fs = require('fs'),
	path = require('path'),
	{protocol} = require('tera-data-parser')

class PacketInfo {
	constructor(info) {
		Object.assign(this, info)
	}

	parse() {
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

		if(this.parsed) return true

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
		loggedMatch = {}

	{
		let files = fs.readdirSync(path.join(__dirname, 'patterns')).filter(name => name.endsWith('.js'))

		for(let name of files) patterns[name.slice(0, name.indexOf('.'))] = require('./patterns/' + name)
	}

	console.log('Opcode scanner initialized, loaded ' + Object.keys(patterns).length + ' pattern(s).')

	let version = 0,
		map = {},
		mapped = {},
		history = [],
		index = 0,
		clientOrder = 0,
		serverOrder = 0

	dispatch.hook('*', 'raw', {order: -999999999}, (code, data, fromServer) => {
		version = dispatch.base.protocolVersion

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
			await new Promise(resolve => setTimeout(resolve, 10000))

			// Set connected state before scanning so that the final pass will definitely happen after disconnect
			connected = dispatch.base.connection.state !== 3

			for(let packet of history)
				if(!packet.parsed) {
					scan(packet)
					await null
				}
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

				delete info.parseName
				delete info.triedParse
			}
	}

	function writeMap() {
		let out = []

		for(let code in map) out.push(map[code] + ' = ' + code)
		out.sort()

		fs.writeFileSync(path.join(__dirname, 'protocol.' + version + '.map'), out.join('\n'))
	}
}