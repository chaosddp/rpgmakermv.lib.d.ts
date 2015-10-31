/** The interpreter for running event commands. */
declare class Game_Interpreter{
	
	constructor(depth:number);
	
	initialize(depth:number);
	
	checkOverflow();
	
	clear();
	
	setup();
	
	eventId():number;
	
	isOnCurrentMap():boolean;
	
	setupReservedCommonEvent():boolean;
	
	isRunning():boolean;
	
	update();
	
	updateChild():boolean;
	
	updateWait():boolean;
	
	updateWaitCount():boolean;
	
	updateWaitMode():boolean;
	
	/**@param {string} waitMode can be one of ['', message,transfer , scroll, route, animation, balloon, gather,action, video, image */
	setWaitMode(waitMode:string);
	
	wait(duration:number);
	
	/**fixed to 24 */
	fadeSpeed():number;
	
	executeCommand():boolean;
	
	checkFreeze():boolean;
	
	terminate();
	
	skipBranch();
	
	currentCommand():$EventCommand;
	
	nextEventCode():number;
	
	/**@param {number} param 0: means to invode the callback on all members in $gameParty, >0: means invove the callback on that actor */
	iterateActorId(param:number, callback:Function);
	
	/**@param {number} param1 the type of this call, 0: means call iterateActorId, then use params2 and callback as parameter, >0: means using $gameVariables(param2) and callback as parameter to call iterateActorId*/
	iterateActorEx(param1:number, param2:number, callback:Function);
	
	iterateActorIndex(param:number, callback:Function);
	
	iterateEnemyIndex(param:number, callback:Function);
	
	iterateBattler(param1:number, param2:number, callback:Function);
	
	character(param:number):Game_CharacterBase;
	
	operateValue(operation:number, operandType:number, operand:number):number;
	
	changeHp(target:Game_BattlerBase, value:number, allowDeath:boolean);
	
	/**@return .webm/.mp4 */
	videoFileExt():string;
	
	// TODO: lots of command not included
	
}