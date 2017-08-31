module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_LOAD_CLIENT_ACCOUNT_SETTING'
}