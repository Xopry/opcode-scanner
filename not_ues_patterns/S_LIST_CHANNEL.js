module.exports = pak => {
	let prev = pak.prev('C_LIST_CHANNEL')

	return prev && pak.parse() && pak.parsed.unk === 1 && pak.parsed.zone === prev.parsed.zone && pak.parsed.channels.length
		&& pak.parsed.channels.every(c => c.density >>> 0 < 3)
}