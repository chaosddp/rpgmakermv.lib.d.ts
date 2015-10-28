
/**游戏内的窗口。 */
 interface Window{
	 
	 /**
	  * 向容器添加一个子对象。
	  *
	  * @param {Object} child 要添加的子对象。
	  * @return {Object} 被添加的子对象。
	  */
	 addChild ( child:Object ):Object;
	 
	 /**
	  * 将子对象添加到指定索引位置。
	  *
	  * @param {Object} child 要添加的子对象。
	  * @param {number} index 欲添加到的位置索引。
	  * @return {Object} 被添加的子对象。
	  */
	 addChildAt ( child:Object,  index:number ) :Object;
	 
	 /**
	  * 添加一个子对象于内容和背景之间。
	  *
	  * @param {Object} child 要添加的子对象。
	  * @return {Object} 被添加的子对象。
	  */
	 addChildToBack ( child:Object ):Object;
	 
	 /** 
	  *如果窗口被成功关闭（窗口的开启程度为0），则返回 true 。
	 */
	 isClosed ():boolean;
	 
	 /** 如果窗口被成功打开（窗口的开启程度为255），则返回 true 。*/
	 isOpen ():boolean;
	 
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
	 
	 /**
	  * 设置光标存放区域。
	  *
	  * @param {number} x 光标的x坐标。
	  * @param {number} y 光标的y坐标。
	  * @param {number} width 光标的宽度。
	  * @param {number} height 光标的高度。
	  */
	 setCursorRect ( x:number , y:number , width:number , height:number );
	 
	 /**
	  * 改变背景的色调。
	  *
	  * @param {number} r 介于(-255, 255)之间的红色值。
	  * @param {number} g 介于(-255, 255)之间的绿色值。
	  * @param {number} b 介于(-255, 255)之间的蓝色值
	  */
	 setTone ( r:number , g:number , b:number );
	 
	 /**更新窗口。 */
	 update ();
	 
	 /**光标闪烁的状态。 */
	 active :boolean;
	 
	 /**窗口背景的不透明度（0~255）。 */
	 backOpacity :number;
	 
	 /**[只读]窗口的子对象数组。 */
	 children :Array<Object>;
	 
	 /**窗口内容的引用位图。 */
	 contents :Bitmap;
	 
	 /**窗口内容的不透明度（0~255）。 */
	 contentsOpacity : number;
	 
	 /**下滚箭头的可见性。 */
	 downArrowVisible  :number;
	 
	 /**窗口的高度。 */
	 height: number;
	 
	 /**窗口的外边距。 */
	 margin:number;
	 
	 /**窗口的不透明度（0~255）。 */
	 opacity :number;
	 
	 /**窗口的开启程度（0~255）。 */
	 openness :number;
	 
	 /**窗口滚动的初始点。 */
	 origin :Point;
	 
	 /**窗口框架与内容之间的填充宽度（内边距）。 */
	 padding :number;
	 
	 /**[只读]窗口的父对象。 */
	 // remove this temp
	 // parent :Object; 
	 
	 /**暂停标记的可见性。 */
	 pause :boolean;
	 
	 /** 上滚箭头的可见性。*/
	 upArrowVisible :boolean;
	 
	 /**窗口的可见性。 */
	 visible :boolean;
	 
	 /**窗口的宽度。 */
	 width :number;
	 
	 /**窗口外观的引用位图。 */
	 windowskin :Bitmap;
	 
	 /**窗口的x坐标。 */
	 x:number;
	 
	 /**窗口的y坐标。 */
	 y:number;
}