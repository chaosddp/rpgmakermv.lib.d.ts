/** The game object class for the player. It contains event starting
 determinants and map scrolling functions. */
declare class Game_Player extends Game_Character{
	
	clearTransferInfo();
	
	followers():Game_Followers;
	
	refresh();
	
	reserveTransfer(mapId:number, x:number, y:number, d:number, fadeType:number);
	
	requestMapReload();
	
	isTransferring():boolean;
	
	newMapId():number;
	
	fadeType():number;
	
	performTransfer();
	
	vehicle():Game_Vehicle;
	
	isInBoat():boolean;
	
	isInShip():boolean;
	
	isInAirship():boolean;
	
	isInVehicle():boolean;
	
	/** wali and is not forced to move */
	isNormal():boolean;
	
	isDashing():boolean;
	
	isDebugThrough():boolean;
	
	isCollided(x:number, y:number):boolean;
	
	centerX():number;
	
	centerY():number;
	
	center(x:number, y:number):number;
	
	locate(x:number, y:number);
	
	makeEncounterCount();
	
	makeEncounterTroopId():number;
	
	meetsEncounterConditions(encounter:$MapEncounter):boolean;
	
	executeEncounter():boolean;
	
	startMapEvent(x:number, y:number, triggers:Array<number>, normal:boolean);
	
	moveByInput();
	
	canMove():boolean;
	
	getInputDirection():number;
	
	executeMove(direction:number);
	
	updateDashing();
	
	/**shift pressed */
	isDashButtonPressed():boolean;
	
	updateScroll(lastScrolledX:number, lastScrolledY:number);
	
	updateVehicle();
	
	updateVehicleGetOn();
	
	updateVehicleGetOff();
	
	updateNonmoving(wasMoving:boolean);
	
	triggerAction():boolean;
	
	triggerButtonAction():boolean;
	
	triggerTouchAction():boolean;
	
	triggerTouchActionD1(x1:number, y1:number):boolean;
	
	triggerTouchActionD2(x2:number, y2:number):boolean;
	
	triggerTouchActionD3(x2:number, y2:number):boolean;
	
	updateEncounterCount();
	
	canEncounter():boolean;
	
	encounterProgressValue():number;
	
	checkEventTriggerHere(triggers:Array<number>);
	
	checkEventTriggerThere(triggers:Array<number>);
	
	checkEventTriggerTouch(x:number, y:number);
	
	canStartLocalEvents():boolean;
	
	getOnOffVehicle():boolean;
	
	getOnVehicle():boolean;
	
	getOffVehicle():boolean;
	
	forceMoveForward();
	
	isOnDamageFloor():boolean;
	
	showFollowers();
	
	hideFollowers();
	
	gatherFollowers();
	
	areFollowersGathering():boolean;
	
	areFollowersGathered():boolean;
	
}