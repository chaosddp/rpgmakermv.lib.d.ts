/**The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
 and actions. */
declare class Game_Battler extends Game_BattlerBase{
	constructor();
	
	clearAnimations();
	
	clearDamagePopup();
	
	clearWeaponAnimation();
	
	clearEffect();
	
	clearMotion();
	
	requestEffect(effectType:any);
	
	requestMotion(motionType:any);
	
	requestMotionRefresh();
	
	select();
	
	deselect();
	
	isAnimationRequested():boolean;
	
	isDamagePopupRequested():boolean;
	
	isEffectRequested():boolean;
	
	isMotionRequested():boolean;
	
	isWeaponAnimationRequested():boolean;
	
	isMotionRefreshRequested():boolean;
	
	isSelected():boolean;
	
	effectType():any;
	
	motionType():any;
	
	weaponImageId():number;
	
	shiftAnimation():any;
	
	startAnimation();
	
	startDamagePopup();
	
	startWeaponAnimation(weaponImageId:number);
	
	/**TODO: return type correct? */
	action(index:number):Game_Action;
	
	setAction(index:number, action:Game_Action);
	
	/**action count */
	numActions():number;
	
	clearActions();
	
	result():Game_ActionResult;
	
	clearResult();
	
	addState(stateId:number);
	
	/** */
	isStateAddable(stateId:number):boolean;
	
	isStateRestrict(stateId:number):boolean;
	
	removeState(stateId:number);
	
	escape();
	
	addBuff(paramId:number, turns:number);
	
	addDebuff(paramId:number, turns:number);
	
	removeBuff(paramId:number);
	
	removeBattleStates();
	
	removeAllBuffs();
	
	removeStatesAuto(timing:number);
	
	removeBuffsAuto();
	
	removeStatesByDamage();
	
	makeActionTimes():number;
	
	makeActions();
	
	speed():number;
	
	makeSpeed();
	
	currentAction():Game_Action;
	
	removeCurrentAction();
	
	/**TODO: type correct? */
	setLastTarget(target:Game_Battler);
	
	forceAction(skillId:number, targetIndex:number);
	
	/**
	 * use the specified item(include skill)
	 * 
	 * @param {Useable} item can be item or skill 
	 */
	useItem(item:Usable);
	
	gainHp(value:number);
	
	gainMp(value:number);
	
	gainTp(value:number);
	
	gainSilentTp(value:number);
	
	/**0-25之间的随机数 */
	initTp(value:number);
	
	clearTp();
	
	chargeTpByDamage(damageRage:number);
	
	regenerateHp();
	
	maxSlipDamage():number;
	
	regenerateMp();
	
	regenerateTp();
	
	
	/** hp, mp, tp if alive*/
	regenerateAll();
	
	/**do some init  */
	onBattleStart();
	
	/**    this.clearResult();
    this.removeStatesAuto(1);
    this.removeBuffsAuto(); */
	onAllActionsEnd();
	
	/**
    this.clearResult();
    this.regenerateAll();
    this.updateStateTurns();
    this.updateBuffTurns();
    this.removeStatesAuto(2);
	 */
	onTurnEnd();
	
	/**clear some state */
	onBattleEnd();
	
	onDamage(value:number);
	
	setActionState(actionState:string);
	
	/** if state==undecided */
	isUndecided():boolean;
	
	/** if state==inputting */	
	isInputting():boolean;
	
	/** if state==waiting */
	isWaiting():boolean;
	
	isActing():boolean;
	
	/**TODO: 吟唱中？ */
	isChanting():boolean;
	
	isGuardWaiting():boolean;
	
	performActionStart(action:Game_Action);
	
	/**do notihing now */
	performAction();
	
	/**set state to done */
	performActionEnd();
	
	/**do notihing now */
	performDamage();
	
	/** play missing sound */
	performMiss();

	/** paly recovery sound */	
	performRecovery();
	
	/** play evasion sound */
	performEvasion();
	
	/** play magic evasion sound */
	performMagicEvasion();
	
	/**play  evasion sound */
	performCounter();
	
	/** play reflection sound */
	performReflection();
	
	performSubstitute();
	
	performCollapse();
}
