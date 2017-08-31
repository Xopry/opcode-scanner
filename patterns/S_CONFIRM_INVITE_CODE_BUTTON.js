module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_ACCOUNT_PACKAGE_LIST'
}