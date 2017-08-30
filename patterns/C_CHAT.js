module.exports = pak => {
	let prev = pak.prev('S_LOGIN')

	if(!prev || !pak.mapped['S_CHAT'] || !pak.parse() || pak.parsed.channel >>> 0 >= 300) return false

	for(let i = pak.index + 1; i < pak.history.length; i++) {
		let next = pak.history[i]

		if(next.name() === 'S_CHAT' && next.parsed.authorID.equals(prev.parsed.cid) && next.parsed.authorName === prev.parsed.name
			&& pak.parsed.channel === next.parsed.channel && pak.parsed.message === next.parsed.message) return true
	}

	return false
}