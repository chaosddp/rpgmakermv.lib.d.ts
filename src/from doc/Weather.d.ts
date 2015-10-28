/**显示雨、暴风雨或雪的天气效果。 */
declare class Weather{
	
	/**更新天气效果。 */
	update ();
	
	/**天气卷动的起始点。 */
	origin:Point;
	
	/**天气强度（0~9）。 */
	power: number;
	
	/**天气类型['none', 'rain', 'storm', 'snow']，对应：无、雨、暴风雨、雪。 */
	type:string;
}