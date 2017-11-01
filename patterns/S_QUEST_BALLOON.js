module.exports = pak => {
	return pak.parse() && /^\@monsterBehavior\:\d+/.test(pak.parsed.message);
};
/**
 * S_QUEST_BALLOON
 * 
 * @monsterBehavior:messageId
 */
