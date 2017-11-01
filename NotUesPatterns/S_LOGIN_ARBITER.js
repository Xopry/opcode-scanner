module.exports = pak => {
	let prev = pak.prev()

	return prev && prev.name() === 'S_REMAIN_PLAY_TIME'
}