module.exports = pak => {
	if (!pak.parse()) return false;
	let C_VIEW_WARE = pak.prev('C_VIEW_WARE');

	return (
		C_VIEW_WARE &&
		pak.mapped['C_VIEW_WARE'] &&
		pak.parsed.source.equals(C_VIEW_WARE.parsed.source) &&
		[1, 12].includes(pak.parsed.invType) &&
		[0, 1, 2, 3, 4, 5, 6, 7].includes(pak.parsed.bankPos / 72) &&
		pak.parsed.invenPos < 72
	);
};

/**
 * C_GET_WARE_ITEM
	int64 source
	int32 invType # 1 = bank, 12 = costume
	int32 unk1
	int32 money
	int32 unk2
	int32 invenPos
	int64 uid
	int32 unk3
	int32 numbers
	int32 bankPos

	(45405) undefined 34005db1 
	f850010000800008 
	01000000 
	90000000 
	00000000 
	00000000 
	35000000 
	2f230200 af1fb87e 
	00000000 
	46000000 
	90000000
 */
