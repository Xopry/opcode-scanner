module.exports = pak => {
	const hex = pak.data.toString('hex');
	let S_SPAWN_DROPITEM = pak.prev('S_SPAWN_DROPITEM');

	return (
		S_SPAWN_DROPITEM &&
		pak.mapped['S_SPAWN_DROPITEM'] &&
		pak.parse() &&
		hex.length === 24 &&
		pak.parsed.id.equals(S_SPAWN_DROPITEM.parsed.id)
	);
};

/**
 * C_TRY_LOOT_DROPITEM
 * S_SPAWN_DROPITEM -> C_TRY_LOOT_DROPITEM -> S_DESPAWN_DROPITEM 
	uint64 id

					id
	0c0037f4  		c7fb060000800900
 */
