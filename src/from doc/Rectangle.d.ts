
/**矩形的类 */
declare class Rectangle{
	/**
	 * @param {number} x 左上角的X坐标
	 * @param {number} y 左上角的Y坐标
	 * @param {number} width 矩形的宽度
	 * @param {number} height 矩形的高度
	 */
	constructor(x:number, y:number, width:number, height:number);
	
	/**矩形的高度。 */
	height:number;
	
	/**矩形的宽度。 */
	width:number;
	
	/**左上角的X坐标 */
	x:number;
	
	/**左上角的Y坐标 */
	y:number;
}