module.exports = pak => {
	let prev = pak.prev('C_CREST_APPLY')

	return prev && pak.parse() && pak.parsed.id === prev.parsed.id && pak.parsed.enabled === prev.parsed.enabled
}