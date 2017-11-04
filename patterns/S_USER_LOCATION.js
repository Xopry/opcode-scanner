module.exports = pak => {
	const hex = pak.data.toString('hex');

	return (
		pak.parse() &&
		pak.parsed.type === 7 &&
		pak.parsed.unk2 === 0 &&
		pak.parsed.unk === 0 &&
		pak.parsed.x1 === pak.parsed.x2 &&
		pak.parsed.y1 === pak.parsed.y2 &&
		pak.parsed.z1 === pak.parsed.z2 &&
		hex.length === 94
	);
};

/**
 * S_USER_LOCATION
	uint64 target
	float  x1
	float  y1
	float  z1
	int16  w
	int16  unk2
	int16  speed
	float  x2
	float  y2
	float  z2
	int32  type # see C_PLAYER_LOCATION.type
	byte   unk
 */
