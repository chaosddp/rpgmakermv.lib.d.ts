/**移动路线数据的JSON。 */
declare class $MoveRoute{
	/**由 移动路线指令 数据组成的数组。 */
	list:Array<$MoveCommand>;
	
	/**是否循环执行。 */
	repeat:boolean;
	
	/**是否忽略障碍。 */
	skippable :boolean;
	
	/**是否等待至移动结束。 */
	wait :boolean;
	
}