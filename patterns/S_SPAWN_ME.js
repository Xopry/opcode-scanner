module.exports = pak => {
	let prev = pak.prev('S_LOAD_TOPO')

	return prev && pak.parse() && pak.parsed.x === prev.parsed.x && pak.parsed.y === prev.parsed.y && pak.parsed.z === prev.parsed.z
		&& pak.parsed.alive <= 1 && pak.parsed.unk <= 1
}