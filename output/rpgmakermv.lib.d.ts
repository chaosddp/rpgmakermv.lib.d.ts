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
	rect :Rectangle;
	
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
/**坐标的类。 */
declare class Point{
	/**
	 * @param {number} x X坐标
	 * @param {number} y Y坐标
	 */
	constructor(x:number, y:number);
	
	/**X坐标 */
	x:number;
	
	/**Y坐标 */
	y:number;
}

/**矩形的类 */
declare class Rectangle{
	/**
	 * @param {number} x 左上角的X坐标
	 * @param {number} y 左上角的Y坐标
	 * @param {number} width 矩形的宽度
	 * @param {number} height 矩形的高度
	 */
	constructor(x:number, y:number, width:number, height:number);
	
	/**矩形的高度。 */
	height:number;
	
	/**矩形的宽度。 */
	width:number;
	
	/**左上角的X坐标 */
	x:number;
	
	/**左上角的Y坐标 */
	y:number;
}
/**覆盖整个游戏界面的精灵。 */
declare class ScreenSprite
{
	/**将屏幕精灵设置为黑色。 */
	setBlack ();
	
	/**
	 * 将屏幕精灵设置为指定颜色。
	 * 
	 * @param {number} r 介于(0, 255)之间的红色值
	 * @param {number} g 介于(0, 255)之间的绿色值
	 * @param {number} b 介于(0, 255)之间的蓝色值
	 */
	setColor ( r:number , g:number , b:number );
	
	/**将屏幕精灵设置为黑色。 */
	setWhite ();
	
	/**精灵的透明度（0～255）。 */
	opacity:number;
}

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
/**以平铺方式显示图片的精灵对象。 */
declare class TilingSprite{
	/**
	 * @param {Bitmap} bitmap 需要平铺显示的图片
	 */
	constructor(bitmap:Bitmap);
	
	/**
	 * 统一设置 x 坐标，y 坐标，宽度，高度。
	 * 
	 * @param {number} x 平铺精灵的 x 坐标
	 * @param {number} y 平铺精灵的 y 坐标
	 * @param {number} width 平铺精灵的宽度
	 * @param {number} height 平铺精灵的高度
	 */
	move ( x:number , y:number , width:number , height:number );
	
	/**
	 * 指定平铺精灵所显示位图的矩形区域。
	 * 
	 * @param {number} x 矩形框架的 x 坐标
	 * @param {number} y 矩形框架的 y 坐标
	 * @param {number} width 矩形框架的宽度
	 * @param {number} height 矩形框架的高度
	 */
	setFrame ( x:number , y:number , width:number , height:number );
	
	/**在每一帧刷新精灵。 */
	update ();
	
	/**用于平铺显示的图像。 */
	bitmap:Bitmap;
	
	/**平铺精灵的不透明度(0 ~ 255)。 */
	opacity:number;
	
	/*平铺精灵的原点，用于制作滚动显示效果。* */
	origin:Point;
	
	/**平铺精灵的可见性。 */
	visible:boolean;
	
	/**平铺精灵的 x 坐标。 */
	x:number;
	
	/**平铺精灵的 y 坐标。 */
	y:number;
}
/**用于WebGL的颜色矩阵滤镜。 */
declare class ToneFilter{
	/**
	 * 更改色相。
	 * 
	 * @param {number} value 介于 -360～360 之间的色相值
	 */
	adjustHue ( value:number );
	
	/**
	 * 更改饱和度。
	 * 
	 * @param {number} value 介于 -255～255 之间的饱和度值
	 */
	adjustSaturation ( value:number );
	
	/**
	 * 更改色调。
	 * 
	 * @param {number} r 介于 -255～255 之间的红色值
	 * @param {nubmer} g 介于 -255～255 之间的绿色值
	 * @param {number} b 介于 -255～255 之间的蓝色值
	 */
	adjustTone ( r:number , g:number , b:number );
	
	/**重置滤镜。 */
	reset ();
}
/**能够以2D画布模式改变屏幕颜色的精灵。 */
declare class ToneSprite{
	
	/**清除色调。 */
	reset ();
	
	/**
	 * 设置色调。
	 * 
	 * @param {number} r 红色强度，范围为(-255, 255)
	 * @param {number} g 绿色强度，范围为(-255, 255)
	 * @param {number} b 蓝色强度，范围为(-255, 255)
	 * @param {number} gray 灰度，范围为(0, 255)
	 */
	setTone ( r:number , g:number , b:number , gray:number );
}
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
/**显示雨、暴风雨或雪的天气效果。 */
declare class Weather{
	
	/**更新天气效果。 */
	update ();
	
	/**天气卷动的起始点。 */
	origin:Point;
	
	/**天气强度（0~9）。 */
	power: number;
	
