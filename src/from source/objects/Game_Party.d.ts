/** The game object class for the party. Information such as gold and items is
 included. */
declare class Game_Party extends Game_Unit<Game_Actor>{
	initAllItems();
	
	exists():boolean;
	
	size():number;
	
	isEmpty():boolean;
	
	allMembers():Array<Game_Actor>;
	
	/** fixed to 4 now */
	maxBattleMembers():number;
	
	leader():Game_Actor;
	
	reviveBattleMembers();
	
	items():Array<$Item>;
	
	weapons():Array<$Weapon>;
	
	armors():Array<$Armor>;
	
	equipItems():Array<Equipment>;

	allItems():Array<Usable>;
	
	/**可为防具，武器，道具 */
	itemContainer(item:any):any;
	
	setupStartingMembers();
	
	name():string;
	
	setupBattleTest();
	
	setupBattleTestMembers();
	
	setupBattleTestItems();
	
	highestLevel():number;
	
	addActor(actorId:number);
	
	removeActor(actorId:number);
	
	gold():number;
	
	gainGold(amount:number);
	
	loseGold(amount:number);
	
	/** now fixed to 99999999 */
	maxGold():number;
	
	steps():number;
	
	increaseSteps();
	
	/**可为防具，武器，道具 */
	numItems(item:any):number;
	
	/** now fixed to 99 */
	maxItems(item:any):number;
	
	hasMaxItems(item:any):boolean;
	
	hasItem(item:any, includeEquip:boolean):boolean;
	
	isAnyMemberEquipped(item:Equipment):boolean;
	
	gainItem(item:any, amout:number, includeEquip:boolean);
	
	discardMembersEquip(item:Equipment, amout:number);
	
	loseItem(item:any, amout:number, includeEquip:boolean);
	
	consumeItem(item:$Item);
	
	canUse(item:Usable):boolean;
	
	canInput():boolean;
	
	onPlayerWalk();
	
	menuActor():Game_Actor;
	
	setMenuActor(actor:Game_Actor);
	
	makeMenuActorNext();
	
	makeMenuActorPrevious();
	
	targetActor():Game_Actor;
	
	setTargetActor(actor:Game_Actor);
	
	lastItem():Game_Item;
	
	setLastItem(item:any);
	
	swapOrder(index1:number, index2:number);
	
	/**0:characterName, 1: characterIndex */
	charactersForSavefile():Array<any>;
	
	/**0:faceName, 1:faceIndex */
	facesForSavefile():Array<any>;
	
	partyAbility(abilityId:boolean):boolean;
	
	hasEncounterHalf():boolean;
	
	hasEncounterNone():boolean;
	
	hasCancelSurprise():boolean;
	
	hasRaisePreemptive():boolean;
	
	hasGoldDouble():boolean;
	
	hasDropItemDouble():boolean;
	
	ratePreemptive(troopAgi:number):number;
	
	rateSurprise(troopAgi:number):number;
	
	performVictory();
	
	performEscape();
	
	removeBattleStates();
	
	requestMotionRefresh();
}


declare module Game_Party{
var ABILITY_ENCOUNTER_HALF    :number;
var ABILITY_ENCOUNTER_NONE   :number;
var ABILITY_CANCEL_SURPRISE   :number;
var ABILITY_RAISE_PREEMPTIVE :number;
var ABILITY_GOLD_DOUBLE       :number;
var ABILITY_DROP_ITEM_DOUBLE  :number;
}