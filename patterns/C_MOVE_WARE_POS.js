module.exports = pak => {
	if (!pak.parse()) return false;
	let C_VIEW_WARE = pak.prev('C_VIEW_WARE');

	return (
		C_VIEW_WARE &&
		pak.mapped['C_VIEW_WARE'] &&
		pak.parsed.source.equals(C_VIEW_WARE.parsed.source) &&
		pak.parsed.from >= 0 &&
		pak.parsed.to >= 0 &&
		pak.parsed.from !== pak.parsed.to
	);
};

/**
 * C_MOVE_WARE_POS
	int64 source
	int32 unk1
	int32 unk2
	int32 unk3
	int32 from
	int32 to
	int32 unk3

	(54534) undefined 240006d5 6c1c010000800009 01000000 acbf967f 00000000 01000000 00000000 00000000
	(54534) undefined 240006d5 f850010000800008 01000000 32708e74 00000000 22000000 23000000 00000000
	(54534) undefined 240006d5 f850010000800008 01000000 32708e74 00000000 23000000 22000000 00000000
 */
