/** The game object class for a vehicle. */
declare class Game_Vehicle extends Game_Character{
	
	constructor(type:string);
	
	initialize(type:string);
	
	isBoat():boolean;
	
	isShip():boolean;
	
	isAirship():boolean;
	
	resetDirection();
	
	initMoveSpeed();
	
	vehicle():$SystemVehicle;
	
	loadSystemSettings();
	
	refresh();
	
	setLocation(mapId:number, x:number, y:number);
	
	isMapPassable(x:number, y:number, d:number):boolean;
	
	getOn();
	
	getOff();
	
	setBgm(bgm:$AudioFile);
	
	playBgm();
	
	syncWithPlayer();
	
	shadowX();
	
	shadowY();
	
	shadowOpacity():number;
	
	canMove():boolean;
	
	updateAirship();
	
	updateAirshipAltitude();
	
	maxAltitude():number;
	
	isLowest():number;
	
	isHighest():number;
	
	isTakeoffOk():boolean;
	
	isLandOk():boolean;
	
}