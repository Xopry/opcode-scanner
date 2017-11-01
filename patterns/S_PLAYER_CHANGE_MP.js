module.exports = pak => {
	let S_LOGIN = pak.prev('S_LOGIN');
	let hex = pak.data.toString('hex');

	return (
		S_LOGIN &&
		pak.mapped['S_LOGIN'] &&
		pak.parse() &&
		pak.parsed.curMp >= 0 &&
		pak.parsed.maxMp > 0 &&
		S_LOGIN.parsed.cid.low === pak.parsed.target.low &&
		S_LOGIN.parsed.cid.high === pak.parsed.target.high &&
		hex.length === 72
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
