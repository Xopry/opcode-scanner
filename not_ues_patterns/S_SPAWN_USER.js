module.exports = pak => {
	let prev = pak.prev('S_LOGIN')

	return prev && pak.parse() && pak.parsed.serverId === prev.parsed.serverId && Math.floor(prev.parsed.model / 10000) === 1
		&& pak.parsed.name.length >= 2
}