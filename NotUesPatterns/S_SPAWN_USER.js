module.exports = pak => {
	let S_LOGIN = pak.prev('S_LOGIN');

	return (
		S_LOGIN &&
		pak.parse() &&
		pak.parsed.serverId === S_LOGIN.parsed.serverId &&
		Math.floor(S_LOGIN.parsed.model / 10000) === 1 &&
		pak.parsed.level > 0 &&
		pak.parsed.level <= 65
	);
};
