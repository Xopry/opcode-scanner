module.exports = pak => {
	let hex = pak.data.toString('hex');
	return (
		pak.parse() &&
		pak.parsed.currentMp === pak.parsed.maxMp &&
		hex.length === 72 &&
		pak.parsed.type === 0
	);
};

/**
 * S_PLAYER_CHANGE_MP
	int32  currentMp
	int32  maxMp
	int32  diff	
	uint32 type # 0, 1, 3, 4
	uint64 target
	uint64 source
				curMP		maxMp		diff		type		target				source
	2400338f 	150a0000 	3f0c0000 	1f000000 	00000000 	8a7e010000800008 	0000000000000000
	2400338f 	340a0000 	3f0c0000 	1f000000 	00000000 	8a7e010000800008 	0000000000000000 
 */
