/**临时数据，不会被包含在存档中 */
declare class Game_Temp{
	
	/**初始化 */
	initialize();
	
	/**测试中 */
	isPlaytest();
	
	/**保留指定事件 （这句会更新内部的_commonEventId成员） */
	reserveCommonEvent(commonEventId:number);
	
	/**清空当前保留的事件， 即 id=0*/
	clearCommonEvent();
	
	/**
	 * 当前是否有保留的事件
	 * 
	 * @return {boolean}
	 */
	isCommonEventReserved():boolean;
	
	/**
	 * 取得保留的事件 
	 * 
	 * @return {$CommonEvent} 取得保留的事件（通过id取得）
	*/
	reservedCommonEvent():$CommonEvent;
	
	/** TODO: ? */
	setDestination(x:number, y:number);
	
	/** TODO: ? */
	clearDestination(x:number, y:number);
	
	/** TODO: ? */
	isDestinationValid():boolean;
	
	/** TODO: ? */
	destinationX():number;
	
	/** TODO: ? */
	destinationY():number;
	
}