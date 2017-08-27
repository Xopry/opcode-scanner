module.exports = pak => {
	let prev = pak.prev('S_BROCAST_GUILD_FLAG')

	return prev && prev.index >= pak.index - 2 && pak.parse() && pak.parsed.unk === 0
}