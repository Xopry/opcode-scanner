module.exports = pak => {
	const hex = pak.data.toString('hex');
	let C_CAN_LOCKON_TARGET = pak.prev('C_CAN_LOCKON_TARGET');

	return (
		C_CAN_LOCKON_TARGET &&
		pak.mapped['C_CAN_LOCKON_TARGET'] &&
		pak.parse() &&
		pak.parsed.skill === C_CAN_LOCKON_TARGET.parsed.skill &&
		hex.length === 42
	);
};

/**
 * S_CAN_LOCKON_TARGET
	uint64 target
	int32  unk
	int32  skill
	byte   ok

	14008afe 4ad7050000800c00 00000000 a4510004 01
 */
