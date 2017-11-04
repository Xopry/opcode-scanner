module.exports = pak => {
	const hex = pak.data.toString('hex');
	let S_LOGIN = pak.prev('S_LOGIN');

	return (
		S_LOGIN &&
		pak.mapped['S_LOGIN'] &&
		pak.parse() &&
		pak.parsed.members.findIndex(x => {
			return (
				S_LOGIN.parsed.cid.equals(x.cid) &&
				[0, 1, 2, 3, 4, 5].includes(x.laurel)
			);
		}) >= 0
	);
};

/**
 * S_PARTY_MEMBER_LIST
	count  members
	offset members

	bool   ims
	bool   raid
	uint32 unk1
	uint32 unk2 # unk2-4 are the same as unk1-3 in S_PARTY_INFO?
	uint16 unk3
	uint16 unk4
	uint32 leaderServerId
	uint32 leaderPlayerId
	uint32 unk5 # 1?
	uint32 unk6 # 1?
	byte   unk7 # 0?
	uint32 unk8 # 1?
	byte   unk9 # 0?
	uint32 unk10 # 1?
	byte   unk11 # 0?
	array  members
	- offset name
	- uint32 serverId
	- uint32 playerId
	- uint32 level
	- uint32 class # 0..12
	- bool   online
	- uint64 cid
	- int32  order # 0..n
	- byte   canInvite # ?
	- uint32 laurel # 0..5 (none, bronze, silver, gold, diamond, champion)
	- string name
 */
