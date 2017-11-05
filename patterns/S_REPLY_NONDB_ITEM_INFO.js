module.exports = pak => {
	if (!pak.parse()) return false;
	const hex = pak.data.toString('hex');
	let prev = pak.prev();

	return (
		prev &&
		prev.name() === 'C_REQUEST_NONDB_ITEM_INFO' &&
		prev.parsed.item === pak.parsed.item
	);
};

/**
 * S_REPLY_NONDB_ITEM_INFO
	int32 item
	byte  unk # always 1, likely ok flag
	byte  unk1
	int32 unk2
	int32 unk3
	int32 unk4
	int32 unk5
	int32 unk6
	int32 unk7

	2600b6b0 9ae60300 01 00 00000000 00000000 00000000 00000000 00000000 00000000 ffffffff
*/
