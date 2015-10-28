/**声效和闪烁效果数据的JSON。 */
declare class AnimationTiming{
	
	/**闪烁颜色。 (TODO: type?) */
	flashColor :Array<any>;
	
	/**闪烁持续时间。 */
	flashDuration :number;
	
	/** 闪烁范围。*/
	flashScope :number;
	
	/**帧编号。 */
	frame: number;
	
	/**声效。 */
	se:$AudioFile;
}