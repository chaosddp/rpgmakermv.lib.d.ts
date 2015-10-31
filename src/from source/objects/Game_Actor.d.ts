/**The game object class for an actor. */
declare class Game_Actor extends Game_Battler{
	level:number;
	
	setup(actorId:number);
	
	actorId():number;
	
	actor():$Actor;
	
	name():string;
	
	setName(name:string);
	
	nickname():string;
	
	setNickname(nickName:string);
	
	profile():string;
	
	setProfile(profile:string);
	
	characterName():string;
	
	characterIndex():number;
	
	faceName():string;
	
	faceIndex():number;
	
	battlerName():string;
	
	initImages();
	
	expForLevel():number;
	
	initExp();
	
	currentExp():number;
	
	currentLevelExp():number;
	
	nextLevelExp():number;
	
	nextRequiredExp():number;
	
	maxLevel():number;
	
	isMaxLevel():boolean;
	
	initSkills();
	
	initEquips();
	
	equipSlots();
	
	/** all equipments include weapon and armor */
	equips():Array<Equipment>;
	
	weapons():Array<$Weapon>;
	
	armors():Array<$Armor>;
	
	hasWeapon(weapon:$Weapon):boolean;
	
	hasArmor(armor:$Armor):boolean;
	
	/** if we can change the equipment in specified slot  */
	isEquipChangeOk(slotId:number):boolean;
	
	changeEquip(soltId:number, item:Equipment);
	
	forceChangeEquip(slotId:number, item:Equipment);
	
	/** the items can be weapon, armor, and item */
	tradeItemWithParty(newItem:any, oldItem:any);
	
	changeEquipById(etypeId:number, itemId:number);
	
	isEquipped(item:Equipment);
	
	discardEquip(item:Equipment);
	
	releaseUnequippableItems(forcing:boolean);
	
	clearEquipments();
	
	/** change all slots to best equipments */
	optimizeEquipments();
	
	bestEquipItem(slotId:number):Equipment;
	
	/**计算能力值，用于计算是否是最佳装备 */
	calcEquipItemPerformance(item:Equipment):number;
	
	/**技能针对当前装备的武器是否合适（可用） */
	isSkillWtypeOk(skill:$Skill):boolean;
	
	/**是否装备指定类型的武器 */
	isWtypeEquipped(wtypeId:number);
	
	/**always be true */
	isActor():boolean;
	
	/** same with $gameParty */
	friendsUnit():Game_Party;
	
	/** same with $gameTroop */
	opponentsUnit():Game_Troop;
	
	/**index in the party */
	index():number;
	
	isBattleMember():boolean;
	
	/** always be true */
	isFormationChangeOk():boolean;
	
	currentClass():$Class;
	
	isClass(gameClass:$Class):boolean;
	
	skills():Array<$Skill>;
	
	usableSkills():Array<$Skill>;
	
	hasNoWeapons():boolean;
	
	/** 徒手伤害类型？ */
	bareHandsElementId():number;
	
	
	paramBase(paramId:number):any;
	
	attackAnimationId1():number;
	
	attackAnimationId2():number;
	
	bareHandsAnimationId():number;
	
	/**设置经验值
	 * @param {number} exp 需要的经验值
	 * @param {boolean} show 提升经验之后，如果升级是否显示
	 */
	changeExp(exp:number, show:boolean);
	
	levelUp();
	
	levelDown();
	
	/**当前等级能学习的新技能 */
	findNewSkills(lastSkills:Array<$Skill>):Array<$Skill>;
	
	/**显示升级信息（包括新技能） */
	displayLevelUp(newSkills:Array<$Skill>);
	
	/**增加经验 */
	gainExp(exp:number);
	
	finalExpRate();
	
	/**1/0 */
	benchMembersExpRate():number;
	
	shouldDisplayLevelUp():boolean;
	
	changeLevel(level:number, show:boolean);
	
	learnSkill(skillId:number);
	
	forgetSkill(skillId:number);
	
	isLearnedSkill(skillId:number);
	
	changeClass(classId:number, keepExp:boolean);
	
	setCharacterImage(characterName: string, characterIndex:number);
	
	setFaceImage(faceName:string, faceIndex:number);
	
	setBattlerImage(battlerName:string);
	
	isSpriteVisible():boolean;
	
	performAttack():boolean;
	
	performVictory();
	
	performEscape();
	
	makeActionList();
	
	makeAutoBattleActions();
	
	makeConfusionActions();
	
	onPlayerWalk();
	
	updateStateSteps(state:$State);
	
	showAddedStates();
	
	showRemovedStates();
	
	/** fix to 20 now */
	stepsForTurn():number;
	
	turnEndOnMap();
	
	checkFloorEffect();
	
	executeFloorDamage();
	
	/**fix to 20 now */
	basicFloorDamage():number;
	
	maxFloorDamage():number;
	
	performMapDamage();
	
	inputtingAction():Game_Action;
	
	selectNextCommand():boolean;
	
	selectPreviousCommand():boolean;
	
	/** TODO: type? */
	lastMenuSkill():$Skill;
	
	setLastMenuSkill(skill:$Skill);
	
	lastBattleSkill():$Skill;
	
	setLastBattleSkill(skill:$Skill);
	
	lastCommandSymbol():string;
	
	setLastCommandSymbol(symbol:string);

}