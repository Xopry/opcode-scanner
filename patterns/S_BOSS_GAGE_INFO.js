module.exports = pak => {
	let C_MEET_BOSS_INFO = pak.prev('C_MEET_BOSS_INFO');
	let S_ACTION_STAGE = pak.prev('C_MEET_BOSS_INFO');

	return (
		C_MEET_BOSS_INFO &&
		S_ACTION_STAGE &&
		pak.mapped['C_MEET_BOSS_INFO'] &&
		pak.mapped['S_ACTION_STAGE'] &&
		pak.parse() &&
		pak.parsed.id === S_ACTION_STAGE.parsed.source &&
		pak.parsed.huntingZoneId === C_MEET_BOSS_INFO.parsed.huntingZoneId &&
		pak.parsed.templateId === C_MEET_BOSS_INFO.parsed.templateId
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
