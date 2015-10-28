
/**处理键盘和手柄输入信息的静态类。 */
declare module Input{
	
	/**清除全部的输入数据。 */
	function clear ();
	
	/** 初始化输入系统。*/
	function initialize () ;
	
	/**
	 * 检测某个按键是否正被长时间按下。
	 * 
	 * @param {string} keyName 待检测按键的映射名
	 * @return {boolean} 若按键正被长时间按下，返回 true
	 */
	function isLongPressed  ( keyName:string ):boolean;
	
	/**
	 * 检测按键是否正被按下。
	 * 
	 * @param {string} keyName 待检测按键的映射名
	 * @return {boolean} 若按键正被按下，返回 true
	 */
	function isPressed ( keyName:string ):boolean;
	
	/**
	 * 检测按键是否正被重复按下。
	 * 
	 * @param {string} keyName 待检测按键的映射名
	 * @return {boolean} 若按键正被重复按下，返回 true
	 */
	function isRepeated ( keyName:string ):boolean ;
	
	/**
	 * 检测按键是否刚被按下。
	 * 
	 * @param {string} keyName 待检测按键的映射名
	 * @return {boolean} 若按键刚被按下，返回 true
	 */
	function isTriggered ( keyName:string ):boolean;
	
	/**
	 * 更新输入数据。
	 */
	function update () ;
	
}

declare class Input{
	/** [只读] 距离上一次按键所经过的时间（毫秒）。*/
	static date :number;
	
	/**[只读] 小键盘上与四个方向相对应的数字，无方向则为0。 */
	static dir4:number;
	
	/**[只读] 小键盘上与八个方向对应的数字，无方向则为0。 */
	static dir8:number;
	
	/** 将手柄按键转换为按键映射名的散列表。*/
	static gamepadMapper:Object;
	
	/** 将虚拟按键转换为按键映射名的散列表。*/
	static keyMapper :Object;
	
	/** 更新重复按键状态的间隔时间（帧)。*/
	static keyRepeatInterval :number;
	
	/**进入长按状态前的等待时间（帧）。 */
	static keyRepeatWait :number;
}