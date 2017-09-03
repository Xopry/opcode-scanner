module.exports = pak => pak.prev('S_LOGIN') && pak.parse() && pak.parsed.pointsMax >= 10 && pak.parsed.pointsMax <= 55
	&& pak.parsed.pointsUsed >>> 0 <= 55 && pak.parsed.glyphs.length