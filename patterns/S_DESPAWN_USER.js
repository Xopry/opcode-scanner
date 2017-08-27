module.exports = pak => {
	if(!pak.parse()) return false

	for(let i = pak.index - 1; i >= 0; i--) {
		let prev = pak.history[i]

		if(prev.name() === 'S_SPAWN_USER' && pak.parsed.target.equals(prev.parsed.cid)) return true
	}

	return false
}