module.exports = pak => {
	const prev = pak.prev('C_SELECT_USER');

	return prev && pak.parse() && pak.parsed.playerId === prev.parsed.id;
};
