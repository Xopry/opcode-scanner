module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'C_SET_VISIBLE_RANGE'
}