	/**天气类型['none', 'rain', 'storm', 'snow']，对应：无、雨、暴风雨、雪。 */
	type:string;
}
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
/**角色数据的JSON。 */
declare class $Actor{
	/** 横版战斗的战斗图文件名。*/
	battlerName :string;
	
	/**角色的行走图索引。 */
	characterIndex :number;
	
	/**角色的行走图（文件名）。 */
	characterName :string;
	
	/**职业ID。 */
	classId :number;
	
	/**初始装备。(TODO: type?) */
	equips:Array<any>;
	
	/**脸图的索引。 */
	faceIndex :number;
	
	/**脸图的文件名。 */
	faceName :string;
	
	/**角色ID。 */
	id:number;
	
	/**初始等级。 */
	initialLevel :number;
	
	/**最大等级。 */
	maxLevel :number;
	
	/**角色名称。 */
	name:string;
	
	/**角色称号。(昵称？) */
	nickname :string;
	
	/**备注。 */
	note:string;
	
	/**人物简介 */
	profile :string;
	
	/**由 "特性" 数据组成的数组。 */
	traits:Array<$Trait>;
}
/**动画数据的JSON。 */
declare class $Animation{
	
	/**第一张动画图片的色相改变值。 */
	animation1Hue : number;
	
	/**第一张动画图片的文件名。 */
	animation1Name :string;
	
	/**第二张动画图片的色相改变值。 */
	animation2Hue :number;
	
	/**第二张动画图片的文件名。 */
	animation2Name:string;
	
	/**包含每一帧动画内容的三维数组。 (TODO: type?) */
	frames :Array<any>;
	
	/**动画ID。 */
	id:number;
	
	/**动画名称。 */
	name: string;
	
	/**动画显示位置。 */
	position: number;
	
	/**由 声效与闪烁效果 数据组成的数组。 (TODO: correct?) */
	timings :Array<AnimationTiming>;

}
/**声效和闪烁效果数据的JSON。 */
declare class AnimationTiming{
	
	/**闪烁颜色。 (TODO: type?) */
	flashColor :Array<any>;
	
	/**闪烁持续时间。 */
	flashDuration :number;
	
	/** 闪烁范围。*/
	flashScope :number;
	
	/**帧编号。 */
	frame: number;
	
	/**声效。 */
	se:$AudioFile;
}
/**护甲数据的JSON。 */
declare class $Armor{
	/**护甲类型 ID。 */
	atypeId :number;
	
	/**护甲的说明。 */
	description :string;
	
	/**装备类型ID。 */
	etypeId :number;
	
	/**图标的索引。 */
	iconIndex :number;
	
	/**护甲ID。 */
	id:number;
	
	/**护甲名称。 */
	name: string;
	
	/**备注。 */
	note:string;
	
	/**能力值变化量。 (TODO: type?) */
	params: Array<any>;
	
	/**价格。 */
	price :number;
	
	/**由 特性 数据组成的数组。 */
	traits:Array<$Trait>;
}
/**声音数据的JSON类。 */
declare class $AudioFile{
	
	/**文件名。 */
	name:string;
	
	/**声场位置。 */
	pan:number;
	
	/**音调。 */
	pitch:number;
	
	/**音量。 */
	volume : number;
}
/**战斗事件事件页数据的JSON。 */
declare class $BattleEventPage{
	
	/** 触发条件*/
	conditions:$BattleEventPageConditions;
	
	/**由 事件指令 数据组成的数组。 */
	list :Array<$EventCommand>;
	
	/**事件间隔。 */
	span:number;
}
/**战斗事件触发条件数据的JSON。 */
declare class $BattleEventPageConditions{
	/**指定角色的HP百分比。 */
	actorHp :number;
	
	/**指定角色的ID。 */
	actorId :number;
	
	/**是否勾选指定角色HP选项。 */
	actorValid :boolean;
	
	/**指定敌人的HP百分比 */
	enemyHp : number;
	
	/**指定敌人的索引。 */
	enemyIndex :number;
	
	/**是否勾选指定敌人HP选项。 */
	enemyValid :boolean;
	
	/**开关ID。 */
	switchId :number;
	
	/**是否勾选指定开关选项 */
	switchValid:boolean;
	
	/**指定回合数的数值A。 */
	turnA :number;
	
	/**指定回合数的数值B。 */
	turnB :number;
	
	/**是否勾选回合结束时选项。 */
	turnEnding :boolean;
	
	/**是否勾选指定回合数选项。 */
	turnValid :boolean;
}

/**职业数据的JSON。 */
declare class $Class{
	/** 决定经验值曲线的数值数组。 (TODO: type correct?)*/
	expParams :Array<number>;
	
	/**职业ID。 */
	id:number;
	
