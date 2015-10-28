/**处理来自鼠标和触屏输入的静态类。 */
declare module TouchInput{
	/**清除所有触屏输入数据。 */
	function clear ();
	
	/**初始化触屏输入系统。 */
	function initialize ();
	
	/** 
	 * 检查鼠标右键是否刚刚被按下。
	 * 
	 * @return {boolean} 如果鼠标右键刚刚被按下，返回 true
	*/
	function isCancelled ():boolean;
	
	/**
	 * 检查鼠标左键或者触屏是否长时间被按住。
	 * 
	 * @return {boolean} 如果鼠标左键或者触屏长时间被按住，返回 true
	 */
	function isLongPressed ():boolean;
	
	/**
	 * 检查鼠标或手指在触屏上是否移动。
	 * 
	 * @return {boolean} 如果鼠标或手指在触屏上移动，返回 true
	 */
	function isMoved ():boolean;
	
	/**
	 * 检查鼠标或者触屏是否在当前被按下。
	 * 
	 * @return {boolean} 如果鼠标或触屏在当前被按下，返回 true
	 */
	function isPressed ():boolean;
	
	/**
	 * 检查鼠标左键是否弹起或者手指是否离开触屏。
	 * 
	 * @return {boolean} 如果鼠标左键弹起或者手指离开触屏，返回 true
	 */
	function isReleased ():boolean;
	
	/**
	 * 检查鼠标左键或者触屏是否刚刚被按下，或者是伪重复按键是否发生。
	 * 
	 * @return {boolean} 如果鼠标左键或者触屏被重复按下，返回 true
	 */
	function isRepeated () :boolean;
	
	/**
	 * 检查鼠标左键或者触屏是否刚刚被按下。
	 * 
	 * @return {boolean} 如果鼠标左键或者触屏刚刚被按下，返回 true
	 */
	function isTriggered () :boolean;
	
	/**更新触屏输入数据。 */
	function update ();
	
}

declare class TouchInput
{	
	/** [只读]最近一次输入的时间，单位为毫秒。*/
	static date :number;
	
	/**连续两次伪按键重复之间的间隔时间，单位为帧。 */
	static keyRepeatInterval :number;
	
	/**第一次按下按键后，距离伪按键重复发生所等待的时间，单位为帧。 */
	static keyRepeatWait :number;
	
	/**[只读]水平滚动量。 */
	static wheelX :number;
	
	/**[只读]垂直滚动量。 */
	static wheelY :number;
	
	/**[只读]最近一次画布区域中触屏事件的 x 坐标。 */
	static x:number;
	
	/**[只读]最近一次画布区域中触屏事件的 y 坐标。 */
	static y:number;
}