module.exports = pak => {
	if (!pak.parse()) return false;

	return (
		[0, 1, 12].includes(pak.parsed.invType) &&
		pak.parsed.slot1 === -1 &&
		pak.parsed.slot2 === -1
	);
};

/**
 * C_INVENTORY_AUTO_SORT
	int32 invType # 0 = inventory, 1 = bank, 12 = costume bank
	int32 slot1
	int32 slot2
 */
