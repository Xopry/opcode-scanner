module.exports = pak => {
	const hex = pak.data.toString('hex');
	const C_RETURN_TO_LOBBY = pak.prev('C_RETURN_TO_LOBBY');

	return (
		C_RETURN_TO_LOBBY &&
		pak.mapped['C_RETURN_TO_LOBBY'] &&
		pak.parse() &&
		pak.parsed.time === 10 &&
		hex.length === 16
	);
};
