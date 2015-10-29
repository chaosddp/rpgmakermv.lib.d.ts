/**The game object class for the state of the message window that displays text
or selections, etc. */
declare class Game_Message{
	initialize();
	
	/**清除，包括文本，选项，背景等 */
	clear();
	
	/** 选项数组 TODO:type? */
	choices():Array<any>;
	
	/**脸图的文件名。  */
	faceName():string;
	
	/**脸图的索引。 */
	faceIndex():number;
	
	background():any;
	
	positionType():any;
	
	choiceDefaultType():any;
	
	choiceCancelType():any;
	
	choiceBackground():any;
	
	choicePositionType():any;
	
	numInputVariableId():number;
	
	numInputMaxDigits():number;
	
	itemChoiceVariableId():number;
	
	itemChoiceItypeId():number;
	
	scrollMode():number;
	
	scrollSpeed():number;
	
	scrollNoFast():any;
	
	/**添加文字 */
	add(text:string);
	
	setFaceImage(faceName:string, faceIndex:number);
	
	setBackground(background:string);
	
	setPositionType(positionType:any);
	
	setChoices(choise:Array<any>, defaultType:any, cancelType:any);
	
	setChoiceBackground(background:string);
	
	setChoicePositionType(positionType:any);
	
	setNumberInput(variableId:number, maxDigits:number);
	
	setItemChoice(variableId:number, itemType:number);
	
	setScroll(speed:number, noFast:any);
	
	setChoiceCallback(callback:Function);
	
	onChoice(n:number);
	
	hasText();boolean;
}