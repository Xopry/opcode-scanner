module.exports = pak => {
	let prev = pak.prev('S_LOGIN')

	return prev && pak.parse() && pak.parsed.source.equals(prev.parsed.cid) && pak.parsed.model === prev.parsed.model
		&& pak.parsed.skill & 0x4000000 && pak.parsed.stage === 0
}