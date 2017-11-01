module.exports = pak => {
	let prev = pak.prev('S_LOAD_TOPO')

	return prev && pak.parse() && pak.parsed.unk === 1 && pak.parsed.zone === prev.parsed.zone
}