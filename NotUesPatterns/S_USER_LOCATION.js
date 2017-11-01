module.exports = pak => {
	if(!pak.mapped['S_SPAWN_USER'] || !pak.parse() || pak.parsed.type !== 7 || pak.parsed.unk2 !== 0 || pak.parsed.unk !== 0
		|| pak.parsed.x1 !== pak.parsed.x2 || pak.parsed.y1 !== pak.parsed.y2 || pak.parsed.z1 !== pak.parsed.z2) return false

	for(let i = pak.index - 1; i >= 0; i--) {
		let prev = pak.history[i]

		if(prev.name() === 'S_SPAWN_USER' && pak.parsed.target.equals(prev.parsed.cid)) return true
	}

	return false
}