/**处理 HTML5 音频的静态类。 */
declare module Html5Audio{
	
	/**
	 * 添加一个回调函数，当音频文件被加载时调用该函数。
	 * 
	 * @param {Function} listner 回调函数
	 */
	function addLoadListener ( listner:Function );
	
	/**
	 * 清除音频数据。
	 */
	function clear ();
	
	/**
	 * 淡入音频。
	 * 
	 * @param {number} duration 淡入的时间（秒）
	 */
	function fadeIn ( duration:number );
	
	/**
	 * 淡出音频。
	 * 
	 * @param {number} duration 淡出的时间（秒）
	 */
	function fadeOut ( duration :number);
	
	/**
	 * 初始化音频系统。
	 * 
	 * @return {boolean} 若音频系统可以使用，返回 true
	 */
	function initialize ():boolean;
	
	/**
	 * 检测载入是否出错。
	 * 
	 * @return {boolean} 若载入时出现错误，返回 true
	 */
	function isError ():boolean;
	
	/**
	 * 检测音频是否正在播放。
	 * 
	 * @return {boolean} 若音频正在播放，返回 true
	 */
	function isPlaying ():boolean;
	
	/**
	 * 播放音频。
	 * 
	 * @param {boolean} loop 音频是否要循环播放
	 * @param {number} offset 音频开始播放的位置（秒）
	 */
	function play ( loop:boolean , offset:number );
	
	/**
	 * 获取当前音频播放的位置。
	 */
	function seek ();
	
	/**
	 * 设置 Html5 音频。
	 * 
	 * @param {string} setup 音频文件的地址
	 */
	function setup ( url:string );
	
	/**
	 * 停止播放音频。
	 */
	function stop ();
}

declare class Html5Audio{
	
	/**[只读] 音频文件的地址。 */
	url:string;
	
	/**音频的音量。 */
	volume:number;
}