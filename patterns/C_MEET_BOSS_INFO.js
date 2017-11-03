module.exports = pak => {
	const S_BOSS_GAGE_INFO = pak.prev('S_BOSS_GAGE_INFO');

	return (
		S_BOSS_GAGE_INFO &&
		pak.mapped['S_BOSS_GAGE_INFO'] &&
		pak.parse() &&
		pak.parsed.huntingZoneId === S_BOSS_GAGE_INFO.parsed.huntingZoneId &&
		pak.parsed.templateId === S_BOSS_GAGE_INFO.parsed.templateId
	);
};

/**
 * C_MEET_BOSS_INFO
 * uint32 huntingZoneId  === S_BOSS_GAGE_INFO.huntingZoneId
 * uint32 templateId === S_BOSS_GAGE_INFO.templateId
 */
