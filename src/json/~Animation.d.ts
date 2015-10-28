/**动画数据的JSON。 */
declare class $Animation{
	
	/**第一张动画图片的色相改变值。 */
	animation1Hue : number;
	
	/**第一张动画图片的文件名。 */
	animation1Name :string;
	
	/**第二张动画图片的色相改变值。 */
	animation2Hue :number;
	
	/**第二张动画图片的文件名。 */
	animation2Name:string;
	
	/**包含每一帧动画内容的三维数组。 (TODO: type?) */
	frames :Array<any>;
	
	/**动画ID。 */
	id:number;
	
	/**动画名称。 */
	name: string;
	
	/**动画显示位置。 */
	position: number;
	
	/**由 声效与闪烁效果 数据组成的数组。 (TODO: correct?) */
	timings :Array<AnimationTiming>;

}