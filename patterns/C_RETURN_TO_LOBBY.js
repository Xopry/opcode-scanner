module.exports = pak => {
	let hex = pak.data.toString('hex');

	return hex === '0400726a';
};

/**
 * C_RETURN_TO_LOBBY
 * 0400726a
 */
