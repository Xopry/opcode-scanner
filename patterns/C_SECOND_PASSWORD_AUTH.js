module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_REQUEST_SECOND_PASSWORD_AUTH' && pak.parse() && /^[0-9a-f]{512}$/.test(pak.parsed.hash)
}