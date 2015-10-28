/**包含游戏的窗口层。 */
declare class WindowLayer 
{
	/**
	 * 往容器中添加一个子对象。
	 * 
	 * @param {Object} child 要添加的子对象。
	 * @return {Object} 被添加的子对象。
	 */
	addChild ( child:Object ) :Object;
	
	 /**
	  * 将子对象添加到指定索引位置。
	  *
	  * @param {Object} child 要添加的子对象。
	  * @param {number} index 欲添加到的位置索引。
	  * @return {Object} 被添加的子对象。
	  */
	 addChildAt ( child:Object,  index:number ) :Object;
	 
	 /**
	  * 同时设置x坐标、y坐标、宽度和高度。
	  *
	  * @param {number} x 窗口的x坐标。
	  * @param {number} y 窗口的y坐标。
	  * @param {number} width 窗口的宽度。
	  * @param {number} height 窗口的高度。
	  */
	 move ( x:number , y: number , width:number , height:number );
	 
	 /**
	  * 从容器中移除一个子对象。
	  *
	  * @param {Object} child 要移除的子对象。
	  * @return {Object} 被移除的子对象。
	  */
	 removeChild ( child:Object ):Object;
	 
	 /**
	  * 移除指定索引处的子对象。
	  *
	  * @param {number} index 要移除的子对象的索引。
	  * @return {Object} 被移除的子对象。
	  */
	 removeChildAt ( index:number ) :Object;
	 
	 /**更新窗口层。 */
	 update ();
	 
	 /**[只读] 窗口层的子对象数组。 */
	 children:Array<Object>;
	 
	 /**窗口层的高度。 */
	 height:number;
	 
	 /**[只读]窗口层的父对象。 */
	 parent: Object;
	 
	 /**窗口层的高度。 */
	 width:number;
	 
	 /**窗口层的x坐标。 */
	 x:number;
	 
	 /**窗口层的y坐标。 */
	 y:number;
}