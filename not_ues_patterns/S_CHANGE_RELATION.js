const Long = require('long')

module.exports = pak => {
	let next = pak.next()

	return next && next.fromServer && next.data.length === 12 && pak.parse() && pak.parsed.relation === 1
		&& pak.parsed.target.equals(new Long(next.data.readInt32LE(4), next.data.readInt32LE(8), true))
}