	/** 由 习得技能 数据组成的数组。*/
	learnings :Array<$ClassLearning>;
	
	/**职业名称。 */
	name:string;
	
	/**备注。 */
	note: string;
	
	/**包含每一等级对应普通能力的二维数组。 (TODO: type?) */
	params:Array<any>;
	
	/**由 特性 数据组成的数组。 */
	traits :Array<$Trait>;
}

/**习得技能数据的JSON。 */
declare class $ClassLearning{
	/**学习等级。 */
	level :number;
	
	/**备注。 */
	note:string;
	
	/**习得技能ID。 */
	skillId :number;
}
/**公共事件数据的JSON。 */
declare class $CommonEvent {
	
	/**公共事件ID */
	id:number;
	
	/**由 事件指令 数据组成的数组。 */
	list:Array<$EventCommand>;
	
	/**公共事件名称。 */
	name:string;
	
	/**开关ID。 */
	switchId :number;
	
	/**触发条件。 */
	trigger :number;
	
}
/**伤害数据的JSON。 */
declare class $Damage {
	/**是否允许必杀。 */
	critical :boolean;
	
	/**属性编号。 */
	elementId :number;
	
	/**伤害公式。 */
	formula : string;
	
	/**伤害类型。 */
	type:number;
	
	/**伤害离散度。 */
	variance :number;
}
/**使用效果数据的JSON */
declare class $Effect {
	/**效果编号。 */
	code:number;
	
	/**使用效果类型（例如属性、状态）的编号，根据不同的使用效果而发生变化。 */
	dataId :number;
	
	/**使用效果参数1。 */
	value1: number;
	
	/**使用效果参数2。 */
	value2: number;
}
/**敌人数据的JSON类。 */
declare class $Enemy {
	/** 由 行动模式 数据组成的数组。*/
	actions :Array<$EnemyAction>;
	
	/**敌人战斗图的色调调整。 */
	battlerHue :number;
	
	/**敌人战斗图的文件名。 */
	battlerName :string;
	
	/**由 掉落物品 数据组成的数组 */
	dropItems :Array<$EnemyDropItem>;
	
	/**经验值。 */
	exp:number;
	
	/**金钱。 */
	gold:number;
	
	/**敌人ID。 */
	id:number;
	
	/**敌人名称。 */
	name:string;
	
	/**备注。 */
	note: string;
	
	/**敌人的能力值。 (TODO: type?) */
	params:Array<any>;
	
	/**由 特性 数据组成的数组。 */
	traits :Array<$Trait>;
}
/**敌人行动数据的JSON。 */
declare class $EnemyAction{
	
	/**条件的参数1。 */
	conditionParam1 :number;
	
	/**条件的参数2。 */
	conditionParam2 :number;
	
	/**行动条件。 */
	conditionType :number;
	
	/**优先级。 */
	rating :number;
	
	/**技能ID。 */
	skillId :number;
}
/**掉落物品的类。 */
declare class $EnemyDropItem{
	/**掉落物在对应数据库中的编号。 */
	dataId :number;
	
	/**掉率的分母。 */
	denominator :number;
	
	/**掉落物品的类型。 */
	kind:number;
}
/**地图事件数据的类。 */
declare class $Event {
	/**事件ID。 */
	id:number;
	
	/**事件名称。 */
	name: string;
	
	/**事件备注。 */
	note: string;
	
	/**由 事件页 数据组成的数组。 */
	pages: Array<$EventPage>;
	
	/**事件的X坐标。 */
	x:number;
	
	/**事件的Y坐标。 */
	y:number;
}

/**事件指令数据的JSON。 */
declare class $EventCommand{
	
	/**事件指令代码。 */
	code:number;
	
	/**指令缩排深度。 */
	indent:number;
	
	/**包含事件指令各项参数的数组，不同事件指令有不同内容。(TODO: type?) */
	parameters:Array<any>;
}
/**事件页数据的类。 */
declare class $EventPage{
	/**事件的执行条件。 */
	conditions :Array<$EventPageConditions>;
	
	/**是否固定朝向。 */
	directionFix :boolean;
	
	/**事件页的图像。 */
	image: $EventPageImage;
	
	/**由 事件指令 数据组成的数组。 */
	list:Array<$EventCommand>;
	
	/**移动频率。 */
	moveFrequency :number;
	
	/**移动路径。 */
	moveRoute :$MoveRoute;
	
	/**移动速度。 */
	moveSpeed :number;
	
	/**移动类型。 */
	moveType :number;
	
	/**优先级。 */
	priorityType :number;
	
	/**是否开启踏步动画。 */
	stepAnime :boolean;
	
	/**是否开启允许穿透。 */
	through :boolean;
	
	/**触发条件。 */
	trigger :number;
	
