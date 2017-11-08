module.exports = pak => {
	if (!pak.parse()) return false;
	let C_VIEW_WARE = pak.prev('C_VIEW_WARE');

	return (
		C_VIEW_WARE &&
		pak.mapped['C_VIEW_WARE'] &&
		pak.parsed.source.equals(C_VIEW_WARE.parsed.source) &&
		[1, 12].includes(pak.parsed.invType) &&
		[0, 1, 2, 3, 4, 5, 6, 7].includes(pak.parsed.bankPos / 72) &&
		pak.parsed.invenPos === -1
	);
};

/**
 * C_GET_WARE_ITEM
	int64 source
	int32 invType # 1 = bank, 12 = costume bank
	int32 unk1
	int32 money
	int32 unk2
	int32 bankPos # ( 0 * page ) * 72
	int64 uid
	int32 item
	int32 numbers
	int32 invenPos # me  -1

	(39897) undefined 3400d99b 
		f8500100 00800008 
		01000000 
		00000000 
		00000000 
		00000000 
		00000000 
		d46e4984 00000000
		d8510000 
		01000000 
		ffffffff
 */
