module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_LOGIN' && pak.parse() && pak.parsed.unk === 0
}