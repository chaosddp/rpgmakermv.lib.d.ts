/**覆盖整个游戏界面的精灵。 */
declare class ScreenSprite
{
	/**将屏幕精灵设置为黑色。 */
	setBlack ();
	
	/**
	 * 将屏幕精灵设置为指定颜色。
	 * 
	 * @param {number} r 介于(0, 255)之间的红色值
	 * @param {number} g 介于(0, 255)之间的绿色值
	 * @param {number} b 介于(0, 255)之间的蓝色值
	 */
	setColor ( r:number , g:number , b:number );
	
	/**将屏幕精灵设置为黑色。 */
	setWhite ();
	
	/**精灵的透明度（0～255）。 */
	opacity:number;
}