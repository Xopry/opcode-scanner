module.exports = pak => {
	let hex = pak.data.toString('hex');

	return pak.parse() && hex.length === 24 && /^0c0060a3/gi.test(hex);
};

/**
 * S_START_COOLTIME_ITEM
	int32 item
	int32 cooldown

				ItemId		CoolDown
	0c0060a3 	72000000 	1e000000	//아이템아이디, 30초
	0c0060a3 	27110300 	05000000	//아이템아이디, 5초
 */
