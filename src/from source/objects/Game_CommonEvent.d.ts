/**
 *  The game object class for a common event. It contains functionality for running parallel process events.
 */
declare class Game_CommonEvent{
	constructor(commonEventId:number);
	initialize(commonEventId:number);
	
	event():$CommonEvent;
	
	list():Array<$EventCommand>;
	
	refresh();
	
	isActive():boolean;
	
	update():boolean;
}