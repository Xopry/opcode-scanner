module.exports = pak =>
	pak.mapped['S_LOGIN'] &&
	pak.parse() &&
	pak.parsed.zone &&
	pak.parsed.quick === false;
