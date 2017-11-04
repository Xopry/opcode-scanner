module.exports = pak => {
	let S_SYSTEM_MESSAGE = pak.next('S_SYSTEM_MESSAGE');
	let next = pak.next();

	return (
		next &&
		next.name() === 'S_SYSTEM_MESSAGE' &&
		parseInt(next.parsed.message.replace('@', '')) === 193
	);
};

/**
 * S_LEAVE_PARTY

	<- (57305) S_LEAVE_PARTY 	0400d9df
	<- (41068) S_SYSTEM_MESSAGE 10006ca0 060040003100390033000000
 */
