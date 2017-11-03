module.exports = pak => {
	const hex = pak.data.toString('hex');

	return hex.length === 16 && /0800a97a1c000000/gi.test(hex);
};

/**
 * 거중 열면 작동
 * S_NPC_MENU_SELECT
 * 0800a97a1c000000
 */