	/**是否开启步行动画。 */
	walkAnime :boolean;
}
/**事件出现条件数据的JSON。 */
declare class $EventPageConditions{
	/**角色ID。 */
	actorId :number;
	
	/**是否勾选指定角色在队伍中选项。 */
	actorValid :boolean;
	
	/**物品ID。 */
	itemId :number;
	
	/**是否勾选拥有指定物品选项。 */
	itemValid :boolean;
	
	/**独立开关名称。 */
	selfSwitchCh :string;
	
	/**是否勾选独立开关开启选项。 */
	selfSwitchValid :boolean;
	
	/**第一个开关ID */
	switch1Id :number;
	
	/**是否勾选第一个开关打开选项。 */
	switch1Valid :boolean;
	
	/**第二个开关ID。 */
	switch2Id :number;
	
	/**是否勾选第二个开关打开选项。 */
	switch2Valid :boolean;
	
	/**变量ID。 */
	variableId :number;
	
	/**是否勾选变量大于选项。 */
	variableValid :boolean;
	
	/**变量的值。 */
	variableValue :number;
}
/**事件图片数据的JSON。 */
declare class $EventPageImage{
	/**行走图的索引。 */
	characterIndex :number;
	
	/**行走图的文件名。 */
	characterName :string;
	
	/**角色的朝向。 */
	direction :number;
	
	/**角色的步伐动作索引。 */
	pattern:number;
	
	/**地图元件 ID 编号。 */
	tileId :number;
}
/**物品数据的JSON。 */
declare class $Item {
	/**使用动画的ID。 */
	animationId :number;
	
	/**是否为消耗品。 */
	consumable :boolean;
	
	/**伤害。 */
	damage :$Damage;
	
	/**物品描述。 */
	description :string;
	
	/**由 使用效果 数据组成的数组。 */
	effects :Array<$Effect>;
	
	/**命中类型。 */
	hitType :number;
	
	/**物品图标的索引。 */
	iconIndex :number;
	
	/**物品ID。 */
	id:number;
	
	/**物品类型ID。 */
	itypeId :number;
	
	/**物品名称。 */
	name:string;
	
	/**备注。 */
	note:string;
	
	/**使用场合。(战斗和地图？) */
	occasion :number;
	
	/**物品价格。 */
	price:number;
	
	/**连续次数。 */
	repeats :number;
	
	/**效果范围。 */
	scope:number;
	
	/**速度修正。 */
	speed:number;
	
	/**成功机率。 */
	successRate :number;
	
	/**TP获取量。 */
	tpGain :number;
	
}
/**地图数据的JSON。 */
declare class $Map {
	/**是否自动播放BGM。 */
	autoplayBgm :boolean;
	
	/**是否自动播放BGS。 */
	autoplayBgs :boolean;
	
	/**战斗背景下层图片的文件名。 */
	battleback1Name :string;
	
	/**战斗背景上层图片的文件名。 */
	battleback2Name :string;
	
	/**地图的BGM。 */
	bgm :$AudioFile;
	
	/**地图的BGS。 */
	bgs :$AudioFile;
	
	/**地图数据的三维数组。 (TODO: type?)*/
	data :Array<any>;
	
	/**是否允许跑步。 */
	disableDashing : boolean;
	
	/**地图显示名称。 */
	displayName :string;
	
	/**由 地图遇敌 数据组成的数组。 */
	encounterList :Array<$MapEncounter>;
	
	/**遇敌平均步数。 */
	encounterStep :number;
	
	/**由 事件 数据组成的数组。 */
	events :Array<$Event>
	
	/**地图高度。 */
	height:number;
	
	/**地图备注。 */
	note:string;
	
	/**是否开启远景图横向循环。 */
	parallaxLoopX :boolean;
	
	/**是否开启远景图纵向循环。 */
	parallaxLoopY :boolean;
	
	/**远景图的文件名。 */
	parallaxName :string;
	
	/**远景图是否在编辑器中显示。 */
	parallaxShow :boolean;
	
	/**远景图的水平滚动速度。 */
	parallaxSx :number;
	
	/**远景图的垂直滚动速度。 */
	parallaxSy :number;
	
	/**地图循环方式。 */
	scrollType :number;
	
	/**是否使用战斗背景图像。 */
	specifyBattleback :boolean;
	
	/**地图使用的图块组 ID。 */
	tilesetId:number;
	
	/**地图的宽度 */
	width:number;
	
}
/**遇敌数据的JSON。 */
declare class $MapEncounter
{
	/**区域 ID 构成的数组。 */
	regionSet :Array<number>;
	
	/**遇敌队伍编号。 */
	troopId :number;
	
