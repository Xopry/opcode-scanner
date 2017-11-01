module.exports = pak => {
	let prv = pak.prev('S_LOAD_TOPO');
	return (
		prv &&
		pak.mapped['S_LOAD_TOPO'] &&
		pak.parse() &&
		pak.parsed.huntingZoneId === prv.parsed.zone
	);
};

/**
 * C_MEET_BOSS_INFO
 * uint32 huntingZoneId  === S_LOAD_TOPO.zone
 * uint32 templateId
 */
