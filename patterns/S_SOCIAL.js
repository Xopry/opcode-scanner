module.exports = pak => {
	if(!pak.mapped['S_SPAWN_USER'] || !pak.parse() || pak.parsed.animation === 0 || ![0, 2].includes(pak.parsed.unk2)
		|| pak.parsed.unk2 !== 0) return false

	for(let i = pak.index - 1; i >= 0; i--) {
		let prev = pak.history[i]

		if(prev.name() === 'S_SPAWN_USER' && pak.parsed.target.equals(prev.parsed.cid)) return true
	}

	return false
}