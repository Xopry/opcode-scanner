module.exports = pak =>
	pak.parse() && /^\@dungeon\:\d+/.test(pak.parsed.message);
/**
 * S_DUNGEON_EVENT_MESSAGE
 * 
 * @dungeon:messageId
 */
