module.exports = pak => {
	if (!pak.parse()) return false;
	let next = pak.next();

	return (
		next &&
		next.name() === 'S_INVEN' &&
		pak.parsed.from >= 0 &&
		pak.parsed.to >= 0 &&
		pak.parsed.from !== pak.parsed.to
	);
};

/**
 * C_MOVE_INVEN_POS
	uint64 source
	int32 from
	int32 to

	(42868) undefined 140074a7 48100100 00800009 3e000000 3f000000
	(34462) undefined 14009e86 0d000000 06000000 00000000 01000000
 */
