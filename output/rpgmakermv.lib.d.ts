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
	 parent :Object;
	 
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