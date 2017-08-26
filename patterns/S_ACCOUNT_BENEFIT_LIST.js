module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_BROCAST_GUILD_FLAG' && pak.parse() && pak.parsed.unk === 0
}