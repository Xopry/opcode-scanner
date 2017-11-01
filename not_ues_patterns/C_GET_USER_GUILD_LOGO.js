module.exports = pak => {
	let prev = pak.prev('S_GET_USER_LIST')

	if(!prev || !pak.parse()) return false

	for(let character of prev.parsed.characters)
		if(pak.parsed.playerId === character.id && pak.parsed.guildId === character.guildId)
			return true

	return false
}