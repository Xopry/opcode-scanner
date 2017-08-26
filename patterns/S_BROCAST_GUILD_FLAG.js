module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_UPDATE_CONTENTS_ON_OFF' && pak.parse() && pak.parsed.unk === 0
}