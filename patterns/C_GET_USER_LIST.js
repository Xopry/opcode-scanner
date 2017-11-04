module.exports = pak => {
	const hex = pak.data.toString('hex');
	let next = pak.next();

	return next && next.name() === 'S_GET_USER_LIST' && hex.length === 8;
};
