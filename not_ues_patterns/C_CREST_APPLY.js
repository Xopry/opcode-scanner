module.exports = pak => {
	let prev = pak.prev('S_CREST_INFO')

	return prev && pak.parse() && prev.parsed.glyphs.find(g => g.id === pak.parsed.id) && pak.parsed.enabled <= 1
}