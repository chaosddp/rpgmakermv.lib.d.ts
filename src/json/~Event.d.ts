/**地图事件数据的类。 */
declare class $Event {
	/**事件ID。 */
	id:number;
	
	/**事件名称。 */
	name: string;
	
	/**事件备注。 */
	note: string;
	
	/**由 事件页 数据组成的数组。 */
	pages: Array<$EventPage>;
	
	/**事件的X坐标。 */
	x:number;
	
	/**事件的Y坐标。 */
	y:number;
}