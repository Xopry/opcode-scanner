module.exports = pak => {
	return (
		pak.parse() &&
		[1, 2].includes(pak.parsed.characters[0].gender) &&
		[0, 1, 2, 3, 4, 5].includes(pak.parsed.characters[0].race) &&
		pak.parsed.characters[0].class >= 0 &&
		pak.parsed.characters[0].class <= 12 &&
		pak.parsed.characters[0].level >= 1 &&
		pak.parsed.characters[0].level <= 65
	);
};
