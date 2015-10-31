/**The game object class for an enemy. */
declare class Game_Enemy extends Game_Battler{
	setup();
	
	/** always be ture */
	isEnemy():boolean;
	
	/** same with $gameTroop */
	friendsUnit():Game_Troop;
	
	/** same with $gameParty */
	opponentsUnit():Game_Party;
	
	/**index in the troop */
	index():number;
	
	isBattleMember():boolean;
	
	enemyId():number;
	
	enemy():$Enemy;
	
	paramBase(paramID:number):any;
	
	exp():number;
	
	gold():number;
	
	makeDropItems():Array<$EnemyDropItem>;
	
	dropItemRate():number;
	
	/** 得到对应物品
	 * @param {number} kind 1=道具，2= 武器， 3=护甲
	 * @param {number} dataId 物品对应id
	 * */
	itemObject(kind:number, dataId:number);
	
	/** fixed to true now */
	isSpriteVisible():boolean;
	
	screenX():number;
	
	screenY():number;
	
	battlerName():string;
	
	battlerHue():number;
	
	originalName():string;
	
	name():string;
	
	isLetterEmpty():boolean;
	
	setLetter(letter:string);
	
	setPlural(plural:boolean);
	
	transform(enemyId:number);
	
	meetsCondition(action:$EnemyAction);
	
	meetsTurnCondition(param1:number, param2:number):boolean;
	
	meetsHpCondition(param1:number, param2:number):boolean;
	
	meetsMpCondition(param1:number, param2:number):boolean;
	
	meetsStateCondition(param:number):boolean;
	
	meetsPartyLevelCondition(param:number):boolean;
	
	meetsSwitchCondition(param:number):boolean;
	
	isActionValid(action:$EnemyAction):boolean;
	
	selectAction(actionList:Array<$EnemyAction>, ratingZero:number);
	
	selectAllActions(actionList:Array<$EnemyAction>);
	
	makeActions();
}