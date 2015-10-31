/**The game object class for a troop and the battle-related data. */
declare class Game_Troop extends Game_Unit<Game_Enemy>{
	
	static LETTER_TABLE_HALF:Array<string>;
 	static LETTER_TABLE_FULL :Array<string>;
	 
	isEventRunning();
	
	updateInterpreter();
	
	turnCount():number;
	
	clear();
	
	troop():$Troop;
	
	setup(troopId:number);
	
	makeUniqueNames();
	
	letterTable():Array<string>;
	
	enemyNames():Array<string>;
	
	meetsConditions(page:$EventPage):boolean;
	
	setupBattleEvent();
	
	increaseTurn();
	
	expTotal():number;
	
	goldTotal():number;
	
	goldRate():number;
	
	makeDropItems():Array<$EnemyDropItem>;
}


