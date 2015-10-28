
/**显示在游戏屏幕中的基本对象。 */
declare class Sprite{
	
	/**
	 * @param {Bitmap} bitmap 作为精灵显示的位图
	 */
	constructor(bitmap:Bitmap);
	
	/**
	 * 向容器中添加子元素。
	 * 
	 * @param {Object} child 需要被添加的子元素
	 * @return {Object} 被添加的子元素
	 */
	addChild ( child:Object ):Object;
	
	/**
	 * 向容器的指定索引处添加子元素。
	 * 
	 * @param {Object} child 需要被添加的子元素
	 * @param {number} index 添加位置的索引
	 * @return {Object} 被添加的子元素
	 */
	addChildAt ( child:Object,  index:number ):Object;
	
	/**
	 * 获取精灵的混合颜色。
	 * 
	 * @return {Array<number>} 混合颜色[r, g, b, a]
	 */
	getBlendColor ():Array<number>;
	
	/**
	 * 获取精灵的色调。
	 * 
	 * @return {Array<number>} 色调[r, g, b, gray]
	 */
	getColorTone ():Array<number>;
	
	/**
	 * 立即设定 x 坐标和 y 坐标。
	 * 
	 * @param {number} x 精灵的 x 坐标
	 * @param {number} y 精灵的 y 坐标
	 */
	move ( x:number , y:number );
	
	/**
	 * 从容器中移除子元素。
	 * 
	 * @param {Object} child 需要被移除的子元素
	 * @return {Object} 被移除的子元素
	 */
	removeChild ( child:Object ):Object;
	
	/**
	 * 移除指定索引位置处的子元素。
	 * 
	 * @param {number} index 子元素的索引
	 * @return {Object} 被移除的子元素
	 */
	removeChildAt ( index:number ):Object;
	
	/**
	 * 设置精灵的混合颜色。
	 * 
	 * @param {Arrya<number>} color 混合颜色[r, g, b, a]
	 */
	setBlendColor ( color:Array<number> );
	
	/**
	 * 设置精灵的色调。
	 * 
	 * @param {Array<number>} tone 色调[r, g, b, gray]
	 */
	setColorTone ( tone:Array<number> );
	
	/**
	 * 设置精灵所显示位图的矩形区域。
	 * 
	 * @param {number} x 矩形框架的 x 坐标
	 * @param {number} y 矩形框架的 y 坐标
	 * @param {number} width 矩形框架的宽度
	 * @param {number} height 矩形框架的高度
	 * 
	 */
	setFrame ( x:number , y:number , width:number , height:number );
	
	/**在每一帧刷新精灵。 */
	update ();
	
	/**精灵的原点。范围为(0,0)到(1,1)。 */
	anchor :Point;
	
	/**精灵所显示的位图。 */
	bitmap :Bitmap;
	
	/** 精灵所应用的混合模式。*/
	blendMode :number;
	
	/**[只读]精灵的子元素数组。 */
	children:Array<Object>;
	
	/**设置精灵的滤镜。(TODO:类型？) */
	filters : Array<any>;
	
	/**精灵的高度(不考虑尺度缩放)。 */
	height: number;
	
	/**精灵的不透明度(0 ~ 255)。 */
	opacity :number;
	
	/**[只读]包含此精灵的父容器。 */
	parent:Object;
	
	/**精灵的旋转角度。单位为弧度。 */
	rotation: number;
	
	/**精灵的缩放比例。 */
	scale:Point;
	
	/**精灵的可见性。 */
	visible:boolean;
	
	/**精灵的宽度(不考虑尺度缩放)。 */
	width: number;
	
	/**精灵的 x 坐标。 */
	x:number;
	
	/**精灵的 y 坐标。 */
	y:number;
}