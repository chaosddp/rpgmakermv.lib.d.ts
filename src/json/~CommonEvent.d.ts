/**公共事件数据的JSON。 */
declare class $CommonEvent {
	
	/**公共事件ID */
	id:number;
	
	/**由 事件指令 数据组成的数组。 */
	list:Array<$EventCommand>;
	
	/**公共事件名称。 */
	name:string;
	
	/**开关ID。 */
	switchId :number;
	
	/**触发条件。 */
	trigger :number;
	
}