	/**权重 */
	weight:number;
}
/**地图信息数据的JSON。 */
declare class $MapInfo {
	/**地图树状显示已展开的标记。 */
	expanded :boolean;
	
	/**地图名称。 */
	name:string;
	
	/**地图树状显示的顺序。 */
	order :number;
	
	/**父地图编号。 */
	parentId :number;
	
	/**编辑器内部使用，横向滚动的位置。 */
	scrollX :number;
	
	/**编辑器内部使用，纵向滚动的位置。 */
	scrollY :number;
}
/**移动路线指令数据的JSON。 */
declare class $MoveCommand {
	/**移动路线指令代码。 */
	code:number;
	
	/**包含移动路线指令各项参数的数组。 (TODO: type?) */
	parameters :Array<any>;
} 
/**移动路线数据的JSON。 */
declare class $MoveRoute{
	/**由 移动路线指令 数据组成的数组。 */
	list:Array<$MoveCommand>;
	
	/**是否循环执行。 */
	repeat:boolean;
	
	/**是否忽略障碍。 */
	skippable :boolean;
	
	/**是否等待至移动结束。 */
	wait :boolean;
	
}
/**技能数据的JSON。 */
declare class $Skill {
	/**动画的ID。 */
	animationId :number;
	
	/**技能伤害。 */
	damage:$Damage;
	
	/**技能描述。 */
	description :string;
	
	/**由 使用效果 数据组成的数组。 */
	effects :Array<$Effect>;
	
	/**命中类型。 */
	hitType :number;
	
	/**图标编号。 */
	iconIndex :number;
	
	/**技能ID。 */
	id:number;
	
	/**使用时显示信息的第一行。 */
	message1 :string;
	
	/**使用时显示信息的第二行。 */
	message2 :string;
	
	/**MP消耗量。 */
	mpCost :number;
	
	/**技能名称。 */
	name:string;
	
	/**备注。 */
	note:string;
	
	/**使用场合。 */
	occasion :number;
	
	/**连续次数。 */
	repeats :number;
	
	/**武器限制1 */
	requiredWtypeId1 :number;
	
	/**武器限制2。 */
	requiredWtypeId2 :number;
	
	/**效果范围。 */
	scope :number;
	
	/**速度修正。 */
	speed:number;
	
	/**技能类型ID。 */
	stypeId :number;
	
	/**成功几率。 */
	successRate : number;
	
	/**TP消耗量。 */
	tpCost :number;
	
	/**TP获取量。 */
	tpGain :number;
	
}
/**状态数据的JSON。 */
declare class $State{
	/**自动解除的时机。 */
	autoRemovalTiming :number;
	
	/**受到伤害时解除的概率。 */
	chanceByDamageNumber:number;
	
	/**图标编号。 */
	iconIndex :number;
	
	/**状态ID。 */
	id:number;
	
	/**状态持续回合数的最大值。 */
	maxTurns :number;
	
	/**状态附加队友时的提示信息。 */
	message1 :string;
	
	/**状态附加敌人时的提示信息。 */
	message2 :string;
	
	/**状态持续时的提示信息。 */
	message3  :string;
	
	/**状态解除时的提示信息。 */
	message4 :string;
	
	/**状态持续回合数的最小值。 */
	minTurns :number;
	
	/**横版战斗时该状态的动作。 */
	motion:number;
	
	/**状态名称。 */
	name:string;
	
	/**备注。 */
	note:string;
	
	/**横版状态时状态显示的图片。 */
	overlay :number;
	
	/**显示优先级 */
	priority :number;
	
	/**战斗结束后是否解除状态。 */
	removeAtBattleEnd :boolean;
	
	/**受到伤害时是否解除状态。 */
	removeByDamage :boolean;
	
	/**获得其他限制性状态时是否解除状态。(抗性?) */
	removeByRestriction :boolean;
	
	/**一定步数后是否解除状态。 */
	removeByWalking :boolean;
	
	/**状态限制。 */
	restriction :number;
	
	/**解除状态所需的步数。 */
	stepsToRemove :number;
	
	/**由 特性 数据组成的数组 */
	traits :Array<$Trait>;
}
/**储存系统数据的JSON。 */
declare class $System {
	/**飞艇的设置。 */
	airship :$SystemVehicle;
	
	/**护甲种类的列表。 */
	armorTypes :Array<string>;
	
	/**由 战斗动作 数据组成的数组。 */
	attackMotions :Array<$SystemAttackMotion>;
	
	/**测试战斗模式下，战斗背景的下层图片文件名。 */
	battleback1Name:string;
	
	/**测试战斗模式下，战斗背景的上层图片文件名。 */
	battleback2Name:string;
	
	/**战斗BGM。 */
	battleBgm:$AudioFile;
	
	/**在编辑动画时设置的敌人色相的改变值。 */
	battlerHue:number;
	
