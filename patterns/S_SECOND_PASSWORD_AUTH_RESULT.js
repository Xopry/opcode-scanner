module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'C_SECOND_PASSWORD_AUTH'
}