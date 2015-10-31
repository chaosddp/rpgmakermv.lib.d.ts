/** The game object class for an event. It contains functionality for event page
 switching and running parallel process events. */
declare class Game_Event extends Game_Character{
	
	constructor(mapId:number, eventId:number);
	
	initialize(mapId:number, eventId:number);
	
	eventId():number;
	
	event():$Event;
	
	page():$EventPage;
	
	/** event page list */
	list():Array<$EventPage>;
	
	isCollidedWithEvents():boolean;
	
	isCollidedWithPlayerCharacters():boolean;
	
	lock();
	
	unlock();
	
	updateSelfMovement();
	
	stopCountThreshold():number;
	
	moveTypeRandom();
	
	moveTypeTowardPlayer();
	
	isNearThePlayer():boolean;
	
	moveTypeCustom();
	
	isStarting():boolean;
	
	clearStartingFlag();
	
	isTriggerIn(trigger:Array<number>);
	
	start();
	
	erase();
	
	refresh();
	
	findProperPageIndex():number;
	
	meetsConditions(page:$EventPage):boolean;
	
	setupPage();
	
	clearPageSettings();
	
	setupPageSettings();
	
	resetPattern();
	
	checkEventTriggerTouch(x:number, y:number);
	
	checkEventTriggerAuto();
	
	updateParallel();
	
}