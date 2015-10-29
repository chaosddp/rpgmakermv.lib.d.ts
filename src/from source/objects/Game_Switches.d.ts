/**The game object class for switches. */
declare class Game_Switches{
	initialize();
	
	clear();
	
	/**TODO: type correct? */
	value():string;
	
	setValue(switchid:number, value:string);
	
	/**（内部调用了$gameMap.requestRefresh） */
	onChange();
	
}