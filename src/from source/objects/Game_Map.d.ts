/**The game object class for a map. It contains scrolling and passage
determination functions. */
declare class Game_Map{
	initialize();
	
	setup(mapId:number);
	
	isEventRunning():boolean;
	
	/**fixed to 48 now */
	tileWidth():number;
	
	/** fixed to 48 now */
	tileHeight():number;
	
	mapId():number;
	
	tilesetId():number;
	
	displayX():number;
	
	displayY():number;
	
	parallaxName():string;
	
	battleback1Name():string;
	
	
	battleback2Name():string;
	
	requestRefresh(mapId:number);
	
	isNameDisplayEnabled():boolean;
	
	disableNameDisplay();
	
	enableNameDisplay();
	
	createVehicles();
	
	refereshVehicles();
	
	vehicles():Array<Game_Vehicle>;
	
	vehicle(type:string):Game_Vehicle;
	
	boat():Game_Vehicle;
	
	ship():Game_Vehicle;
	
	airship():Game_Vehicle;
	
	setupEvents();
	
	events():Array<Game_Event>;
	
	event(eventId:number):Game_Event;
	
	eraseEvent(eventId:number);
	
	parallelCommonEvents():Array<$CommonEvent>;
	
	setupScroll();
	
	setupParallax();
	
	setupBattleback();
	
	setDisplayPos(x:number, y:number);
	
	parallaxOx():number;
	
	parallaxOy():number;
	
	tileset():$Tileset;
	
	tilesetFlags():Array<number>;
	
	displayName():string;
	
	width():number;
	
	height():number;
	
	data():Array<any>;
	
	isLoopHorizontal():boolean;
	
	isLoopVertical():boolean;
	
	isDashDisabled():boolean;
	
	encounterList()	 :Array<$MapEncounter>;
	
	encounterStep():number;
	
	isOverworld():boolean;
	
	screenTileX():number;
	
	screenTileY():number;
	
	adjustX(x:number):number;
	
	adjustY(y:number):number;
	
	roundX(x:number):number;
	
	roundY(x:number):number;
	
	xWithDirection(x:number, d:number):number;
	
	yWithDirection(y:number, d:number):number;
	
	roundXWithDirection(x:number, d:number):number;
	
	roundYWithDirection(y:number, d:number):number;
	
	deltaX(x1:number, x2:number):number;
	
	deltaY(y1:number, y2:number);
	
	distance(x1:number, y1:number, x2:number, y2:number):number;
	
	canvasToMapX(x:number):number;
	
	canvasToMapY(y:number):number;
	
	/** play bgm */
	autoplay();
	
	refreshIfNeeded();
	
	refresh();
	
	refreshTileEvents();
	
	eventsXy(x:number, y:number):Array<Game_Event>;
	
	eventsXyNt(x:number, y:number):Array<Game_Event>;
	
	tileEventsXy(x:number, y:number):Array<Game_Event>;
	
	eventIdXy(x:number, y:number):number;
	
	scrollDown();
	
	scrollLeft();
	
	scrollRight();
	
	scrollUp();
	
	isValid(x:number, y:number):boolean;
	
	checkPassage(x:number, y:number, bit:number):boolean;
	
	tileId(x:number, y:number, z:number):number;
	
	layeredTiles(x:number, y:number):Array<number>;
	
	allTiles(x:number, y:number):Array<number>;
	
	autotileType(x:number, y:number, z:number):number;
	
	isPassable(x:number, y:number , d:number):boolean;
	
	isBoatPassable(x:number, y:number):boolean;
	
	isShipPassable(x:number, y:number):boolean;
	
	isAirshipLandOk(x:number, y:number):boolean;
	
	checkLayeredTilesFlags(x:number, y:number, bit:number):boolean;
	
	isLadder(x:number, y:number):boolean;
	
	isBush(x:number, y:number):boolean;
	
	isCounter(x:number, y:number):boolean;
	
	isDamageFloor(x:number, y:number):boolean;
	
	terrainTag(x:number, y:number):number;
	
	regionId(x:number, y:number):number;
	
	/**
	 * @param {number} direction 2=down, 4=left, 6=right, 8=up
	 */
	startScroll(direction:number, distance:number, spped:number);
	
	isScrolling():boolean;
	
	update();
	
	updateScroll();
	
	scrollDistance():number;
		
	/**
	 * @param {number} direction 2=down, 4=left, 6=right, 8=up
	 */
	doScroll(direction:number, distance:number);
	
	updateEvents();
	
	updateVehicles();
	
	updateParallax();
	
	changeTileset(tilesetId:number);
	
	changeBattleback(battleback1Name:string, battleback2Name:string);
	
	changeParallax(name:string, loopX:boolean, loopY:boolean, sx:number, sy:number);
	
	updateInterpreter();
	
	unlockEvent(eventId:number);
	
	setupStartingEvent():boolean;
	
	setupTestEvent():boolean;
	
	setupStartingMapEvent():boolean;
	
	setupAutorunCommonEvent():boolean;
	
	isAnyEventStarting():boolean;
}