	/**在编辑动画时设置的敌人战斗图的文件名。 */
	battlerName:string;
	
	/**小型船的设置。 */
	boat: $SystemVehicle;
	
	/**当前的货币单位。 */
	currencyUnit:string;
	
	/**战败时的ME。 */
	defeatMe:$AudioFile;
	
	/**当前编辑的地图ID。 */
	editMapId:number;
	
	/**属性的列表。 (Elements in database editor) */
	elements:Array<string>;
	
	/**装备类型的列表。 */
	equipTypes:Array<string>;
	
	/**Game Over 时的 ME。 */
	gameoverMe:$AudioFile;
	
	/**游戏的标题。 */
	gameTitle:string;
	
	/**描述本地环境的字符串，例如 "ja_JP" 或者 "en_US"。 */
	locale:string;
	
	/**魔法技能的技能类型ID组成的数组。 */
	magicSkills:Array<number>;
	
	/**菜单的选项。(编辑器中的6个checkbox) */
	menuCommands:Array<boolean>;
	
	/**战斗中是否显示TP的选项。 */
	optDisplayTp:boolean;
	
	/**是否描绘标题文字的选项。 */
	optDrawTitle:boolean;
	
	/**未参战人员是否获得EXP的选项。 */
	optExtraExp:boolean;
	
	/**地形伤害是否导致无法战斗的选项。 */
	optFloorDeath:boolean;
	
	/**是否显示跟随成员的选项。 */
	optFollowers:boolean;
	
	/**是否使用横版战斗模式的选项。 */
	optSideView:boolean;
	
	/**慢性伤害是否导致死亡的选项。 */
	optSlipDeath:boolean;
	
	/**开始时行走图是否透明的选项。 */
	optTransparent:boolean;
	
	/**初始队伍角色ID的数组。 */
	partyMembers:Array<number>;
	
	/**大型船的设置。 */
	ship:$SystemVehicle;
	
	/** 技能类型的列表。*/
	skillTypes:Array<string>;
	
	/**由音效文件的 声音数据 组成的数组。 */
	sounds:Array<$AudioFile>;
	
	/**初始地图的ID。 */
	startMapId:number;
	
	/**初始地图的X坐标。 */
	startX:number;
	
	/**初始地图的Y坐标。 */
	startY:number;
	
	/**开关名称的列表。 */
	switches:Array<string>;
	
	/** 游戏用语。*/
	terms:$SystemTerms;
	
	/**由 测试战斗者 数据组成的数组。 */
	testBattlers:Array<$SystemTestBattler>;
	
	/**战斗测试的敌群ID。 */
	testTroopId: number;
	
	/**标题画面的下层图片文件名。 */
	title1Name:string;
	
	/**标题画面的上层图片文件名。 */
	title2Name:string;
	
	/**标题画面的BGM。 */
	titleBgm:$AudioFile;
	
	/**变量名称的列表。 */
	variables:Array<string>;
	
	/**检查游戏是否发生更新的随机数。 */
	versionId:number;
	
	/**胜利时的ME。 */
	victoryMe:$AudioFile;
	
	/**武器类型的列表。 */
	weaponTypes:Array<string>;
	
	/**窗口的颜色。 */
	windowTone:Array<number>;
}
/**储存攻击数据的JSON。 */
declare class $SystemAttackMotion{
	/**动作的类型。 */
	type:number;
	
	/**动作图片的ID。 */
	weaponImageId:number;
}
/**储存用语数据的JSON。 */
declare class $SystemTerms{
	/**基本状态的名称。 */
	basic:Array<string>;
	
	/**指令的名称。 */
	commands:Array<string>;
	
	/**信息文字。 */
	messages:Object;
	
	/**属性的名称。 */
	params:Array<string>;
}
/**储存战斗测试时角色数据的JSON。 */
declare class $SystemTestBattler{
	/**角色的ID */
	actorId:number;
	
	/**装备列表。 */
	equips:Array<number>;
	
	/**角色的等级。 */
	level:number;
}
/**储存交通工具数据的JSON。 */
declare class $SystemVehicle{
	/**交通工具的BGM。 */
	bgm:$AudioFile;
	
	/**行走图的编号。 */
	characterIndex:number;
	
	/**行走图的文件名。 */
	characterName:string;
	
	/**起始位置的地图ID。 */
	startMapId:number;
	
	/**起始位置的地图X坐标。 */
	startX:number;
	
	/**起始位置的地图Y坐标。 */
	startY:number;
	
}
/**储存图块组数据的JSON。 */
declare class $Tileset{
	/**图块组标志。 */
	flags:Array<number>;
	
	/**图块组ID。 */
	id:number;
	
	/**图块组模式。 */
	mode:number;
	
