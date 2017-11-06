module.exports = pak => {
	if (!pak.parse()) return false;

	for (const location of pak.parsed.locations)
		if (location.unk !== 0) return false;

	return pak.parsed.locations.length >= 1;
};

/**
 * S_LOAD_TELEPORT_TO_POS_LIST
	count locations
	offset locations

	array locations
	- offset name
	- int16 unk # Always 0?
	- int32 zone
	- float x
	- float y
	- float z
	- string name

	1509934178244 <- (56916) undefined 
	6c0054de
	0200 0800 
	0800 3e00 2000 0000 5b1b0000 0044c7c6 0060ccc4 00e0dd4491c5b0ba74c7090044be44c5200044c5b0c608b8c0c6200000acdcb40000
	3e00 0000 5600 0000 411f0000 00f11547 00108fc5 004097443dcce0ac0900ecd578ce2000b9d2c4bcc0c96cad0000
*/
