module.exports = pak => {
	let prev = pak.prev('S_ACTION_STAGE')

	return prev && pak.time - prev.time < 50 && pak.parse() && pak.parsed.source.equals(prev.parsed.source) && pak.parsed.unk === 0
		&& dist3D(pak.parsed, prev.parsed) < 500
}

function dist3D(loc1, loc2) {
	return Math.sqrt(Math.pow(loc2.x - loc1.x, 2) + Math.pow(loc2.y - loc1.y, 2) + Math.pow(loc2.z - loc1.z, 2))
}