module.exports = pak =>
	pak.mapped['S_MY_DESCRIPTION'] &&
	pak.parse() &&
	/^@\d+/.test(pak.parsed.message);
