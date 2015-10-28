///<reference path="pixi.d.ts" />
/* here from JsExtensions */

interface Array<T>{
	
	/**
	 * 浅复制指定数组。
	 * 
	 * @return {Array} 浅复制后的数组对象。
	 */
	clone():Array<T>;

	/**
	 * 检查数组中是否包含指定元素
	 * 
	 * @param {T} element 需要检查的元素
	 * 
	 * @return {boolean} 若数组中包含指定元素，返回 True
	 */
	contains(element:T):boolean;
	
	/**
	 * 对比两个数组是否相等
	 * 
	 * @param {Array<T>} array 需要对比的数组
	 * 
	 * @return {boolean} 若数组相等，返回 True
	 */
	equals(array:Array<T>):boolean;
}


declare class Bitmap{
	/**
	 * 用于表示位图的基本对象。
	 * 
	 * @param {number} width 位图的宽度
	 * @param {number} height 位图的高度
	 */
	constructor(width: number, height:number);
	
	/**
	 * 添加一个回调函数，在位图被加载时调用该函数。
	 * 
	 * @param {Function} listner 回调函数
	 */
	addLoadListener(listner:Function);
	
	/**
	 * 改变位图色调。
	 * 
	 * @param {number} r 红色通道强度（-255～255）
	 * @param {number} g 绿色通道强度（-255～255）
	 * @param {number} g 蓝色通道强度（-255～255）
	 */
	adjustTone(r:number, g:number, b:number )
	
	/**
	 * 将源位图给定矩形区域的数据传送到当前位图的给定矩形区域内。
	 * 
	 * @param {number} source 源位图
	 * @param {number} sx 源位图矩形区域左上角的 X 坐标
	 * @param {number} sy 源位图矩形区域左上角的 Y 坐标
	 * @param {number} sw 源位图矩形区域的宽度
	 * @param {number} sh 源位图矩形区域的高度
	 * @param {number} dx 目标区域左上角的 X 坐标
	 * @param {number} dy 目标区域左上角的 Y 坐标
	 */
	blt( source:Bitmap , sx:number , sy:number , sw:number , sh:number , dx:number, dy:number);
	
	/**
	 * 将源位图给定矩形区域的数据传送到当前位图的给定矩形区域内。
	 * 
	 * @param {number} source 源位图
	 * @param {number} sx 源位图矩形区域左上角的 X 坐标
	 * @param {number} sy 源位图矩形区域左上角的 Y 坐标
	 * @param {number} sw 源位图矩形区域的宽度
	 * @param {number} sh 源位图矩形区域的高度
	 * @param {number} dx 目标区域左上角的 X 坐标
	 * @param {number} dy 目标区域左上角的 Y 坐标
	 * @param {number} dw 目标区域的宽度
	 */
	blt( source:Bitmap , sx:number , sy:number , sw:number , sh:number , dx:number, dy:number, dw:number);
	
	/**
	 * 将源位图给定矩形区域的数据传送到当前位图的给定矩形区域内。
	 * 
	 * @param {number} source 源位图
	 * @param {number} sx 源位图矩形区域左上角的 X 坐标
	 * @param {number} sy 源位图矩形区域左上角的 Y 坐标
	 * @param {number} sw 源位图矩形区域的宽度
	 * @param {number} sh 源位图矩形区域的高度
	 * @param {number} dx 目标区域左上角的 X 坐标
	 * @param {number} dy 目标区域左上角的 Y 坐标
	 * @param {number} dw 目标区域的宽度
	 * @param {number} dh 目标区域的高度
	 */
	blt( source:Bitmap , sx:number , sy:number , sw:number , sh:number , dx:number, dy:number, dw:number, dh:number);

	/**
	 * 填充指定的圆形区域。
	 * 
	 * @param {number} x 圆形区域圆心的 X 坐标
	 * @param {number} y 圆形区域圆心的 Y 坐标
	 * @param {number} radius 圆形区域的半径
	 * @param {string} 圆形区域的颜色（CSS格式）
	 */
	drawCircle ( x:number , y:number , radius:number , color:string );

	/**
	 * 在位图上绘制描边文字。
	 * 
	 * @param {string} text 要绘制的文字
	 * @param {number} x 文字左侧的 X 坐标
	 * @param {number} y 文字顶部的 Y 坐标
	 * @param {number} maxWidth  文字允许的最大宽度
	 * @param {string} align 文字的对齐方式
	 */
	drawText ( text:string , x:number , y:number , maxWidth:number , lineHeight:number , align:string );
	
	/**
	 * 填充整个位图
	 * 
	 * @param {string} color 填充的颜色（CSS格式）
	 */
	fillAll ( color :string);
	
	/**
	 * 填充指定的矩形区域。
	 * 
	 * @param {number} x 矩形区域的 X 坐标
	 * @param {number} y 矩形区域的 Y 坐标
	 * @param {number} width 矩形区域的宽度
	 * @param {number} height 矩形区域的高度
	 * @param {number} color 填充的颜色（CSS格式）
	 * 
	 */
	fillRect ( x :number, y:number , width:number , height:number , color:string );
	
