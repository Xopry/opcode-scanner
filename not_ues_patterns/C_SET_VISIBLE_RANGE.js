module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_LOGIN_ACCOUNT_INFO' && pak.parse() && pak.parsed.range >= 1000 && pak.parsed.range <= 2500
}