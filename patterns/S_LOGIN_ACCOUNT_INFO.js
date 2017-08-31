module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_LOGIN_ARBITER' && pak.parse() && pak.parsed.serverName.startsWith('PlanetDB_')
}