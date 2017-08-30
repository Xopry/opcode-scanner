module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_CHANGE_RELATION' && prev.parsed.relation === 1 && pak.parse() && pak.parsed.target.equals(prev.parsed.target)
}