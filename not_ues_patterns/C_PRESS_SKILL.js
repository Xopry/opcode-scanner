module.exports = pak => {
	let prev = pak.prev('C_PLAYER_LOCATION')

	return prev && pak.parse() && (pak.parsed.skill & 0xff00000) >> 24 === 4 && pak.parsed.start <= 1
		&& dist3D({x: prev.parsed.x1, y: prev.parsed.y1, z: prev.parsed.z1}, pak.parsed) < 250
}

function dist3D(loc1, loc2) {
	return Math.sqrt(Math.pow(loc2.x - loc1.x, 2) + Math.pow(loc2.y - loc1.y, 2) + Math.pow(loc2.z - loc1.z, 2))
}