module.exports = pak => {
	const prev = pak.prev();

	return prev && prev.name() === 'C_GET_USER_LIST';
};
