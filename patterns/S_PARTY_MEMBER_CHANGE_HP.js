module.exports = pak => {
	const hex = pak.data.toString('hex');
	let S_LOGIN = pak.prev('S_LOGIN');

	return (
		S_LOGIN &&
		pak.mapped['S_LOGIN'] &&
		pak.parse() &&
		pak.parsed.currentHp >= 0 &&
		pak.parsed.maxHp > 0 &&
		pak.parsed.currentHp <= pak.parsed.maxHp &&
		S_LOGIN.parsed.playerId === pak.parsed.playerId
	);
};

/**
 * S_PARTY_MEMBER_CHANGE_HP
	uint32 serverId
	uint32 playerId
	int32  currentHp
	int32  unk1
	int32  maxHp
	int32  unk2
 */
