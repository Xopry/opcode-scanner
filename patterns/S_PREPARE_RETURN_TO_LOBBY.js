module.exports = pak => {
	const hex = pak.data.toString('hex');

	return pak.parse() && pak.parsed.time === 10 && hex.length === 16;
};
