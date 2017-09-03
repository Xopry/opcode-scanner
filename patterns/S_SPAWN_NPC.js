module.exports = pak => {
	let prev = pak.prev('C_PLAYER_LOCATION')

	return prev && pak.parse() && !pak.parsed.id.equals(0) && dist3D({x: prev.parsed.x1, y: prev.parsed.y1, z: prev.parsed.z1}, pak.parsed) < 2750
		&& isKorean(pak.parsed.npcName)
}

function dist3D(loc1, loc2) {
	return Math.sqrt(Math.pow(loc2.x - loc1.x, 2) + Math.pow(loc2.y - loc1.y, 2) + Math.pow(loc2.z - loc1.z, 2))
}

function isKorean(str) {
	return /^[ ()_\u1100-\u11ff\u3130-\u318f\ua960-\ua97f\uac00-\ud7a3\ud7b0\ud7ff]+$/.test(str)
}