	/**图块组名称。 */
	name:string;
	
	/**图块组备注。 */
	note:string;
	
	/** 图块图片的文件名。*/
	tilesetNames:Array<string>;
	
}

/**特性数据的JSON。 */
declare class $Trait{
	
	/**特性代码。 */
	code :number;
	
	/**特性类型对应的数据（属性、状态等）ID。 */
	dataId :number;
	
	/**特性类型对应的设置值。 */
	value: number;
}
/**敌方队伍的 JSON 数据结构。 */
declare class $Troop{
	/**敌方队伍 ID。 */
	id:number;
	
	/**成员数据的数组。 */
	members:Array<$TroopMember>;
	
	/**名字。 */
	name:string;
	
	/**战斗事件（页）数据的数组. */
	pages:Array<$BattleEventPage>;
}

/**敌方队员的JSON 数据结构 */
declare class $TroopMember{
	/**敌方 ID 。 */
	enemyId:number;
	
	/**"中途出现"选项。 */
	hidden:boolean;
	
	/**X 坐标。 */
	x:number;
	
	/**Y 坐标。 */
	y:number;
	
}
/**武器的JSON 数据结构。 */
declare class $Weapon{
	/**动画 ID。 */
	animationId:number;
	
	/**描述文本。 */
	description:string;
	
	/**装备类型 ID。 */
	etypeId:number;
	
	/**图标图像的索引。 */
	iconIndex:number;
	
	/**武器id */
	id:number;
	
	/**名字。 */
	name:string;
	
	/**注释。 */
	note:string;
	
	/** 参数的变化。*/
	params:Array<number>;
	
	/**价格。 */
	price:number;
	
	/**特征数据的数组。 */
	traits:Array<$Trait>;
	
	/**武器类型的ID。 */
	wtypeId:number;
}

declare class Game_Actors{
	
}

declare class Game_Map{
	
}
/**The game object class for the state of the message window that displays text
or selections, etc. */
declare class Game_Message{
	initialize();
	
	/**清除，包括文本，选项，背景等 */
	clear();
	
	/** 选项数组 TODO:type? */
	choices():Array<any>;
	
	/**脸图的文件名。  */
	faceName():string;
	
	/**脸图的索引。 */
	faceIndex():number;
	
	background():any;
	
	positionType():any;
	
	choiceDefaultType():any;
	
	choiceCancelType():any;
	
	choiceBackground():any;
	
	choicePositionType():any;
	
	numInputVariableId():number;
	
	numInputMaxDigits():number;
	
	itemChoiceVariableId():number;
	
	itemChoiceItypeId():number;
	
	scrollMode():number;
	
	scrollSpeed():number;
	
	scrollNoFast():any;
	
	/**添加文字 */
	add(text:string);
	
	setFaceImage(faceName:string, faceIndex:number);
	
	setBackground(background:string);
	
	setPositionType(positionType:any);
	
	setChoices(choise:Array<any>, defaultType:any, cancelType:any);
	
	setChoiceBackground(background:string);
	
	setChoicePositionType(positionType:any);
	
	setNumberInput(variableId:number, maxDigits:number);
	
	setItemChoice(variableId:number, itemType:number);
	
	setScroll(speed:number, noFast:any);
	
	setChoiceCallback(callback:Function);
	
	onChoice(n:number);
	
	hasText();boolean;
}
declare class Game_Party{
	
}
declare class Game_Player{}
declare class Game_Screen{}
declare class Game_SelfSwitches{}
declare class Game_Switches{}
/**系统数据 */
declare class Game_System{
	/**初始化 */
	initialize();
	
	/** 是否是日语 */
	isJapanese():boolean;
	
	/**是否是中文*/
	isChinese():boolean;
	
	/**是否是韩语 */
	isKorean():boolean;
	
	/**是否是中日韩统一表意文字 （TODO:correct?） */
	isCJK():boolean;
	
	/**是否是俄语 */
	isRussian():boolean;
	
	/**是否是横版战斗模式 */
	isSideView():boolean;
	
	/**是否可以存档 */
	isSaveEnabled():boolean;
	
	/** 禁用存档 */
	disableSave();
	
	/**启动存档 */
	enableSave();
	
	/** 菜单是否可用 （TODO：哪个菜单？） */
	isMenuEnabled():boolean;
	
	/**禁用菜单 */
	disableMenu();
	
	/**启用菜单 */
	enableMenu();
	
	/**是否开启遇敌 */
	isEncounterEnabled():boolean;
	
	/**禁用遇敌 */
	disableEncounter();
	
	/**启用遇敌 */
	enableEncounter();
	
	/** TODO：System 设置里可以设置的一个菜单项 */
	isFormationEnabled();
	
	disableFormation();
	
