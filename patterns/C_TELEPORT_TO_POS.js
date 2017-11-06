module.exports = pak => {
	if (!pak.parse()) return false;
	let S_LOAD_TELEPORT_TO_POS_LIST = pak.prev('S_LOAD_TELEPORT_TO_POS_LIST');

	if (!S_LOAD_TELEPORT_TO_POS_LIST) return false;
	if (!pak.mapped['S_LOAD_TELEPORT_TO_POS_LIST']) return false;

	return pak.parsed.index >= 0 && pak.parsed.index <= 5;
};

/**
 * C_TELEPORT_TO_POS
	int32 index

	08003d8001000000
*/
