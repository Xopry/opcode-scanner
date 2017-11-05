module.exports = pak => {
	if (!pak.parse()) return false;
	const hex = pak.data.toString('hex');

	let prev = pak.prev('S_REQUEST_STYLE_SHOP_MARK_PRODUCTLIST');

	if (!prev || !pak.mapped['S_REQUEST_STYLE_SHOP_MARK_PRODUCTLIST'])
		return false;

	const findIndex = prev.parsed.list.findIndex(x => x.id === pak.parsed.item);
	return findIndex >= 0 && hex.length === 32;
};

/**
 * C_REQUEST_NONDB_ITEM_INFO
	int32 item
	int32 unk1
	int32 unk2

	100092bf 9ae60300 00000000 00000000
*/
