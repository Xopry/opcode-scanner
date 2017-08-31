module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_GET_USER_LIST'
}