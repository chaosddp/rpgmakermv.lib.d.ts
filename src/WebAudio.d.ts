/**使用 Web Audio API 的音频对象。 */
declare class WebAudio {
	/**
	 * @param {string} url 音频文件的地址
	 */
	constructor(url:string);
	
	/**
	 * 添加一个当音频文件加载完成后的回调
	 * 
	 * @param {Function} listner 回调函数
	 */
	addLoadListener ( listner:Function ); 
	
	/**
	 * 添加一个当音频文件播放完成后的回调
	 * 
	 * @param {Function} listner 回调函数
	 */
	addStopListener ( listner:Function );
	
	/**清除音频数据。 */
	clear ();
	
	/**
	 * 淡入音频。
	 * 
	 * @param {number} duration 淡入的时间（秒）
	 */
	fadeIn ( duration:number );
	
	/**
	 * 淡出音频
	 * 
	 * @param {number} duration 淡出的时间（秒）
	 */
	fadeOut ( duration:number );
	
	/** 
	 * 检测加载时是否有错误发生。
	 * 
	 * @return {boolean} 若发生错误，返回 True
	*/
	isError ():boolean;
	
	/**
	 * 检测音频是否正在播放。
	 * 
	 * @return {boolean} 若正在播放，返回 True
	 */
	isPlaying ():boolean;
	
	/**
	 * 检测音频是否已经可以开始播放。
	 * 
	 * @return {boolean} 若音频可以开始播放，返回 True
	 */
	isReady ():boolean;
	
	/**
	 * 播放音频。
	 * 
	 * @param {boolean} loop 是否要循环播放
	 * @param {number} offset 播放开始的时间（秒）
	 */
	play ( loop:boolean , offset:number );
	
	/**
	 * 获取当前音频的播放位置。
	 */
	seek ();
	
	/**
	 * 停止播放音频。
	 */
	stop ();
	
	/**音频的声场位置。 */
	pan :number;
	
	/**音频的音调。 */
	pitch:number;
	
	/**[只读] 音频文件的地址。 */
	url:string;
	
	/**音频的音量。 */
	volume:number;
}

declare module WebAudio{
	/**
	 * 检测浏览器能否播放 m4a 文件。
	 * 
	 * @return {boolean} 若浏览器支持播放 m4a 文件，返回 True
	 */
	function canPlayM4a ():boolean;
	
	/**
	 * 检测浏览器能否播放 ogg 文件。
	 * 
	 * @return {boolean} 若浏览器支持播放 ogg 文件，返回 True
	 */
	function canPlayOgg ():boolean;
	
	/**
	 * 初始化音频系统。
	 * 
	 * @param {boolean} noAudio 无声模式的标志
	 * @return {boolean} 若音频系统能够正常使用，返回 True
	 */
	function initialize ( noAudio:boolean ) :boolean;
}