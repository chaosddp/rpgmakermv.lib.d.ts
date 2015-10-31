/**The superclass of Game_Battler. It mainly contains parameters calculation. 可能是敌人或者我方 */
declare class Game_BattlerBase{
	/** Hit Points */
	hp:number;
	
	/**Magic Points */
	mp:number;
	
	/**Tactical Points */
	tp:number;
	
	/**Maximum Hit Points */
	mhp:number;
	
	/**Maximum Magic Points */
	mmp:number;
	
	/**ATtacK power */
	atk:number;
	
	/**DEFense power */
	def:number;
	
	/**Magic ATtack power */
	mat:number;
	
	/**Magic DeFense power */
	mdf:number;
	
	/**AGIlity */
	agi:number;
	
	/** LUcK */
	luk:number;
	
	/**HIT rate */
	hit:number;
	
	/**EVAsion rate */
	eva:number;
	
	/**CRItical rate */
	cri:number;
	
	/**Critical EVasion rate */
	cev:number;
	
	/**Magic EVasion rate */
	mev:number;
	
	/**Magic ReFlection rate */
	mrf:number;
	
	/**CouNTer attack rate */
	cnt:number;
	
	/**Hp ReGeneration rate */
	hrg:number;
	
	/** Mp ReGeneration rate */
	mrg:number;
	
	/**Tp ReGeneration rate */
	trg:number;
	
	/**TarGet Rate */
	tgr:number;
	
	/**GuaRD effect rate */
	grd:number;
	
	/**RECovery effect rate */
	rec:number;
	
	/**PHArmacology */
	pha:number;
	
	/**Mp Cost Rate */
	mcr:number;
	
	/**Tp Charge Rate */
	tcr:number;
	
	/** Physical Damage Rate */
	pdr:number;
	
	/** Magical Damage Rate */
	mdr:number;
	
	/**Floor Damage Rate */
	fdr:number;
	
	/**EXperience Rate */
	exr:number;
	
	initialize();
	
	initMembers();
	
	clearParamPlus();
	
	clearStates();
	
	/**去掉当前单位的状态 */
	eraseState(stateId:number);
	
	/** 当前单位是否有指定状态 */
	isStateAffected(stateId:number):boolean;
	
	/** 是否是死亡状态 */
	isDeathStateAffected():boolean;
	
	/**死亡状态id，目前固定为1 */
	deathStateId():number;
	
	/**重置状态持续回合，（使用最小回合数，加上一个随机数） */
	resetStateCounts(stateId:number);
	
	/**指定状态的持续回合数是否为0 */
	isStateExpired(stateId:number):boolean;
	
	/**更新单位所有状态回合数，即回合数-1 */
	updateStateTurns();
	
	/**清除增益状态 */
	clearBuffs();
	
	/**清除指定buff */
	eraseBuff(paramId:number);
	
	/**单位的buff个数 */
	buffLength():number;
	
	buff(paramId:number):number;
	
	/**buff是否生效 （即数组对应项的值） */
	isBuffAffected(paramId:number):boolean;
	
	/**debuff是否生效 */
	isDebuffAffected(paramId:number):boolean;
	
	/**buff或者debuff是否生效 */
	isBuffOrDebuffAffected(paramId:number):boolean;
	
	/**最大buff层数？ */
	isMaxBuffAffected(paramId:number):boolean;
	
	/**最大debuff层数？ */
	isMaxDebuffAffected(paramId:number):boolean;
	
	/**增加buff层数？ */
	increaseBuff(paramId:number);
	
	/**增加debuff层数？ */
	decreaseBuff(paramId:number);
	
	/**覆盖buff的持续回合数 */
	overwriteBuffTurns(paramId:number, turns:number);
	
	/**buff剩余回合数为0 */
	isBuffExpired(paramId:number):boolean;
	
	/**更新buff回合数，即-1 */
	updateBuffTurns();
	
	/**hp=0,这里会清除状态和buff */
	die();
	
	/**复活，hp=1 */
	revive();
	
	/**所有状态 */
	states():Array<$State>;
	
	/**状态图标索引 */
	stateIcons():Array<number>;
	
	buffIcons():Array<number>;
	
	buffIconIndex(bufferLevel:number, paramId:number):number;
	
	/**所有图标，包括buff和状态 */
	allIcons():Array<number>;
	
	/**暂同state() */
	traitObjects():Array<$State>;
	
	allTraits(code:number):Array<$Trait>;
	
	traits(code:number):Array<$Trait>;	
	
	traitsWithId(code:number, id:number):Array<$Trait>;
	
	traitsPi(code:number, id:number):number;
	
	traitsSum(code:number, id:number):number;
	
	traitsSumAll(code:number):number;
	
	/**$Trait.dataId 集合 */
	traitsSet(code:number):Array<number>;
	
	/**目前固定0 */
	paramBase(paramId:number):number;
	
	paramPlus(paramId:number):number;
	
	/**@param {number} paramId =1 means MMP then reutrn 0, or return 1 */
	paramMin(paramId:number):number;
	
	/**@param {number} paramId =0 means MHP, return 999999, =1 means MMP, return 9999, or return 999(即其他状态值最大值都是999，如敏捷等) */
	paramMax(paramId:number):number;
	
	paramRate(paramId:number):number;
	
	paramBuffRate(paramId:number):number;
	
	param(paramId:number):number;
	
	xparam(xparamId:number):number;
	
	sparam(sparamId:number):number;
	
