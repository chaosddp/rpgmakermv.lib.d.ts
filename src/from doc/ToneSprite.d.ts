/**能够以2D画布模式改变屏幕颜色的精灵。 */
declare class ToneSprite{
	
	/**清除色调。 */
	reset ();
	
	/**
	 * 设置色调。
	 * 
	 * @param {number} r 红色强度，范围为(-255, 255)
	 * @param {number} g 绿色强度，范围为(-255, 255)
	 * @param {number} b 蓝色强度，范围为(-255, 255)
	 * @param {number} gray 灰度，范围为(0, 255)
	 */
	setTone ( r:number , g:number , b:number , gray:number );
}