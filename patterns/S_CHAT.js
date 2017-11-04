module.exports = pak => {
	let prev = pak.prev('S_LOGIN');

	return (
		prev &&
		pak.parse() &&
		pak.parsed.channel >>> 0 < 300 &&
		pak.parsed.authorID.equals(prev.parsed.cid) &&
		pak.parsed.authorName === prev.parsed.name &&
		pak.parsed.message.startsWith('<FONT')
	);
};
