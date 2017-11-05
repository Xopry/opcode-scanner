module.exports = pak => {
	if (!pak.parse()) return false;

	const hex = pak.data.toString('hex');
	let S_LOGIN = pak.prev('S_LOGIN');
	let S_GET_USER_LIST = pak.prev('S_GET_USER_LIST');

	if (!S_LOGIN || !pak.mapped['S_LOGIN']) return false;
	if (!S_GET_USER_LIST || !pak.mapped['S_GET_USER_LIST']) return false;

	if (!pak.parsed.id.equals(S_LOGIN.parsed.cid)) return false;

	const find = S_GET_USER_LIST.parsed.characters.find(
		x => x.id === S_LOGIN.parsed.playerId
	);

	if (!find) return false;
	return (
		find.face === pak.parsed.face &&
		find.hairAdornment === pak.parsed.hairAdornment
	);
};

/**
 * S_USER_EXTERNAL_CHANGE
	uint64 id
	int32  weapon
	int32  chest
	int32  gloves
	int32  boots
	int32  innerwear
	int32  head
	int32  face
	int32  weaponModel
	int32  chestModel
	int32  glovesModel
	int32  bootsModel
	int32  weaponDye # ?
	int32  chestDye
	int32  glovesDye
	int32  bootsDye
	int32  unk1
	int32  unk2
	int32  unk3
	int32  unk4
	int32  weaponEnchant
	int32  hairAdornment
	int32  mask
	int32  back
	int32  weaponSkin
	int32  costume
	int32  costumeDye
	int32  unk5 # ?
	byte   enable   # enables skin, hair adornment, mask, and costume (back is always on)

	
	79008491
	ba29010000800005
	18590100
	26590100
	2e590100
	31590100
	4c130200
	69590100
	00000000
	00000000
	00000000
	00000000
	00000000
	00000000
	00000000
	00000000
	00000000
	00000000
	00000000
	00000000
	00000000
	06000000
	00000000
	00000000
	00000000
	46030200
	742a0200
	00000000
	00000000
	01
 */
