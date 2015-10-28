
/**负责画面处理的静态类 */
declare module Graphics{
	
	/**
	 * 检测浏览器能否播放指定格式的视频。
	 * 
	 * @param {string} type 待检测的视频格式
	 * @return {boolean} 若浏览器可以播放该格式视频，返回 true
	 */
	function canPlayVideoType ( type:string ):boolean;
	
	/**
	 * 检测 canvas 是否支持差值混合模式。
	 * 
	 * @return boolean 若支持该混合模式，返回 true
	 */
	function canUseDifferenceBlend ():boolean;
	
	/**
	 * 检测 canvas 是否支持饱和度混合模式。
	 * 
	 * @return {boolean} 若支持该混合模式，返回 true
	 */
	function canUseSaturationBlend ():boolean;
	
	/**
	 * 清除“正在读取中”状态的图片。
	 * 
	 */
	function endLoading ();
	
	/**
	 * 检测浏览器是否支持 WebGL。
	 * 
	 * @return {boolean} 若浏览器支持 WebGL，返回 true
	 */
	function hasWebGL ():boolean;
	
	/**
	 * 隐藏 FPS 显示。
	 */
	function hideFps();
	
	/**
	 * 初始化画面系统。
	 * 
	 * @param {number} width 游戏画面的宽度
	 * @param {number} height 游戏画面的高度
	 * @param {string} type 渲染器的类型（'canvas'、'webgl' 或 'auto'）
	 */
	function initialize ( width:number , height:number , type:string );
	
	/**
	 * 检测字体文件是否载入。
	 * 
	 * @param {string} name 字体的文件名
	 * @return {boolean} 若成功载入，返回 true
	 */
 	function isFontLoaded ( name:string ):boolean;
	 
	/**
	 * 检测指定点是否在游戏的 canvas 区域内。
	 * 
	 * @param {number} x 指定点的 X 坐标
	 * @param {number} y 指定点的 Y 坐标
	 * @return {boolean} 若指定点在 canvas 内，返回 true
	 */
	function isInsideCanvas ( x:number , y:number ):boolean;
	
	/**
	 * 检测是否正在播放视频。
	 * 
	 * @return {boolean} 若正在播放视频，返回 true
	 */
	function isVideoPlaying ():boolean;
	
	/**
	 * 检测渲染器的类型是否为 WebGL 。
	 * 
	 * @return {boolean} 若渲染器类型为WebGL，返回 true
	 */
	function isWebGL():boolean;
	
	/**
	 * 读取字体文件。
	 * 
	 * @param {string} name 字体文件的文件名
	 * @param {string} url 字体文件的地址
	 */
	function loadFont ( name:string , url:string );
	
	/**
	 * 将页面的 X 坐标转换为 canvas 中与之对应的 X 坐标。
	 * 
	 * @param {number} x 页面的 X 坐标
	 * @return {number} canvas 中与之对应的 X 坐标
	 */
	function pageToCanvasX ( x:number ) :number;
	
	/**
	 * 将页面的 Y 坐标转换为 canvas 中与之对应的 Y 坐标。
	 * 
	 * @param {number} y 页面的 Y 坐标
	 * @return {number} canvas 中与之对应的 Y 坐标
	 */
	function pageToCanvasY ( y:number ):number;
	
	/**
	 * 开始播放视频。
	 * 
	 * @param {string} src 视频文件的地址
	 */
	function playVideo ( src : string);
	
	/**
	 * 在屏幕上显示错误信息。
	 * 
	 * @param {string} name 错误信息的标题
	 * @param {string} message 错误信息的内容
	 */
	function printError ( name :string, message:string );
	
	/**
	 * 在屏幕上渲染指定的 stage（场景） 。
	 * 
	 * @param {Stage} stage 需要渲染的 stage（场景） 对象
	 */
	function render ( stage :Stage) ;
	
	/**
	 * 设置“正在读取中”状态的图片。
	 */
	function setLoadingImage () ;
	
	/**显示 FPS 。 */
	function showFps ();
	
	/** 初始化“正在读取中”状态的计时器。*/
	function startLoading ();
	
	/**帧结束的标志（用于计算 FPS ）。*/
	function tickEnd ();
	
	/** 帧开始的标志（用于计算 FPS ）。*/
	function tickStart ();
	
	/**累加“正在读取中”状态的计时器时间，必要时，显示“正在读取中”状态设置的图片。 */
	function updateLoading ();
}

declare class Graphics
{
	/** PIXI.blendModes.ADD 函数的别名。*/
	static BLEND_ADD:number;
	
	/**PIXI.blendModes.MULTIPLY 函数的别名。 */
	static BLEND_MULTIPLY:number;
	
	/**PIXI.blendModes.NORMAL 函数的别名。 */
	static BLEND_NORMAL:number;
	
	/**PIXI.blendModes.SCREEN 函数的别名。 */
	static BLEND_SCREEN:number;
	
	/**窗口显示区域的高度。 */
	static boxHeight:number;
	
	/** 窗口显示区域的宽度。*/
	static boxWidth:number;
	
	/** 游戏运行经过的总帧数。*/
	static frameCount:number;
	
	/** 游戏画面的高度。*/
	static height:number;
	
	/**游戏画面的缩放倍率。 */
	static scale:number;
	
	/**游戏画面的宽度。 */
	static width:number;
}