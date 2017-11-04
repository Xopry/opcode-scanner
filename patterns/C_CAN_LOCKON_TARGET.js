module.exports = pak => {
	const hex = pak.data.toString('hex');

	return (
		pak.parse() &&
		hex.length === 40 &&
		(pak.parsed.skill & 0xff00000) >> 24 === 4
	);
};

/**
 * C_CAN_LOCKON_TARGET
	uint64 target  	16
	int32  unk		8
	int32  skill	8

	14008afe 4ad7050000800c00 00000000 a4510004
 */
