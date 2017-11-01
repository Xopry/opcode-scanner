module.exports = pak =>
	pak.parse() &&
	pak.parsed.type === 7 &&
	pak.parsed.speed === 0 &&
	pak.parsed.unk === 0 &&
	pak.parsed.x1 === pak.parsed.x2 &&
	pak.parsed.y1 === pak.parsed.y2 &&
	(pak.parsed.z1 === pak.parsed.z2) == pak.parsed.z2;
