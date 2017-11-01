module.exports = pak => {
	let S_LOGIN = pak.prev('S_LOGIN');

	return (
		S_LOGIN &&
		pak.mapped['S_LOGIN'] &&
		pak.parse() &&
		pak.parsed.source.equals(S_LOGIN.parsed.cid) &&
		pak.parsed.model === S_LOGIN.parsed.model &&
		pak.parsed.skill & 0x4000000 &&
		pak.parsed.stage === 0
	);
};