	elementRate(elementId:number):number;
	
	debuffRate(paramId:number):number;
	
	stateRate(stateId:number):number;
	
	stateResistSet():Array<number>;
	
	/**是否包含状态抵抗 */
	isStateResist(stateId:number):boolean;
	
	attackElements():Array<number>;
	
	attackStates():Array<number>;
	
	attackStatesRate(stateId:number):number;
	
	attackSpeed():number;
	
	attackTimesAdd():number;
	
	addedSkillTypes():Array<number>;
	
	isSkillTypeSealed(stypeId:number):boolean;
	
	addedSkills():Array<number>;
	
	isSkillSealed(skillId:number):boolean;
	
	isEquipWtypeOk(wtypeId:number):boolean;
	
	isEquipAtypeOk(atypeId:number):boolean;
	
	isEquipTypeLocked(etypeId:number):boolean;
	
	isEquipTypeSealed(etypeId:number):boolean;
	
	/**插槽类型 */
	slotType():number;
	
	/** 双持？ */
	isDualWield():boolean;
	
	actionPlusSet():Array<number>
	
	specialFlag(flagId:number):boolean;
	
	collapseType():number;
	
	partyAbility(abilityId:number):boolean;
	
	/**通过Game_BattlerBase.FLAG_ID_AUTO_BATTLE指定 */
	isAutoBattle():boolean;
	
	/**通过Game_BattlerBase.FLAG_ID_GUARD指定 */
	isGuard():boolean;
	
	isSubstitute():boolean;
	
	isPreserveTp():boolean;
	
	addParam(paramId:number, value:number);
	
	setHp(hp:number);
	
	setMp(mp:number);
	
	setTp(tp:number);
	
	/**固定100 */
	maxTp():number;
	
	/** 刷新，清除state，重置mp/hp/tp */
	refresh();
	
	/**回复mp/hp至最大 */
	recoverAll();
	
	hpRate():number;
	
	mpRate():number;
	
	tpRate():number;
	
	/**用于战斗中单位的出现和隐藏 */
	hide();
	
	appear();
	
	isHidden():boolean;
	
	isAppeared():boolean;
	
	isDead():boolean;
	
	isAlive():boolean;
	
	/**是否快死了，血量小于1/4时 */
	isDying():boolean;
	
	isRestricted():boolean;
	
	canInput():boolean;
	
	canMove():boolean;
	
	isConfused():boolean;
	
	confusionLevel():number;
	
	/**单位是主角 */
	isActor():boolean;
	
	/**单位是敌人 */
	isEnemy():boolean;
	
	sortStates();
	
	restriction():number;
	
	addNewState(stateId:number);
	
	/**did nothing */
	onRestrict();
	
	mostImportantStateText():string;
	
	stateMotionIndex():number;
	
	stateOverlayIndex():number;
	
	isSkillWtypeOk(skill:$Skill):boolean;
	
	skillMpCost(skill:$Skill):number;
	
	skillTpCost(skill:$Skill):number;
	
	canPaySkillCost(skill:$Skill):boolean;
	
	paySkillCost(skill:$Skill);
	
	/**物品的使用场景是否正确 */
	isOccasionOk(item:Usable):boolean;
	
	/**是否能使用物品 */
	meetsUsableItemConditions(item:$Item):boolean;
	
	meetsSkillConditions(skill:$Skill):boolean;
	
	meetsItemConditions(item:$Item):boolean;
	
	canUse(item:Usable):boolean;
	
	/**武器和防具可装备 */
	canEquip(item:Equipment):boolean;
	
	canEquipWeapon(item:$Weapon):boolean;
	
	canEquipArmor(item:$Armor):boolean;
	
	/**普通攻击技能id，固定1 */
	attackSkillId():number;
	
	/**防御技能id， 固定2 */
	guardSkillId():number;
	
	canAttack():boolean;
	
	canGuard():boolean;
}

declare module Game_BattlerBase{
var TRAIT_ELEMENT_RATE   :number;
var TRAIT_DEBUFF_RATE    :number;
var TRAIT_STATE_RATE     :number;
var TRAIT_STATE_RESIST   :number;
var TRAIT_PARAM          :number;
var TRAIT_XPARAM         :number;
var TRAIT_SPARAM         :number;
var TRAIT_ATTACK_ELEMENT :number;
var TRAIT_ATTACK_STATE   :number;
var TRAIT_ATTACK_SPEED   :number;
var TRAIT_ATTACK_TIMES   :number;
var TRAIT_STYPE_ADD      :number;
var TRAIT_STYPE_SEAL     :number;
var TRAIT_SKILL_ADD      :number;
var TRAIT_SKILL_SEAL     :number;
var TRAIT_EQUIP_WTYPE    :number;
var TRAIT_EQUIP_ATYPE    :number;
var TRAIT_EQUIP_LOCK     :number;
var TRAIT_EQUIP_SEAL     :number;
var TRAIT_SLOT_TYPE      :number;
var TRAIT_ACTION_PLUS    :number;
var TRAIT_SPECIAL_FLAG   :number;
var TRAIT_COLLAPSE_TYPE  :number;
var TRAIT_PARTY_ABILITY  :number;
var FLAG_ID_AUTO_BATTLE  :number;
var FLAG_ID_GUARD        :number;
var FLAG_ID_SUBSTITUTE   :number;
var FLAG_ID_PRESERVE_TP  :number;
var ICON_BUFF_START      :number;
var ICON_DEBUFF_START    :number;
}