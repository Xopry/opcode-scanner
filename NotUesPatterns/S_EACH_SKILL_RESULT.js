module.exports = pak => {
	let prev = pak.prev('S_ACTION_STAGE')

	return prev && pak.parse() && (!pak.parsed.owner.equals(0) ? pak.parsed.owner : pak.parsed.source).equals(prev.parsed.source)
		&& pak.parsed.model === prev.parsed.model && pak.parsed.skill === prev.parsed.skill && pak.parsed.id === prev.parsed.id
}