	/**
	 * 返回指定像素点的不透明度（alpha 值）。
	 * 
	 * @param {number} x 位图中指定点的 X 坐标
	 * @param {number} y 位图中指定点的 Y 坐标
	 * @return {string} 不透明度（alpha 值）
	 */
	getAlphaPixel ( x:number , y:number ):string;

	/**
	 * 返回指定像素点的颜色。
	 * 
	 * @param {number} x 位图中指定点的 X 坐标
	 * @param {number} y 位图中指定点的 Y 坐标
	 * @return {string} 颜色（十六进制格式）
	 */
	getPixel ( x:number , y:number ):string;
	
	/**
	 * 以渐变模式填充指定的矩形区域。
	 * 
	 * @param {number} x 矩形区域的 X 坐标
	 * @param {number} y 矩形区域的 Y 坐标
	 * @param {number} width 矩形区域的宽度
	 * @param {number} height 矩形区域的高度
	 * @param {string} color1 渐变的起始颜色
	 * @param {string} color2 渐变的结束颜色
	 * @param {boolean} vertical 是否为纵向渐变
	 * 
	 */
	gradientFillRect ( x:number , y:number , width:number , height:number , color1:string , color2:string , vertical:boolean );
	
	/**
	 * 检测位图加载时是否发生错误。
	 * 
	 * @return {boolean} 若发生错误，返回 true
	 */
	isError():boolean;
	
	/**
	 * 检测位图能否开始渲染。
	 * 
	 * @return {boolean} 若位图能够开始渲染，返回 true
	 */
	isReady():boolean;
	
	/**
	 * 加载图片文件，返回一个新的位图对象。
	 * 
	 * @param {string} url 加载图片的地址
	 * @return {Bitmap} Bitmap（位图） 对象
	 */
	static load(url:string):Bitmap;
	
	/**
	 * 测量指定文字的宽度。
	 * 
	 * @param {string} text 待测量的文字
	 * @return {number} 文字的宽度（像素）
	 */
	measureTextWidth ( text:string ):number;
	
	/**
	 * 调整位图大小。
	 * 
	 * @param {number} width 位图调整后的宽度
	 * @param {number} height 位图调整后的高度
	 */
	resize(width:number, height:number);
	
	/**
	 * 变换位图的色相。
	 * 
	 * @param {number} offset 色相环的偏移量（360度以内）
	 */
	rotateHue(offset:number);
	
	/**
	 * 截取当前游戏画面，返回一个新的 Bitmap（位图） 对象。
	 * 
	 * @param {PIXI.Stage} stage stage（场景） 对象(TODO: pixi没见到这个定义，私有？)
	 * @return {Bitmap} Bitmap（位图） 对象
	 */
	snap ( stage ):Bitmap;
	
	/**
	 * [只读] 位图对象的 BaseTexture
	 */
 	baseTexture:PIXI.BaseTexture;
	 
	 /**
	  * [只读] 位图对象的 Canvas
	  */
	canvas:HTMLCanvasElement;
	
	/**
	 * [只读] 位图对象的 CanvasRenderingContext2D 对象
	 */
	context:CanvasRenderingContext2D;
	
	/**
	 * 字体名称
	 */
	fontFace :string;
	
	/**
	 * 字体倾斜
	 */
	fontItalic :boolean;
	
	/**
	 * 字体大小
	 */
	fontSize :number;
	
	/**
	 * [只读] 位图的高度
	 */
	height :number;
	
	/**文字描边的颜色（CSS格式） */
	outlineColor :string;
	
	/** 文字描边的厚度*/
	outlineWidth :number;
	
	/**位图对象的不透明度（alpha 值）（0~255） */
	paintOpacity :number;
	
	/**[只读] 位图对象的矩形区域 */
	rect :PIXI.Rectangle;
	
	/** 是否应用平滑缩放*/
	smooth :boolean;
	
	/** 文字的颜色（CSS格式）*/
	textColor :string;
	
	/**[只读] 图片文件的地址 */
	url:string;
	
	/**[只读] 位图的宽度。 */
	width:number;
}

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
/* from jsonEx */

declare module JsonEx{
	/**
	 * 深度复制特定对象。
	 * 
	 * @param {any} object 需要复制的对象。
	 * @return {any} 对象的副本
	 */
	function makeDeepCopy(object:any):any;
	
	/**
	 * 解析JSON字符串并生成相应对象。
	 * 
	 * @param {string} json JSON字符串
	 * @return {any} 生成的对象
	 */
	function parse(json:string):any;
	
	/**
	 * 将对象转换为JSON字符串。
	 * 
	 * @param {any} object 待转换的对象
	 * @return {string} JSON字符串
	 */
	function stringify(object:any):string;
}

