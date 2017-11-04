module.exports = pak => {
	const hex = pak.data.toString('hex');
	let next = pak.next();

	return (
		next && next.name() === 'S_PREPARE_RETURN_TO_LOBBY' && hex.length === 8
	);
};

/**
 * C_RETURN_TO_LOBBY
 * 0400726a
 	-> (27250) C_RETURN_TO_LOBBY 0400726a
	<- (33768) S_PREPARE_RETURN_TO_LOBBY 0800e8830a000000
 */
