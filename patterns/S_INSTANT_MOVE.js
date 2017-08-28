module.exports = pak => {
	let prev = pak.prev('S_ACTION_STAGE')

	return prev && pak.time - prev.time < 50 && pak.parse() && pak.parsed.id.equals(prev.parsed.source) && dist3D(pak.parsed, prev.parsed) < 400
}

function dist3D(loc1, loc2) {
	return Math.sqrt(Math.pow(loc2.x - loc1.x, 2) + Math.pow(loc2.y - loc1.y, 2) + Math.pow(loc2.z - loc1.z, 2))
}