declare class JsonEx{
	/**
	 * 对象的最大深度。
	 * 
	 * 默认值: 100
	 */
	static maxDepth:number;
}

 /* here from JsExtensions */
 
 interface Math{
	/**
	 * 随机生成一个在 0～max-1 区间的整数。
	 * 
	 * @param {number} max 随机数的最大值（生成的随机数不包含该值）
	 * 
	 * @return {number} 随机的整数
	 */
	 randomInt(max:number):number;
}
  /* here from JsExtensions */
 
 interface Number{
	/**
	 * 返回指定范围中的值。
	 * 
	 * @param {number} min 最小值
	 * @param {number} max 最大值
	 * 
	 * @return {number} 在最大值和最小值之间的值
	 */
	clamp(min:number, max:number):number;
	
	/**
	 * 返回总为正数的模的值。
	 * 
	 * @param {number} n 除数
	 * @return {number} 模
	 */
	mod(n:number):number;
	
	/**
	 * 生成以零开头的字符串。
	 * 
	 * @param {number} length 字符串的长度
	 * @return {string} 以零开头的字符串
	 */
	padZero(length:number):string;
}
declare class Stage{
	/**显示树的根对象。 */
	constructor();
	
	/**
	 * 向容器中添加子对象。
	 * 
	 * @param {Object} child 要添加的子对象
	 * @return {Object} 已被添加的子对象
	 */
	addChild ( child : Object):Object ;
	
	/**
	 * 在容器的指定索引处添加子对象。
	 * 
	 * @param {Object} child 要添加的子对象
	 * @param {number} index 指定添加的索引位置 
	 * @return {Object} 已被添加的子对象
	 */
	addChildAt ( child:Object, index:number ):Object;
	
	/**
	 * 从容器中删除子对象。
	 * 
	 * @param {Object} child 要删除的子对象
	 * @return {Object} 已被删除的子对象
	 */
	removeChild ( child:Object ):Object;
	
	/**
	 * 删除容器中指定索引处的子对象。
	 * 
	 * @param: {number} index 要删除子对象的索引位置
	 * @return {Object} 已被删除的子对象
	 */
	removeChildAt ( index:number ):Object;
	
	/**[只读]子对象的精灵数组。 */
	children:Array<Object>;
}
/* here from JsExtensions */

interface String{
	
	/**
	 * 检查字符串中是否包含指定字符。
	 * 
	 * @param {string} string 需要检查的指定字符
	 * @return {boolean} 若包含指定字符，返回 True
	 */
	contains(string:string):boolean;
	
	/**
	 * 将字符串中的 %1, %2 等内容替换成给定的内容。
	 * 
	 * @param {any[]} args 需要替换的内容
	 * @return 替换后的字符串
	 */
	format(...args):string;
	
	/**
	 * 生成以零开头的数字字符串。
	 * 
	 * @param {number} length 字符串的长度
	 * @return {string} 以零开头的字符串
	 */
	padZero(length:number):string;
}

/* here from Utils */

declare module Utils{
	
	/**
	 * 检查浏览器是否可以读取游戏文件夹中的文件。
	 * 
	 * @return {boolean} 如果浏览器可以读取游戏文件夹中的文件，返回 true
	 */
    function canReadGameFiles(): boolean;

	/**
	* 检查浏览器是否为安卓版的 Chrome 浏览器。
	* 
	* @return {boolean} 如果浏览器为安卓版的Chrome浏览器，返回true
	*/
	function isAndroidChrome():boolean;
	
	/**
	 * 检查游戏平台是否为移动设备。
	 * 
	 * @return {boolean} 如果游戏平台为移动设备，返回 true
	 */
	function isMobileDevice():boolean;
	
	/**
	 * 检查浏览器是否为移动版的 Safari 浏览器。
	 * 
	 * @return {boolean} 如果浏览器为移动版的Safari浏览器，返回true
	 */
	function isMobileSafari():boolean;
	
	/**
	 * 检查游戏平台是否为 NW.js。
	 * 
	 * @return {boolean} 如果游戏平台为NW.js，返回true
	 */
	function isNwjs():boolean;
	
	/**
	 * 检查选项是否在查询的字符串当中。
	 * 
	 * @param {string} name 选项名称
	 * 
	 * @return {boolean} 如果选项在查询的字符串当中，返回 true
	 */
	function isOptionValid(name:string):boolean;
	
	/**
	 * 将 RGB 值转换成 CSS 颜色字符串。
	 * 
	 * @param {number} r 红色值，范围为(0, 255)
	 * @param {number} g 绿色值，范围为(0, 255)
	 * @param {number} b 蓝色值，范围为(0, 255)
	 * 
	 * @return {string} CSS 颜色字符串
	 */
	function rgbToCssColor(r:number, g:number, b:number ):string;
}

declare class Utils{
	/**RPG 制作大师的名称，'MV'为当前的版本。 */
	static RPGMAKER_NAME:string;
}