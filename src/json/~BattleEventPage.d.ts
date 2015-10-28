/**战斗事件事件页数据的JSON。 */
declare class $BattleEventPage{
	
	/** 触发条件*/
	conditions:$BattleEventPageConditions;
	
	/**由 事件指令 数据组成的数组。 */
	list :Array<$EventCommand>;
	
	/**事件间隔。 */
	span:number;
}