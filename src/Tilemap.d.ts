/**显示2D游戏的元件地图。 */
declare class Tilemap{
	
	/**
	 * 向容器中添加一个子对象。
	 * 
	 * @param {Object} child 要添加的子对象。
	 * @return {Object} 被添加的子对象。
	 */
	addChild ( child:Object ):Object;
	
	/**
	 * 在容器指定索引处添加一个子对象。
	 * 
	 * @param {Object} child 要添加的子对象。
	 * @param {number} index 欲添加到的位置索引。
	 * @return {Object} 被添加的子对象。
	 */
	addChildAt ( child:Object,  index:number ) :Object;
	
	/**
	 * 检查是否准备场景渲染。
	 * 
	 * @return {boolean} 准备渲染返回真。
	 */
	isReady ():boolean;
	
	/**重绘整个元件地图。 */
	refresh ();
	
	/**
	 * 从容器中移除一个子对象。
	 * 
	 * @param {Object} child 要别移除的子对象。
	 * @return {Object} 被移除的子对象。
	 */
	removeChild ( child:Object ) :Object;
	
	/**
	 * 移除指定索引的子对象。
	 * 
	 * @param {number} index 要移除的子对象的索引。
	 * @return {Object} 被移除的子对象。
	 */
	removeChildAt ( index:number ):Object;
	
	/**
	 * 设置元件地图数据。
	 * 
	 * @param {number} width 地图横向元件数。
	 * @param {number} height 地图纵向元件数。
	 * @param {number} data 地图信息的三维数组
	 */
	setData ( width:number,  height:number,  data:number );
	
	/**更新元件地图。 */
	update ();
	
	/**自动元件动画计数。 */
	animationCount:number;
	
	/**地图元件的位图(Bitmap)对象数组。 */
	bitmaps:Array<Bitmap>;
	
	/**[只读]子精灵(Sprite)对象数组。 */
	children:Array<Sprite>;
	
	/**引用标记列表。 */
	flags:Array<any>;
	
	/**元件地图的高度。 */
	height:number;
	
	/**是否开启元件地图的横向循环。(TODO: correct?) */
	horizontalWrap:boolean;
	
	/**元件地图卷动的起始坐标。 */
	origin:Point;
	
	/**[只读]元件地图的父对象。 */
	parent: Object;
	
	/**元件高度。 */
	tileHeight:number;
	
	/**元件宽度。 */
	tileWidth:number;
	
	/**是否开启元件地图的垂直循环。 */
	verticalWrap:boolean;
	
	/**元件地图宽度。 */
	width:number;
}