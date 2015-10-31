/** The game object class for a battle action. */
declare class Game_Action{
	constructor(subject:Game_BattlerBase, forcing:boolean);
	initialize(subject:Game_BattlerBase, forcing:boolean);
	
	clear();
	
	setSubject(subject:Game_BattlerBase);
	
	subject():$TroopMember;
	
	/** Game_Troop/Game_Party */
	friendsUnit():any;
	
	/** Game_Troop/Game_Party */
	opponentsUnit():any;
	

	setEnemyAction(action:$EnemyAction);
	
	setAttack();
	
	setGuard();
	
	setSkill(skillId:number);
	
	setItem(itemId:number);
	
	setItemObject(object:Usable);
	
	setTarget(targetIndex:number);
	
	/**item of this action, may be skill or an item */
	item():Usable;
	
	isSkill():boolean;
	
	isItem():boolean;
	
	checkItemScope(list:Array<number>):boolean;
	
	isForOpponent():boolean;
	
	isForFriend():boolean;
	
	isForDeadFriend():boolean;
	
	isForUser():boolean;
	
	isForOne():boolean;
	
	isForRandom():boolean;
	
	isForAll():boolean;
	
	needsSelection():boolean;
	
	numTargets():number;
	
	checkDamageType():boolean;
	
	isHpEffect():boolean;
	
	isMpEffect():boolean;
	
	isDamage():boolean;
	
	isRecover():boolean;
	
	isDrain():boolean;
	
	isHpRecover():boolean;
	
	isMpRecover():boolean;
	
	isCertainHit():boolean;
	
	isPhysical():boolean;
	
	isMagical():boolean;
	
	isAttack():boolean;
	
	isGuard():boolean;
	
	isMagicSkill():boolean;
	
	decideRandomTarget();
	
	setConfusion();
	
	prepare();
	
	isValid():boolean;
	
	speed():number;
	
	makeTargets(targets: Array<Game_BattlerBase>):Array<Game_BattlerBase>;
	
	confusionTarget():Game_BattlerBase;
	
	targetsForOpponents():Array<Game_BattlerBase>;
	
	targetsForFriends():Array<Game_BattlerBase>;
	
	evaluate():number;
	
	itemTargetCandidates():Array<Game_BattlerBase>;
	
	evaluateWithTarget(target:Game_BattlerBase):number;
	
	testApply(target:Game_BattlerBase):boolean;
	
	hasItemAnyValidEffects(target:Game_BattlerBase):boolean;
	
	testItemEffect(target:Game_BattlerBase, effect:$Effect):boolean;
	
	itemCnt(target:Game_BattlerBase):number;
	
	itemMrf(target:Game_BattlerBase):number;
	
	itemHit(target:Game_BattlerBase):number;
	
	itemEva(target:Game_BattlerBase):number;
	
	itemCri(target:Game_BattlerBase):number;
	
	apply(target:Game_BattlerBase):number;
	
	makeDamageValue(target:Game_BattlerBase, critical:boolean):number;
	
	evalDamageFormula(target:Game_BattlerBase):number;
	
	calcElementRate(target:Game_BattlerBase):number;
	
	elementsMaxRate(target:Game_BattlerBase):number;
	
	/** 3 times */
	applyCritical(damage:number):number;
	
	applyVariance(damage:number, variance:number):number;
	
	applyGuard(damage:number, target:Game_BattlerBase):number;
	
	/**this method will check damage type to call executeHpDamage or executeMpDamage */
	executeDamage(target:Game_BattlerBase, value:number);
	
	executeHpDamage(target:Game_BattlerBase, value:number);
	
	executeMpDamage(target:Game_BattlerBase, value:number);
	
	/** */
	gainDrainedHp(value:number);
	
	gainDrainedMp(value:number);
	
	applyItemEffect(target:Game_BattlerBase, effect:$Effect); 
	
	itemEffectRecoverHp(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectRecoverMp(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectGainTp(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddState(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddAttackState(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddNormalState(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectRemoveState(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddBuff(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddDebuff(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectRemoveBuff(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectRemoveDebuff(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectSpecial(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectGrow(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectLearnSkill(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectCommonEvent(target:Game_BattlerBase, effect:$Effect);
	
	makeSuccess(target:Game_BattlerBase);
	
	applyItemUserEffect(target:Game_BattlerBase);
	
	lukEffectRate(target:Game_BattlerBase):number;
	
	applyGlobal();
	
}

declare module Game_Action{
var EFFECT_RECOVER_HP :number;
var EFFECT_RECOVER_MP    :number;
var EFFECT_GAIN_TP      :number;
var EFFECT_ADD_STATE     :number;
var EFFECT_REMOVE_STATE   :number;
var EFFECT_ADD_BUFF         :number;
var EFFECT_ADD_DEBUFF      :number;
var EFFECT_REMOVE_BUFF    :number;
var EFFECT_REMOVE_DEBUFF   :number;
var EFFECT_SPECIAL          :number;
var EFFECT_GROW             :number;
var EFFECT_LEARN_SKILL      :number;
var EFFECT_COMMON_EVENT     :number;
var SPECIAL_EFFECT_ESCAPE    :number;
var HITTYPE_CERTAIN          :number;
var HITTYPE_PHYSICAL       :number;
var HITTYPE_MAGICAL        :number;
}