	enableFormation();
	
	/**战斗次数？ （TODO） */
	battleCount():number;
	
	/**胜利次数？ （TODO） */
	winCount():number;
	
	/**逃跑次数 */
	escapeCount():number;
	
	/**存档次数 */
	saveCount():number;
	
	/**版本id？(TODO) */
	versionId():number;
	
	/**获取窗口的颜色
	 * 
	 * @return {Array<number>} 即$System.windowTone
	*/
	windowTone():Array<number>;
	
	/**设置口的颜色 （同$System） */
	setWindowTone(color:Array<number>);
	
	/**获取战斗背景音乐 */
	battleBgm():$AudioFile;
	
	/**获取设置战斗背景音乐 */
	setBattleBgm(bgm:$AudioFile);
	
	/**胜利时的ME */
	victoryMe():$AudioFile;
	
	/**设置胜利时的ME */
	setVictoryMe(value:$AudioFile);
	
	/**得到战败时的ME */
	defeatMe():$AudioFile;
	
	/**设置战败时的ME */
	setDefeatMe(value:$AudioFile);
	
	/**战斗开始，结果是战斗次数加1 */
	onBattleStart();
	
	/**战斗胜利，结果是胜利次数加1 */
	onBattleWin();
	
	/**逃跑，逃跑次数加1 */
	onBattleEscape();
	
	/**存档前调用的方法，存档次数加1，保存当前帧和bgm等 */
	onBeforeSave();
	
	/**存档后调用的方法，恢复保存的帧，恢复bgm等 */
	onAfterLoad();
	
	/**游戏时间 （单位应该是秒）*/
	playtime():number;
	
	/**游戏时间的文本，形如 小时：分钟：秒 */
	playtimeText();
	
	/**保存bgm */
	saveBgm();
	
	/**重播bgm（调用saveBgm保存的bgm） */
	replayBgm();
	
	/** */
	saveWalkingBgm();
	
	replayWalkingBgm();
}
/**临时数据，不会被包含在存档中 */
declare class Game_Temp{
	
	/**初始化 */
	initialize();
	
	/**测试中 */
	isPlaytest();
	
	/**保留指定事件 （这句会更新内部的_commonEventId成员） */
	reserveCommonEvent(commonEventId:number);
	
	/**清空当前保留的事件， 即 id=0*/
	clearCommonEvent();
	
	/**
	 * 当前是否有保留的事件
	 * 
	 * @return {boolean}
	 */
	isCommonEventReserved():boolean;
	
	/**
	 * 取得保留的事件 
	 * 
	 * @return {$CommonEvent} 取得保留的事件（通过id取得）
	*/
	reservedCommonEvent():$CommonEvent;
	
	/** TODO: ? */
	setDestination(x:number, y:number);
	
	/** TODO: ? */
	clearDestination(x:number, y:number);
	
	/** TODO: ? */
	isDestinationValid():boolean;
	
	/** TODO: ? */
	destinationX():number;
	
	/** TODO: ? */
	destinationY():number;
	
}
/**定时器？ */
declare class Game_Timer{
	initialize();
	
	update(sceneActive:any);
	
	start();
	
	stop();
	
	isWorking():boolean;
	
	seconds():number;
	
	onExpire();
}
declare class Game_Troop{}
declare class Game_Variables{}
declare var $dataActors       :Array<$Actor>;
declare var $dataClasses      :Array<$Class>;
declare var $dataSkills       :Array<$Skill>;
declare var $dataItems        :Array<$Item>;
declare var $dataWeapons      :Array<$Weapon>;
declare var $dataArmors       :Array<$Armor>;
declare var $dataEnemies      :Array<$Enemy>;
declare var $dataTroops       :Array<$Troop>;
declare var $dataStates       :Array<$State>;
declare var $dataAnimations   :Array<$Animation>;
declare var $dataTilesets     :Array<$Tileset>;
declare var $dataCommonEvents :Array<$CommonEvent>;
declare var $dataSystem       :$System; // TODO: correct?
declare var $dataMapInfos     :Array<$MapInfo>;
declare var $dataMap          :$Map;
declare var $gameTemp         :Game_Temp;
declare var $gameSystem       :Game_System;
declare var $gameScreen       :Game_Screen;
declare var $gameTimer        :Game_Timer;
declare var $gameMessage      :Game_Message;
declare var $gameSwitches     :Game_Switches;
declare var $gameVariables    :Game_Variables;
declare var $gameSelfSwitches :Game_SelfSwitches;
declare var $gameActors       :Game_Actors;
declare var $gameParty        :Game_Party;
declare var $gameTroop        :Game_Troop;
declare var $gameMap          :Game_Map;
declare var $gamePlayer       :Game_Player;
//declare var $testEven;