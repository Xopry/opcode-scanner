module.exports = pak => {
	const hex = pak.data.toString('hex');

	return hex.length === 24 && /(^0c00)\w+(2711030005000000)$/gi.test(hex);
};

/**
 * 상급전투비약 Code
 * S_START_COOLTIME_ITEM
	int32 item
	int32 cooldown

				ItemId		CoolDown
	0c00df6f 	27110300 	05000000		
	0c0060a3 	72000000 	1e000000	//아이템아이디, 30초
	0c0060a3 	27110300 	05000000	//아이템아이디, 5초
 */
