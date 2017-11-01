module.exports = pak => {
	let prev = pak.prev('S_SPAWN_ME')

	return prev && pak.parse() && pak.parsed.rank === -1 && pak.parsed.id.equals(prev.parsed.target)
}