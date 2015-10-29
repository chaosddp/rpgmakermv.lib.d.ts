/**The game object class for variables.
 */
declare class Game_Variables{
	initialize();
	
	clear();
	
	value(variableId:number):number;
	
	setValue(variableId:number, value:number);
	
	onChange();
}