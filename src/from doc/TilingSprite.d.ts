/**以平铺方式显示图片的精灵对象。 */
declare class TilingSprite{
	/**
	 * @param {Bitmap} bitmap 需要平铺显示的图片
	 */
	constructor(bitmap:Bitmap);
	
	/**
	 * 统一设置 x 坐标，y 坐标，宽度，高度。
	 * 
	 * @param {number} x 平铺精灵的 x 坐标
	 * @param {number} y 平铺精灵的 y 坐标
	 * @param {number} width 平铺精灵的宽度
	 * @param {number} height 平铺精灵的高度
	 */
	move ( x:number , y:number , width:number , height:number );
	
	/**
	 * 指定平铺精灵所显示位图的矩形区域。
	 * 
	 * @param {number} x 矩形框架的 x 坐标
	 * @param {number} y 矩形框架的 y 坐标
	 * @param {number} width 矩形框架的宽度
	 * @param {number} height 矩形框架的高度
	 */
	setFrame ( x:number , y:number , width:number , height:number );
	
	/**在每一帧刷新精灵。 */
	update ();
	
	/**用于平铺显示的图像。 */
	bitmap:Bitmap;
	
	/**平铺精灵的不透明度(0 ~ 255)。 */
	opacity:number;
	
	/*平铺精灵的原点，用于制作滚动显示效果。* */
	origin:Point;
	
	/**平铺精灵的可见性。 */
	visible:boolean;
	
	/**平铺精灵的 x 坐标。 */
	x:number;
	
	/**平铺精灵的 y 坐标。 */
	y:number;
}