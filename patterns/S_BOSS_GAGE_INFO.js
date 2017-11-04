module.exports = pak => {
	const S_ACTION_STAGE = pak.prev('S_ACTION_STAGE');

	return (
		S_ACTION_STAGE &&
		pak.mapped['S_ACTION_STAGE'] &&
		pak.parse() &&
		pak.parsed.id.high === S_ACTION_STAGE.parsed.source.high &&
		pak.parsed.curHp.equals(pak.parsed.maxHp)
	);
};

/**
 * S_BOSS_GAGE_INFO
	uint64 id 				=== S_ACTION_STAGE.source
	uint32 huntingZoneId 	=== C_MEET_BOSS_INFO.huntingZoneId
	uint32 templateId 		=== C_MEET_BOSS_INFO.templateId
	uint64 target
	int32  unk1
	byte   unk2
	int64  curHp
	int64  maxHp
	byte   unk3 # always 1?
 */
