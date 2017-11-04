module.exports = pak => {
	const hex = pak.data.toString('hex');
	let C_TRY_LOOT_DROPITEM = pak.prev('C_TRY_LOOT_DROPITEM');

	return (
		C_TRY_LOOT_DROPITEM &&
		pak.mapped['C_TRY_LOOT_DROPITEM'] &&
		pak.parse() &&
		hex.length === 24 &&
		C_TRY_LOOT_DROPITEM.parsed.id.equals(pak.parsed.id)
	);
};

/**
 * S_DESPAWN_DROPITEM 
 * S_SPAWN_DROPITEM -> C_TRY_LOOT_DROPITEM -> S_DESPAWN_DROPITEM 
	uint64 id

					id
	0c001582 		c7fb060000800900
 */
