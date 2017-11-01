module.exports = pak => {
	let prev = pak.prev()

	return prev && ['S_LOADING_SCREEN_CONTROL_INFO', 'S_SECOND_PASSWORD_AUTH_RESULT'].includes(prev.name()) && pak.parse()
		&& pak.parsed.unk.equals(6)
}