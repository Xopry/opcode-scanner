module.exports = pak => {
	if (!pak.parse()) return false;
	let prev = pak.prev('S_LOGIN');

	return prev && pak.parsed.id.equals(prev.parsed.cid);
};
