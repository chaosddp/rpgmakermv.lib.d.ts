/**使用效果数据的JSON */
declare class $Effect {
	/**效果编号。 */
	code:number;
	
	/**使用效果类型（例如属性、状态）的编号，根据不同的使用效果而发生变化。 */
	dataId :number;
	
	/**使用效果参数1。 */
	value1: number;
	
	/**使用效果参数2。 */
	value2: number;
}