module.exports = pak => {
	let prev = pak.prev('S_LOAD_TOPO')

	return prev && pak.parse() && pak.parsed.zone === prev.parsed.zone && pak.parsed.channel >>> 0 < 50 && pak.parsed.density >>> 0 < 3
		&& pak.parsed.type >= 1 && pak.parsed.type <= 3
}