module.exports = pak =>
	pak.order >= 4 &&
	pak.parse() &&
	pak.parsed.id !== 0 &&
	pak.parsed.unk === 0;
