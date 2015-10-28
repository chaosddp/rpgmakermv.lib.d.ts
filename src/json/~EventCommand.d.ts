
/**事件指令数据的JSON。 */
declare class $EventCommand{
	
	/**事件指令代码。 */
	code:number;
	
	/**指令缩排深度。 */
	indent:number;
	
	/**包含事件指令各项参数的数组，不同事件指令有不同内容。(TODO: type?) */
	parameters:Array<any>;
}