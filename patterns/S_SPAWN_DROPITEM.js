module.exports = pak => {
	let hex = pak.data.toString('hex');
	let C_SELECT_USER = pak.prev('C_SELECT_USER');

	return (
		C_SELECT_USER &&
		pak.mapped['C_SELECT_USER'] &&
		pak.parse() &&
		pak.parsed.owners.findIndex(x => x.id === C_SELECT_USER.parsed.id) >=
			0 &&
		pak.parsed.amount > 0 &&
		pak.parsed.amount < 5 &&
		hex.length === 118 + pak.parsed.owners.length * 8
	);
};

/**
 * S_SPAWN_DROPITEM
	count  owners
	offset owners

	uint64 id
	float  x
	float  y
	float  z
	uint32 item
	uint32 amount
	int32  expiry
	int32  unk1
	int16  unk2
	uint64 mob
	byte   unk3
	array  owners
	- uint32 id  ===  C_SELECT_USER.id

	조건
	length : 100 + count * 8;
	amount > 0


				8		12		16					32			40			48			56			64			72			80			88		92					108		110			118		 > 126
			 	count	offset	id					x			y			z			item		amount		expiry		unk1		unk2	mob					unk3	offset3700	id
	3f00f3b4 	0100 	3700 	c7fb060000800900 	02dcdb46 	28132f48 	0040d1c4 	70010000 	01000000 	c0d40100 	01000000 	0000 	e9c00d0000800c00 	01 		37000000 	dc804100
	3f00f3b4 	0100 	3700 	27c50b0000800900 	25f7da46 	a4d52e48	0040d1c4 	d2800100 	01000000 	c0d40100 	01000000 	0000 	e9c00d0000800c00 	01 		37000000 	dc804100
	3f00f3b4 	0100 	3700 	443b0b0000800900 	bedbdd46 	2dda2e48 	0040d1c4 	c9800100 	02000000 	c0d40100 	01000000 	0000 	e9c00d0000800c00 	01 		37000000 	dc804100
	3f00f3b4 	0100 	3700 	16560f0000800900 	baf3db46 	92962e48 	0040d1c4 	c9800100 	01000000 	c0d40100 	01000000 	0000 	e9c00d0000800c00 	01 		37000000 	dc804100
	3f00f3b4	0100	3700	bedc010000800900	d726fe46	3b435e45	00d89b45	401f0000	01000000	b0d40100	01000000	0000	42660c0000800c00	00		37000000	8e7e3e00
	3f00f3b4	0100	3700	5cd20d0000800900	79b70047	6bde6a45	00e09a45	451f0000	01000000	85e7ffff	00000000	0000	55ae0c0000800c00	00		37000000	7c714000
	3f00f3b4	0100	3700	43a3060000800900	cc1afd46	9e4d3f45	00089c45	401f0000	01000000	c64dfeff	00000000	0000	f925060000800c00	00		37000000	8e7e3e00
 */
