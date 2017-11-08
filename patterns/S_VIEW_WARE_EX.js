module.exports = pak => {
	if (!pak.parse()) return false;
	let C_VIEW_WARE = pak.prev('C_VIEW_WARE');

	if (
		C_VIEW_WARE &&
		pak.mapped['C_VIEW_WARE'] &&
		pak.parsed.source.equals(C_VIEW_WARE.parsed.source) &&
		[1, 12].includes(pak.parsed.invType)
	) {
		console.log(pak.parsed);
	}
	return (
		C_VIEW_WARE &&
		pak.mapped['C_VIEW_WARE'] &&
		pak.parsed.source.equals(C_VIEW_WARE.parsed.source) &&
		[1, 12].includes(pak.parsed.invType)
	);
};

/**
 * S_VIEW_WARE_EX
	int64 source
	int32 invType #1 = bank, 12 = costume
	int32 unk0
	int32 pageSlot
	int32 unk1
	int32 unk2
	int64 coins
	int16 totalSlot
	
	array items
	- int32 unk0
	- uint32 dbid
	- uint64 id
	- uint64 ownerId
	- int32 slot
	- int32 unk1
	- int32 amount
	- int32 unk2
	- int32 unk3
	- int32 unk4 # 크리스탈/장비 0  나머지 1 ?
	- int32 unk5 # 귀속된 물품
	- int32 unk6
	- int32 unk7
	- int32 unk8
	- int32 unk9
	- int32 unk10
	- int16 unk11
	- bool unk12

	(58827) undefined b212cbe5
	3c00 count 60
	2e00 offset
	f850010000800008  source
	01000000 bag_solt?
	00000000 unk0
	00000000 unk1
	3f020000 unk2
	d8010000 unk3
	00ca9a3b conins
	00000000
	4002     maxSlot

              0        dbid     id                ownerId           slot     1        amount   2        3        4        5        6         7         8        9      10       11   12
	2e00 7d00 00000000 da800100 f810ce7e 00000000 c994001f 00000000 e8000000 01000000 10270000 10270000 00000000 01000000 00000000 00000000 00000000 00000000 00000000 00000000 0000 00 
	6d05 bc05 00000000 52490100 6d1cb47f 00000000 c994001f 00000000 05000000 01000000 01000000 01000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 0000 00
 */
