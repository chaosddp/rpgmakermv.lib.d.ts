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
/** 护甲和武器的基类 */
declare class Equipment{
	/**说明。 */
	description :string;
	
	/**装备类型ID。 */
	etypeId :number;
	
	/**图标的索引。 */
	iconIndex :number;
	
	/**ID。 */
	id:number;
	
	/**名称。 */
	name: string;
	
	/**备注。 */
	note:string;
	
	/**能力值变化量。 (TODO: type?) */
	params: Array<number>;
	
	/**价格。 */
	price :number;
	
	/**由 特性 数据组成的数组。 */
	traits:Array<$Trait>;
}

/** 可使用，技能和道具的基类 */
declare class Usable{
	/**动画的ID。 */
	animationId :number;

	/**伤害。 */
	damage :$Damage;

	/**描述。 */
	description :string;

	/**由 使用效果 数据组成的数组。 */
	effects :Array<$Effect>;

	/**命中类型。 */
	hitType :number;

	
	/**图标编号。 */
	iconIndex :number;

	/**ID。 */
	id:number;

	/**名称。 */
	name:string;

	/**备注。 */
	note:string;

	/**使用场合。(战斗和地图？) */
	occasion :number;

	/**连续次数。 */
	repeats :number;

	
	/**效果范围。 */
	scope :number;

	/**速度修正。 */
	speed:number;


	
	/**成功几率。 */
	successRate : number;

	/**TP获取量。 */
	tpGain :number;
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
declare class $Armor extends Equipment{
	/**护甲类型 ID。 */
	atypeId :number;
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
declare class $Item extends Usable {

	/**是否为消耗品。 */
	consumable :boolean;
	
	/**物品类型ID。 */
	itypeId :number;
	
	/**物品价格。 */
	price:number;
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
declare class $Skill extends Usable{
	
	/**使用时显示信息的第一行。 */
	message1 :string;
	
	/**使用时显示信息的第二行。 */
	message2 :string;
	
	/**MP消耗量。 */
	mpCost :number;
	
	/**武器限制1 */
	requiredWtypeId1 :number;
	
	/**武器限制2。 */
	requiredWtypeId2 :number;
	
	/**技能类型ID。 */
	stypeId :number;
	
	/**TP消耗量。 */
	tpCost :number;
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
declare class $Weapon extends Equipment{
	/**动画 ID。 */
	animationId:number;
	
	/**武器类型的ID。 */
	wtypeId:number;
}
/** The game object class for a battle action. */
declare class Game_Action{
	constructor(subject:Game_BattlerBase, forcing:boolean);
	initialize(subject:Game_BattlerBase, forcing:boolean);
	
	clear();
	
	setSubject(subject:Game_BattlerBase);
	
	subject():$TroopMember;
	
	/** Game_Troop/Game_Party */
	friendsUnit():any;
	
	/** Game_Troop/Game_Party */
	opponentsUnit():any;
	

	setEnemyAction(action:$EnemyAction);
	
	setAttack();
	
	setGuard();
	
	setSkill(skillId:number);
	
	setItem(itemId:number);
	
	setItemObject(object:Usable);
	
	setTarget(targetIndex:number);
	
	/**item of this action, may be skill or an item */
	item():Usable;
	
	isSkill():boolean;
	
	isItem():boolean;
	
	checkItemScope(list:Array<number>):boolean;
	
	isForOpponent():boolean;
	
	isForFriend():boolean;
	
	isForDeadFriend():boolean;
	
	isForUser():boolean;
	
	isForOne():boolean;
	
	isForRandom():boolean;
	
	isForAll():boolean;
	
	needsSelection():boolean;
	
	numTargets():number;
	
	checkDamageType():boolean;
	
	isHpEffect():boolean;
	
	isMpEffect():boolean;
	
	isDamage():boolean;
	
	isRecover():boolean;
	
	isDrain():boolean;
	
	isHpRecover():boolean;
	
	isMpRecover():boolean;
	
	isCertainHit():boolean;
	
	isPhysical():boolean;
	
	isMagical():boolean;
	
	isAttack():boolean;
	
	isGuard():boolean;
	
	isMagicSkill():boolean;
	
	decideRandomTarget();
	
	setConfusion();
	
	prepare();
	
	isValid():boolean;
	
	speed():number;
	
	makeTargets(targets: Array<Game_BattlerBase>):Array<Game_BattlerBase>;
	
	confusionTarget():Game_BattlerBase;
	
	targetsForOpponents():Array<Game_BattlerBase>;
	
	targetsForFriends():Array<Game_BattlerBase>;
	
	evaluate():number;
	
	itemTargetCandidates():Array<Game_BattlerBase>;
	
	evaluateWithTarget(target:Game_BattlerBase):number;
	
	testApply(target:Game_BattlerBase):boolean;
	
	hasItemAnyValidEffects(target:Game_BattlerBase):boolean;
	
	testItemEffect(target:Game_BattlerBase, effect:$Effect):boolean;
	
	itemCnt(target:Game_BattlerBase):number;
	
	itemMrf(target:Game_BattlerBase):number;
	
	itemHit(target:Game_BattlerBase):number;
	
	itemEva(target:Game_BattlerBase):number;
	
	itemCri(target:Game_BattlerBase):number;
	
	apply(target:Game_BattlerBase):number;
	
	makeDamageValue(target:Game_BattlerBase, critical:boolean):number;
	
	evalDamageFormula(target:Game_BattlerBase):number;
	
	calcElementRate(target:Game_BattlerBase):number;
	
	elementsMaxRate(target:Game_BattlerBase):number;
	
	/** 3 times */
	applyCritical(damage:number):number;
	
	applyVariance(damage:number, variance:number):number;
	
	applyGuard(damage:number, target:Game_BattlerBase):number;
	
	/**this method will check damage type to call executeHpDamage or executeMpDamage */
	executeDamage(target:Game_BattlerBase, value:number);
	
	executeHpDamage(target:Game_BattlerBase, value:number);
	
	executeMpDamage(target:Game_BattlerBase, value:number);
	
	/** */
	gainDrainedHp(value:number);
	
	gainDrainedMp(value:number);
	
	applyItemEffect(target:Game_BattlerBase, effect:$Effect); 
	
	itemEffectRecoverHp(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectRecoverMp(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectGainTp(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddState(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddAttackState(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddNormalState(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectRemoveState(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddBuff(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectAddDebuff(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectRemoveBuff(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectRemoveDebuff(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectSpecial(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectGrow(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectLearnSkill(target:Game_BattlerBase, effect:$Effect);
	
	itemEffectCommonEvent(target:Game_BattlerBase, effect:$Effect);
	
	makeSuccess(target:Game_BattlerBase);
	
	applyItemUserEffect(target:Game_BattlerBase);
	
	lukEffectRate(target:Game_BattlerBase):number;
	
	applyGlobal();
	
}

declare module Game_Action{
var EFFECT_RECOVER_HP :number;
var EFFECT_RECOVER_MP    :number;
var EFFECT_GAIN_TP      :number;
var EFFECT_ADD_STATE     :number;
var EFFECT_REMOVE_STATE   :number;
var EFFECT_ADD_BUFF         :number;
var EFFECT_ADD_DEBUFF      :number;
var EFFECT_REMOVE_BUFF    :number;
var EFFECT_REMOVE_DEBUFF   :number;
var EFFECT_SPECIAL          :number;
var EFFECT_GROW             :number;
var EFFECT_LEARN_SKILL      :number;
var EFFECT_COMMON_EVENT     :number;
var SPECIAL_EFFECT_ESCAPE    :number;
var HITTYPE_CERTAIN          :number;
var HITTYPE_PHYSICAL       :number;
var HITTYPE_MAGICAL        :number;
}

/** The game object class for a result of a battle action. For convinience, all
 member variables in this class are public. */
declare class Game_ActionResult{
	
	used:boolean;
    missed :boolean;
    evaded  :boolean;
    physical :boolean;
    drain :boolean;
    critical :boolean;
    success :boolean;
    hpAffected :boolean;
    hpDamage :number;
    mpDamage :number;
    tpDamage :number;
    addedStates :Array<number>;
    removedStates :Array<number>;
    addedBuffs :Array<number>;
    addedDebuffs :Array<number>;
    removedBuffs :Array<number>;
	
	initialize();
	
	clear();
	
	addedStateObjects():Array<$State>;
	
	removedStateObjects():Array<$State>;
    
    isStatusAffected():boolean;
    
    isHit():boolean;
    
    isStateAdded(stateId:number):boolean;
    
    pushAddedState(stateId:number);
    
    isStateRemoved(stateId:number):boolean;
    
    pushRemovedState(state:number);
    
    isBuffAdded(paramId:number):boolean;
    
    pushAddedBuff(paramId:number);
    
    isDebuffAdded(paramId:number):boolean;
    
    pushAddedDebuff(paramId:number);
    
    isBuffRemoved(paramId:number):boolean;
    
    pushRemovedBuff(paramId:number);
}
/**The game object class for an actor. */
declare class Game_Actor extends Game_Battler{
	level:number;
	
	setup(actorId:number);
	
	actorId():number;
	
	actor():$Actor;
	
	name():string;
	
	setName(name:string);
	
	nickname():string;
	
	setNickname(nickName:string);
	
	profile():string;
	
	setProfile(profile:string);
	
	characterName():string;
	
	characterIndex():number;
	
	faceName():string;
	
	faceIndex():number;
	
	battlerName():string;
	
	initImages();
	
	expForLevel():number;
	
	initExp();
	
	currentExp():number;
	
	currentLevelExp():number;
	
	nextLevelExp():number;
	
	nextRequiredExp():number;
	
	maxLevel():number;
	
	isMaxLevel():boolean;
	
	initSkills();
	
	initEquips();
	
	equipSlots();
	
	/** all equipments include weapon and armor */
	equips():Array<Equipment>;
	
	weapons():Array<$Weapon>;
	
	armors():Array<$Armor>;
	
	hasWeapon(weapon:$Weapon):boolean;
	
	hasArmor(armor:$Armor):boolean;
	
	/** if we can change the equipment in specified slot  */
	isEquipChangeOk(slotId:number):boolean;
	
	changeEquip(soltId:number, item:Equipment);
	
	forceChangeEquip(slotId:number, item:Equipment);
	
	/** the items can be weapon, armor, and item */
	tradeItemWithParty(newItem:any, oldItem:any);
	
	changeEquipById(etypeId:number, itemId:number);
	
	isEquipped(item:Equipment);
	
	discardEquip(item:Equipment);
	
	releaseUnequippableItems(forcing:boolean);
	
	clearEquipments();
	
	/** change all slots to best equipments */
	optimizeEquipments();
	
	bestEquipItem(slotId:number):Equipment;
	
	/**计算能力值，用于计算是否是最佳装备 */
	calcEquipItemPerformance(item:Equipment):number;
	
	/**技能针对当前装备的武器是否合适（可用） */
	isSkillWtypeOk(skill:$Skill):boolean;
	
	/**是否装备指定类型的武器 */
	isWtypeEquipped(wtypeId:number);
	
	/**always be true */
	isActor():boolean;
	
	/** same with $gameParty */
	friendsUnit():Game_Party;
	
	/** same with $gameTroop */
	opponentsUnit():Game_Troop;
	
	/**index in the party */
	index():number;
	
	isBattleMember():boolean;
	
	/** always be true */
	isFormationChangeOk():boolean;
	
	currentClass():$Class;
	
	isClass(gameClass:$Class):boolean;
	
	skills():Array<$Skill>;
	
	usableSkills():Array<$Skill>;
	
	hasNoWeapons():boolean;
	
	/** 徒手伤害类型？ */
	bareHandsElementId():number;
	
	
	paramBase(paramId:number):any;
	
	attackAnimationId1():number;
	
	attackAnimationId2():number;
	
	bareHandsAnimationId():number;
	
	/**设置经验值
	 * @param {number} exp 需要的经验值
	 * @param {boolean} show 提升经验之后，如果升级是否显示
	 */
	changeExp(exp:number, show:boolean);
	
	levelUp();
	
	levelDown();
	
	/**当前等级能学习的新技能 */
	findNewSkills(lastSkills:Array<$Skill>):Array<$Skill>;
	
	/**显示升级信息（包括新技能） */
	displayLevelUp(newSkills:Array<$Skill>);
	
	/**增加经验 */
	gainExp(exp:number);
	
	finalExpRate();
	
	/**1/0 */
	benchMembersExpRate():number;
	
	shouldDisplayLevelUp():boolean;
	
	changeLevel(level:number, show:boolean);
	
	learnSkill(skillId:number);
	
	forgetSkill(skillId:number);
	
	isLearnedSkill(skillId:number);
	
	changeClass(classId:number, keepExp:boolean);
	
	setCharacterImage(characterName: string, characterIndex:number);
	
	setFaceImage(faceName:string, faceIndex:number);
	
	setBattlerImage(battlerName:string);
	
	isSpriteVisible():boolean;
	
	performAttack():boolean;
	
	performVictory();
	
	performEscape();
	
	makeActionList();
	
	makeAutoBattleActions();
	
	makeConfusionActions();
	
	onPlayerWalk();
	
	updateStateSteps(state:$State);
	
	showAddedStates();
	
	showRemovedStates();
	
	/** fix to 20 now */
	stepsForTurn():number;
	
	turnEndOnMap();
	
	checkFloorEffect();
	
	executeFloorDamage();
	
	/**fix to 20 now */
	basicFloorDamage():number;
	
	maxFloorDamage():number;
	
	performMapDamage();
	
	inputtingAction();
	
	selectNextCommand():boolean;
	
	selectPreviousCommand():boolean;
	
	/** TODO: type? */
	lastMenuSkill():$Skill;
	
	setLastMenuSkill(skill:$Skill);
	
	lastBattleSkill():$Skill;
	
	setLastBattleSkill(skill:$Skill);
	
	lastCommandSymbol():string;
	
	setLastCommandSymbol(symbol:string);

}
/**The wrapper class for an actor array. */
declare class Game_Actors{
	initialize();
	
	actor(actorId:number):Game_Actor;
}
/**The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
 and actions. */
declare class Game_Battler extends Game_BattlerBase{
	constructor();
	
	clearAnimations();
	
	clearDamagePopup();
	
	clearWeaponAnimation();
	
	clearEffect();
	
	clearMotion();
	
	requestEffect(effectType:any);
	
	requestMotion(motionType:any);
	
	requestMotionRefresh();
	
	select();
	
	deselect();
	
	isAnimationRequested():boolean;
	
	isDamagePopupRequested():boolean;
	
	isEffectRequested():boolean;
	
	isMotionRequested():boolean;
	
	isWeaponAnimationRequested():boolean;
	
	isMotionRefreshRequested():boolean;
	
	isSelected():boolean;
	
	effectType():any;
	
	motionType():any;
	
	weaponImageId():number;
	
	shiftAnimation():any;
	
	startAnimation();
	
	startDamagePopup();
	
	startWeaponAnimation(weaponImageId:number);
	
	/**TODO: return type correct? */
	action(index:number):Game_Action;
	
	setAction(index:number, action:Game_Action);
	
	/**action count */
	numActions():number;
	
	clearActions();
	
	result():Game_ActionResult;
	
	clearResult();
	
	addState(stateId:number);
	
	/** */
	isStateAddable(stateId:number):boolean;
	
	isStateRestrict(stateId:number):boolean;
	
	removeState(stateId:number);
	
	escape();
	
	addBuff(paramId:number, turns:number);
	
	addDebuff(paramId:number, turns:number);
	
	removeBuff(paramId:number);
	
	removeBattleStates();
	
	removeAllBuffs();
	
	removeStatesAuto(timing:number);
	
	removeBuffsAuto();
	
	removeStatesByDamage();
	
	makeActionTimes():number;
	
	makeActions();
	
	speed():number;
	
	makeSpeed();
	
	currentAction():Game_Action;
	
	removeCurrentAction();
	
	/**TODO: type correct? */
	setLastTarget(target:Game_Actor);
	
	forceAction(skillId:number, targetIndex:number);
	
	/**
	 * use the specified item(include skill)
	 * 
	 * @param {Useable} item can be item or skill 
	 */
	useItem(item:Usable);
	
	gainHp(value:number);
	
	gainMp(value:number);
	
	gainTp(value:number);
	
	gainSilentTp(value:number);
	
	/**0-25之间的随机数 */
	initTp(value:number);
	
	clearTp();
	
	chargeTpByDamage(damageRage:number);
	
	regenerateHp();
	
	maxSlipDamage():number;
	
	regenerateMp();
	
	regenerateTp();
	
	
	/** hp, mp, tp if alive*/
	regenerateAll();
	
	/**do some init  */
	onBattleStart();
	
	/**    this.clearResult();
    this.removeStatesAuto(1);
    this.removeBuffsAuto(); */
	onAllActionsEnd();
	
	/**
    this.clearResult();
    this.regenerateAll();
    this.updateStateTurns();
    this.updateBuffTurns();
    this.removeStatesAuto(2);
	 */
	onTurnEnd();
	
	/**clear some state */
	onBattleEnd();
	
	onDamage(value:number);
	
	setActionState(actionState:string);
	
	/** if state==undecided */
	isUndecided():boolean;
	
	/** if state==inputting */	
	isInputting():boolean;
	
	/** if state==waiting */
	isWaiting():boolean;
	
	isActing():boolean;
	
	/**TODO: 吟唱中？ */
	isChanting():boolean;
	
	isGuardWaiting():boolean;
	
	performActionStart(action:Game_Action);
	
	/**do notihing now */
	performAction();
	
	/**set state to done */
	performActionEnd();
	
	/**do notihing now */
	performDamage();
	
	/** play missing sound */
	performMiss();

	/** paly recovery sound */	
	performRecovery();
	
	/** play evasion sound */
	performEvasion();
	
	/** play magic evasion sound */
	performMagicEvasion();
	
	/**play  evasion sound */
	performCounter();
	
	/** play reflection sound */
	performReflection();
	
	performSubstitute();
	
	performCollapse();
}

/**The superclass of Game_Battler. It mainly contains parameters calculation. 可能是敌人或者我方 */
declare class Game_BattlerBase{
	/** Hit Points */
	hp:number;
	
	/**Magic Points */
	mp:number;
	
	/**Tactical Points */
	tp:number;
	
	/**Maximum Hit Points */
	mhp:number;
	
	/**Maximum Magic Points */
	mmp:number;
	
	/**ATtacK power */
	atk:number;
	
	/**DEFense power */
	def:number;
	
	/**Magic ATtack power */
	mat:number;
	
	/**Magic DeFense power */
	mdf:number;
	
	/**AGIlity */
	agi:number;
	
	/** LUcK */
	luk:number;
	
	/**HIT rate */
	hit:number;
	
	/**EVAsion rate */
	eva:number;
	
	/**CRItical rate */
	cri:number;
	
	/**Critical EVasion rate */
	cev:number;
	
	/**Magic EVasion rate */
	mev:number;
	
	/**Magic ReFlection rate */
	mrf:number;
	
	/**CouNTer attack rate */
	cnt:number;
	
	/**Hp ReGeneration rate */
	hrg:number;
	
	/** Mp ReGeneration rate */
	mrg:number;
	
	/**Tp ReGeneration rate */
	trg:number;
	
	/**TarGet Rate */
	tgr:number;
	
	/**GuaRD effect rate */
	grd:number;
	
	/**RECovery effect rate */
	rec:number;
	
	/**PHArmacology */
	pha:number;
	
	/**Mp Cost Rate */
	mcr:number;
	
	/**Tp Charge Rate */
	tcr:number;
	
	/** Physical Damage Rate */
	pdr:number;
	
	/** Magical Damage Rate */
	mdr:number;
	
	/**Floor Damage Rate */
	fdr:number;
	
	/**EXperience Rate */
	exr:number;
	
	initialize();
	
	initMembers();
	
	clearParamPlus();
	
	clearStates();
	
	/**去掉当前单位的状态 */
	eraseState(stateId:number);
	
	/** 当前单位是否有指定状态 */
	isStateAffected(stateId:number):boolean;
	
	/** 是否是死亡状态 */
	isDeathStateAffected():boolean;
	
	/**死亡状态id，目前固定为1 */
	deathStateId():number;
	
	/**重置状态持续回合，（使用最小回合数，加上一个随机数） */
	resetStateCounts(stateId:number);
	
	/**指定状态的持续回合数是否为0 */
	isStateExpired(stateId:number):boolean;
	
	/**更新单位所有状态回合数，即回合数-1 */
	updateStateTurns();
	
	/**清除增益状态 */
	clearBuffs();
	
	/**清除指定buff */
	eraseBuff(paramId:number);
	
	/**单位的buff个数 */
	buffLength():number;
	
	buff(paramId:number):number;
	
	/**buff是否生效 （即数组对应项的值） */
	isBuffAffected(paramId:number):boolean;
	
	/**debuff是否生效 */
	isDebuffAffected(paramId:number):boolean;
	
	/**buff或者debuff是否生效 */
	isBuffOrDebuffAffected(paramId:number):boolean;
	
	/**最大buff层数？ */
	isMaxBuffAffected(paramId:number):boolean;
	
	/**最大debuff层数？ */
	isMaxDebuffAffected(paramId:number):boolean;
	
	/**增加buff层数？ */
	increaseBuff(paramId:number);
	
	/**增加debuff层数？ */
	decreaseBuff(paramId:number);
	
	/**覆盖buff的持续回合数 */
	overwriteBuffTurns(paramId:number, turns:number);
	
	/**buff剩余回合数为0 */
	isBuffExpired(paramId:number):boolean;
	
	/**更新buff回合数，即-1 */
	updateBuffTurns();
	
	/**hp=0,这里会清除状态和buff */
	die();
	
	/**复活，hp=1 */
	revive();
	
	/**所有状态 */
	states():Array<$State>;
	
	/**状态图标索引 */
	stateIcons():Array<number>;
	
	buffIcons():Array<number>;
	
	buffIconIndex(bufferLevel:number, paramId:number):number;
	
	/**所有图标，包括buff和状态 */
	allIcons():Array<number>;
	
	/**暂同state() */
	traitObjects():Array<$State>;
	
	allTraits(code:number):Array<$Trait>;
	
	traits(code:number):Array<$Trait>;	
	
	traitsWithId(code:number, id:number):Array<$Trait>;
	
	traitsPi(code:number, id:number):number;
	
	traitsSum(code:number, id:number):number;
	
	traitsSumAll(code:number):number;
	
	/**$Trait.dataId 集合 */
	traitsSet(code:number):Array<number>;
	
	/**目前固定0 */
	paramBase(paramId:number):number;
	
	paramPlus(paramId:number):number;
	
	/**@param {number} paramId =1 means MMP then reutrn 0, or return 1 */
	paramMin(paramId:number):number;
	
	/**@param {number} paramId =0 means MHP, return 999999, =1 means MMP, return 9999, or return 999(即其他状态值最大值都是999，如敏捷等) */
	paramMax(paramId:number):number;
	
	paramRate(paramId:number):number;
	
	paramBuffRate(paramId:number):number;
	
	param(paramId:number):number;
	
	xparam(xparamId:number):number;
	
	sparam(sparamId:number):number;
	
	elementRate(elementId:number):number;
	
	debuffRate(paramId:number):number;
	
	stateRate(stateId:number):number;
	
	stateResistSet():Array<number>;
	
	/**是否包含状态抵抗 */
	isStateResist(stateId:number):boolean;
	
	attackElements():Array<number>;
	
	attackStates():Array<number>;
	
	attackStatesRate(stateId:number):number;
	
	attackSpeed():number;
	
	attackTimesAdd():number;
	
	addedSkillTypes():Array<number>;
	
	isSkillTypeSealed(stypeId:number):boolean;
	
	addedSkills():Array<number>;
	
	isSkillSealed(skillId:number):boolean;
	
	isEquipWtypeOk(wtypeId:number):boolean;
	
	isEquipAtypeOk(atypeId:number):boolean;
	
	isEquipTypeLocked(etypeId:number):boolean;
	
	isEquipTypeSealed(etypeId:number):boolean;
	
	/**插槽类型 */
	slotType():number;
	
	/** 双持？ */
	isDualWield():boolean;
	
	actionPlusSet():Array<number>
	
	specialFlag(flagId:number):boolean;
	
	collapseType():number;
	
	partyAbility(abilityId:number):boolean;
	
	/**通过Game_BattlerBase.FLAG_ID_AUTO_BATTLE指定 */
	isAutoBattle():boolean;
	
	/**通过Game_BattlerBase.FLAG_ID_GUARD指定 */
	isGuard():boolean;
	
	isSubstitute():boolean;
	
	isPreserveTp():boolean;
	
	addParam(paramId:number, value:number);
	
	setHp(hp:number);
	
	setMp(mp:number);
	
	setTp(tp:number);
	
	/**固定100 */
	maxTp():number;
	
	/** 刷新，清除state，重置mp/hp/tp */
	refresh();
	
	/**回复mp/hp至最大 */
	recoverAll();
	
	hpRate():number;
	
	mpRate():number;
	
	tpRate():number;
	
	/**用于战斗中单位的出现和隐藏 */
	hide();
	
	appear();
	
	isHidden():boolean;
	
	isAppeared():boolean;
	
	isDead():boolean;
	
	isAlive():boolean;
	
	/**是否快死了，血量小于1/4时 */
	isDying():boolean;
	
	isRestricted():boolean;
	
	canInput():boolean;
	
	canMove():boolean;
	
	isConfused():boolean;
	
	confusionLevel():number;
	
	/**单位是主角 */
	isActor():boolean;
	
	/**单位是敌人 */
	isEnemy():boolean;
	
	sortStates();
	
	restriction():number;
	
	addNewState(stateId:number);
	
	/**did nothing */
	onRestrict();
	
	mostImportantStateText():string;
	
	stateMotionIndex():number;
	
	stateOverlayIndex():number;
	
	isSkillWtypeOk(skill:$Skill):boolean;
	
	skillMpCost(skill:$Skill):number;
	
	skillTpCost(skill:$Skill):number;
	
	canPaySkillCost(skill:$Skill):boolean;
	
	paySkillCost(skill:$Skill);
	
	/**物品的使用场景是否正确 */
	isOccasionOk(item:Usable):boolean;
	
	/**是否能使用物品 */
	meetsUsableItemConditions(item:$Item):boolean;
	
	meetsSkillConditions(skill:$Skill):boolean;
	
	meetsItemConditions(item:$Item):boolean;
	
	canUse(item:Usable):boolean;
	
	/**武器和防具可装备 */
	canEquip(item:Equipment):boolean;
	
	canEquipWeapon(item:$Weapon):boolean;
	
	canEquipArmor(item:$Armor):boolean;
	
	/**普通攻击技能id，固定1 */
	attackSkillId():number;
	
	/**防御技能id， 固定2 */
	guardSkillId():number;
	
	canAttack():boolean;
	
	canGuard():boolean;
}

declare module Game_BattlerBase{
var TRAIT_ELEMENT_RATE   :number;
var TRAIT_DEBUFF_RATE    :number;
var TRAIT_STATE_RATE     :number;
var TRAIT_STATE_RESIST   :number;
var TRAIT_PARAM          :number;
var TRAIT_XPARAM         :number;
var TRAIT_SPARAM         :number;
var TRAIT_ATTACK_ELEMENT :number;
var TRAIT_ATTACK_STATE   :number;
var TRAIT_ATTACK_SPEED   :number;
var TRAIT_ATTACK_TIMES   :number;
var TRAIT_STYPE_ADD      :number;
var TRAIT_STYPE_SEAL     :number;
var TRAIT_SKILL_ADD      :number;
var TRAIT_SKILL_SEAL     :number;
var TRAIT_EQUIP_WTYPE    :number;
var TRAIT_EQUIP_ATYPE    :number;
var TRAIT_EQUIP_LOCK     :number;
var TRAIT_EQUIP_SEAL     :number;
var TRAIT_SLOT_TYPE      :number;
var TRAIT_ACTION_PLUS    :number;
var TRAIT_SPECIAL_FLAG   :number;
var TRAIT_COLLAPSE_TYPE  :number;
var TRAIT_PARTY_ABILITY  :number;
var FLAG_ID_AUTO_BATTLE  :number;
var FLAG_ID_GUARD        :number;
var FLAG_ID_SUBSTITUTE   :number;
var FLAG_ID_PRESERVE_TP  :number;
var ICON_BUFF_START      :number;
var ICON_DEBUFF_START    :number;
}
/**The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event. */
declare class Game_Character extends Game_CharacterBase{
	
	memorizeMoveRoute();
	
	restoreMoveRoute();
	
	isMoveRouteForcing():boolean;	
	
	setMoveRoute(moveRoute:$MoveRoute);
	
	forceMoveRoute(moveRoute:$MoveRoute);
	
	updateRoutineMove();
	
	processMoveCommand(command:$EventCommand);
	
	deltaXFrom(x:number);
	
	deltaYFrom(y:number);
	
	moveRandom();
	
	moveTowardCharacter(character:Game_CharacterBase);
	
	moveAwayFromCharacter(character:Game_CharacterBase);
	
	turnTowardCharacter(character:Game_CharacterBase);
	
	turnAwayFromCharacter(character:Game_CharacterBase);
	
	turnTowardPlayer();
	
	turnAwayFromPlayer();
	
	moveTowardPlayer();
	
	moveAwayFromPlayer();
	
	moveForward();
	
	moveBackward();
	
	processRouteEnd();
	
	advanceMoveRouteIndex();
	
	turnRight90();
	
	turnLeft90();
	
	turn180();
	
	turnRightOrLeft90();
	
	turnRandom();
	
	swap(character:Game_CharacterBase);
}


declare module Game_Character{
var ROUTE_END               :number;
var ROUTE_MOVE_DOWN         :number;
var ROUTE_MOVE_LEFT         :number;
var ROUTE_MOVE_RIGHT        :number;
var ROUTE_MOVE_UP           :number;
var ROUTE_MOVE_LOWER_L      :number;
var ROUTE_MOVE_LOWER_R      :number;
var ROUTE_MOVE_UPPER_L      :number;
var ROUTE_MOVE_UPPER_R      :number;
var ROUTE_MOVE_RANDOM       :number;
var ROUTE_MOVE_TOWARD       :number;
var ROUTE_MOVE_AWAY         :number;
var ROUTE_MOVE_FORWARD      :number;
var ROUTE_MOVE_BACKWARD     :number;
var ROUTE_JUMP              :number;
var ROUTE_WAIT              :number;
var ROUTE_TURN_DOWN         :number;
var ROUTE_TURN_LEFT         :number;
var ROUTE_TURN_RIGHT        :number;
var ROUTE_TURN_UP           :number;
var ROUTE_TURN_90D_R        :number;
var ROUTE_TURN_90D_L        :number;
var ROUTE_TURN_180D         :number;
var ROUTE_TURN_90D_R_L      :number;
var ROUTE_TURN_RANDOM       :number;
var ROUTE_TURN_TOWARD       :number;
var ROUTE_TURN_AWAY         :number;
var ROUTE_SWITCH_ON         :number;
var ROUTE_SWITCH_OFF        :number;
var ROUTE_CHANGE_SPEED      :number;
var ROUTE_CHANGE_FREQ       :number;
var ROUTE_WALK_ANIME_ON     :number;
var ROUTE_WALK_ANIME_OFF    :number;
var ROUTE_STEP_ANIME_ON     :number;
var ROUTE_STEP_ANIME_OFF    :number;
var ROUTE_DIR_FIX_ON        :number;
var ROUTE_DIR_FIX_OFF       :number;
var ROUTE_THROUGH_ON        :number;
var ROUTE_THROUGH_OFF       :number;
var ROUTE_TRANSPARENT_ON    :number;
var ROUTE_TRANSPARENT_OFF   :number;
var ROUTE_CHANGE_IMAGE      :number;
var ROUTE_CHANGE_OPACITY    :number;
var ROUTE_CHANGE_BLEND_MODE :number;
var ROUTE_PLAY_SE           :number;
var ROUTE_SCRIPT            :number;
}
/**
The superclass of Game_Character. It handles basic information, such as coordinates and images, shared by all characters. */
declare class Game_CharacterBase{
	x:number;
	y:number;

	
	initMembers();
	
	pos(x:number, y:number):boolean;
	
	posNt(x:number, y:number):boolean;
	
	moveSpeed():number;
	
	setMoveSpeed(moveSpeed:number);
	
	moveFrequency():number;
	
	setMoveFrequency(moveFrequency:number);
	
	opacity():number;
	
	setOpacity(opacity:number);
	
	blendMode():number;
	
	setBlendMode(blendMode:number);
	
	isNormalPriority():boolean;
	
	setPriorityType(porityType:number);
	
	isMoving():boolean;
	
	isJumping():boolean;
	
	jumpHeight():number;
	
	isStopping():boolean;
	
	checkStop(threshold:number):boolean;
	
	resetStopCount();
	
	realMoveSpeed():number;
	
	distancePerFrame():number;
	
	isDashing():boolean;
	
	isDebugThrough():boolean;
	
	straighten();
	
	reverseDir(d:number);
	
	canPass(x:number, y:number, d:number):boolean;
	
	canPassDiagonally(x:number, y:number, horz:number, vert:number):boolean;
	
	isMapPassable(x:number, y:number, d:number):boolean;
	
	isCollidedWithCharacters(x:number, y:number):boolean;
	
	isCollidedWithEvents(x:number, y:number):boolean;
	
	isCollidedWithVehicles(x:number, y:number):boolean;
	
	setPosition(x:number, y:number);
	
	copyPosition(character:Game_CharacterBase);
	
	/**set position to (x, y) */
	locate(x:number, y:number);
	
	direction():number;
	
	setDirection(d:number);
	
	isTile():boolean;
	
	isObjectCharacter():boolean;
	
	shiftY():number;
	
	scrolledX():number;
	
	scrolledY():number;
	
	screenX():number;
	
	screenY():number;
	
	screenZ():number;
	
	isNearTheScreen():boolean;
	
	update();
	
	updateStop();
	
	updateJump();
	
	updateMove();
	
	updateAnimation();
	
	animationWait();
	
	updateAnimationCount();
	
	updatePattern();
	
	maxPattern():number;
	
	pattern():number;
	
	setPattern(patter:number);
	
	/**is it 1 */
	isOriginalPattern():number;
	
	/**reset to 1 */
	resetPattern();
	
	refreshBushDepth();
	
	isOnLadder();
	
	isOnBush();
	
	terrainTag():number;
	
	regionId():number;
	
	increaseSteps();
	
	tileId():number;
	
	characterName():string;
	
	characterIndex():number;
	
	setImage(characterName:string, characterIndex:number);
	
	setTileImage(tileId:number);
	
	checkEventTriggerTouchFront(d:number);
	
	checkEventTriggerTouch(x:number, y:number);
	
	isMovementSucceeded(x:number, y:number);
	
	setMovementSuccess(success:boolean);
	
	moveStraight(d:number);
	
	moveDiagonally(horz:number, vert:number);
	
	jump(xPlus:number, yPlus:number);
	
	hasWalkAnime():boolean;
	
	setWalkAnime(walkAnime:boolean);
	
	hasStepAnime():boolean;
	
	setStepAnime(stepAnime:boolean);
	
	isDirectionFixed():boolean;
	
	setDirectionFix(directionFix:boolean);
	
	isThrough():boolean;
	
	setThrough(through:boolean);
	
	isTransparent():boolean;
	
	bushDepth():number;
	
	setTransparent(transparent:boolean);
	
	requestAnimation(animationId:number);
	
	requestBalloon(balloonId:number);
	
	animationId():number;
	
	balloonId():number;
	
	startAnimation();
	
	startBalloon();
	
	isAnimationPlaying():boolean;
	
	isBalloonPlaying():boolean;
	
	endAnimation();
	
	endBalloon();
}
/**
 *  The game object class for a common event. It contains functionality for running parallel process events.
 */
declare class Game_CommonEvent{
	constructor(commonEventId:number);
	initialize(commonEventId:number);
	
	event():$CommonEvent;
	
	list():Array<$EventCommand>;
	
	refresh();
	
	isActive():boolean;
	
	update():boolean;
}
/**The game object class for an enemy. */
declare class Game_Enemy extends Game_Battler{
	setup();
	
	/** always be ture */
	isEnemy():boolean;
	
	/** same with $gameTroop */
	friendsUnit():Game_Troop;
	
	/** same with $gameParty */
	opponentsUnit():Game_Party;
	
	/**index in the troop */
	index():number;
	
	isBattleMember():boolean;
	
	enemyId():number;
	
	enemy():$Enemy;
	
	paramBase(paramID:number):any;
	
	exp():number;
	
	gold():number;
	
	makeDropItems():Array<$EnemyDropItem>;
	
	dropItemRate():number;
	
	/** 得到对应物品
	 * @param {number} kind 1=道具，2= 武器， 3=护甲
	 * @param {number} dataId 物品对应id
	 * */
	itemObject(kind:number, dataId:number);
	
	/** fixed to true now */
	isSpriteVisible():boolean;
	
	screenX():number;
	
	screenY():number;
	
	battlerName():string;
	
	battlerHue():number;
	
	originalName():string;
	
	name():string;
	
	isLetterEmpty():boolean;
	
	setLetter(letter:string);
	
	setPlural(plural:boolean);
	
	transform(enemyId:number);
	
	meetsCondition(action:$EnemyAction);
	
	meetsTurnCondition(param1:number, param2:number):boolean;
	
	meetsHpCondition(param1:number, param2:number):boolean;
	
	meetsMpCondition(param1:number, param2:number):boolean;
	
	meetsStateCondition(param:number):boolean;
	
	meetsPartyLevelCondition(param:number):boolean;
	
	meetsSwitchCondition(param:number):boolean;
	
	isActionValid(action:$EnemyAction):boolean;
	
	selectAction(actionList:Array<$EnemyAction>, ratingZero:number);
	
	selectAllActions(actionList:Array<$EnemyAction>);
	
	makeActions();
}
/** The game object class for an event. It contains functionality for event page
 switching and running parallel process events. */
declare class Game_Event extends Game_Character{
	
	constructor(mapId:number, eventId:number);
	
	initialize(mapId:number, eventId:number);
	
	eventId():number;
	
	event():$Event;
	
	page():$EventPage;
	
	/** event page list */
	list():Array<$EventPage>;
	
	isCollidedWithEvents():boolean;
	
	isCollidedWithPlayerCharacters():boolean;
	
	lock();
	
	unlock();
	
	updateSelfMovement();
	
	stopCountThreshold():number;
	
	moveTypeRandom();
	
	moveTypeTowardPlayer();
	
	isNearThePlayer():boolean;
	
	moveTypeCustom();
	
	isStarting():boolean;
	
	clearStartingFlag();
	
	isTriggerIn(trigger:Array<number>);
	
	start();
	
	erase();
	
	refresh();
	
	findProperPageIndex():number;
	
	meetsConditions(page:$EventPage):boolean;
	
	setupPage();
	
}
/**The game object class for a follower. A follower is an allied character,
 other than the front character, displayed in the party. */
declare class Game_Follower{
	
	constructor(memberIndex:number);
	
	initialize(memberIndex:number);
	
	refresh();
	
	actor():Game_Actor;
	
	isVisible():boolean;
	
	chaseCharacter(character:Game_CharacterBase);
	
}
/**The wrapper class for a follower array. */
declare class Game_Followers{
	initialize();
	
	isVisible():boolean;
	
	show():boolean;
	
	hide():boolean;
	
	follower(index:number):Game_Follower;
	
	forEach(callback:Function, thisObject:Object);
	
	reverseEach(callback:Function, thisObject:Object);
	
	refresh();
	
	update();
}
/** The interpreter for running event commands. */
declare class Game_Interpreter{
	
	constructor(depth:number);
	
	initialize(depth:number);
	
	checkOverflow();
	
	clear();
	
	setup();
	
	eventId():number;
	
	isOnCurrentMap():boolean;
	
	setupReservedCommonEvent():boolean;
	
	isRunning():boolean;
	
	update();
	
	updateChild():boolean;
	
	updateWait():boolean;
	
	updateWaitCount():boolean;
	
	updateWaitMode():boolean;
	
	/**@param {string} waitMode can be one of ['', message,transfer , scroll, route, animation, balloon, gather,action, video, image */
	setWaitMode(waitMode:string);
	
	wait(duration:number);
	
	/**fixed to 24 */
	fadeSpeed():number;
	
	executeCommand():boolean;
	
	checkFreeze():boolean;
	
	terminate();
	
	skipBranch();
	
	currentCommand():$EventCommand;
	
	nextEventCode():number;
	
	/**@param {number} param 0: means to invode the callback on all members in $gameParty, >0: means invove the callback on that actor */
	iterateActorId(param:number, callback:Function);
	
	/**@param {number} param1 the type of this call, 0: means call iterateActorId, then use params2 and callback as parameter, >0: means using $gameVariables(param2) and callback as parameter to call iterateActorId*/
	iterateActorEx(param1:number, param2:number, callback:Function);
	
	iterateActorIndex(param:number, callback:Function);
	
	iterateEnemyIndex(param:number, callback:Function);
	
	iterateBattler(param1:number, param2:number, callback:Function);
	
	character(param:number):Game_CharacterBase;
	
	operateValue(operation:number, operandType:number, operand:number):number;
	
	changeHp(target:Game_BattlerBase, value:number, allowDeath:boolean);
	
	/**@return .webm/.mp4 */
	videoFileExt():string;
	
	// TODO: lots of command not included
	
}
/** The game object class for handling skills, items, weapons, and armor. It is
 required because save data should not include the database object itself. */
declare class Game_Item{
	constructor(item:any)
	
	initialize(item:any);
	
	/**是技能 */
	isSkill():boolean;
	
	isItem():boolean;
	
	/** 技能（skill）或者物品（item） */
	isUsableItem():boolean;
	
	isWeapon():boolean;
	
	isArmor():boolean;
	
	/**武器（weapon）或护甲（Armor） */
	isEquipItem():boolean;
	
	/**类型为空 */
	isNull():boolean;
	
	itemId():number;
	
	/**根据类型返回不同的对象 */
	object():any;
	
	setObject(item:any);
	
	setEquip(isWeapon:boolean, itemId:number)
}
/**The game object class for a map. It contains scrolling and passage
determination functions. */
declare class Game_Map{
	initialize();
	
	setup(mapId:number);
	
	isEventRunning():boolean;
	
	/**fixed to 48 now */
	tileWidth():number;
	
	/** fixed to 48 now */
	tileHeight():number;
	
	mapId():number;
	
	tilesetId():number;
	
	displayX():number;
	
	displayY():number;
	
	parallaxName():string;
	
	battleback1Name():string;
	
	
	battleback2Name():string;
	
	requestRefresh(mapId:number);
	
	isNameDisplayEnabled():boolean;
	
	disableNameDisplay();
	
	enableNameDisplay();
	
	createVehicles();
	
	refereshVehicles();
	
	vehicles():Array<Game_Vehicle>;
	
	vehicle(type:string):Game_Vehicle;
	
	boat():Game_Vehicle;
	
	ship():Game_Vehicle;
	
	airship():Game_Vehicle;
	
	setupEvents();
	
	events():Array<Game_Event>;
	
	event(eventId:number):Game_Event;
	
	eraseEvent(eventId:number);
	
	parallelCommonEvents():Array<$CommonEvent>;
	
	setupScroll();
	
	setupParallax();
	
	setupBattleback();
	
	setDisplayPos(x:number, y:number);
	
	parallaxOx():number;
	
	parallaxOy():number;
	
	tileset():$Tileset;
	
	tilesetFlags():Array<number>;
	
	displayName():string;
	
	width():number;
	
	height():number;
	
	data():Array<any>;
	
	isLoopHorizontal():boolean;
	
	isLoopVertical():boolean;
	
	isDashDisabled():boolean;
	
	encounterList()	 :Array<$MapEncounter>;
	
	encounterStep():number;
	
	isOverworld():boolean;
	
	screenTileX():number;
	
	screenTileY():number;
	
	adjustX(x:number):number;
	
	adjustY(y:number):number;
	
	roundX(x:number):number;
	
	roundY(x:number):number;
	
	xWithDirection(x:number, d:number):number;
	
	yWithDirection(y:number, d:number):number;
	
	roundXWithDirection(x:number, d:number):number;
	
	roundYWithDirection(y:number, d:number):number;
	
	deltaX(x1:number, x2:number):number;
	
	deltaY(y1:number, y2:number);
	
	distance(x1:number, y1:number, x2:number, y2:number):number;
	
	canvasToMapX(x:number):number;
	
	canvasToMapY(y:number):number;
	
	/** play bgm */
	autoplay();
	
	refreshIfNeeded();
	
	refresh();
	
	refreshTileEvents();
	
	eventsXy(x:number, y:number):Array<Game_Event>;
	
	eventsXyNt(x:number, y:number):Array<Game_Event>;
	
	tileEventsXy(x:number, y:number):Array<Game_Event>;
	
	eventIdXy(x:number, y:number):number;
	
	scrollDown();
	
	scrollLeft();
	
	scrollRight();
	
	scrollUp();
	
	isValid(x:number, y:number):boolean;
	
	checkPassage(x:number, y:number, bit:number):boolean;
	
	tileId(x:number, y:number, z:number):number;
	
	layeredTiles(x:number, y:number):Array<number>;
	
	allTiles(x:number, y:number):Array<number>;
	
	autotileType(x:number, y:number, z:number):number;
	
	isPassable(x:number, y:number , d:number):boolean;
	
	isBoatPassable(x:number, y:number):boolean;
	
	isShipPassable(x:number, y:number):boolean;
	
	isAirshipLandOk(x:number, y:number):boolean;
	
	checkLayeredTilesFlags(x:number, y:number, bit:number):boolean;
	
	isLadder(x:number, y:number):boolean;
	
	isBush(x:number, y:number):boolean;
	
	isCounter(x:number, y:number):boolean;
	
	isDamageFloor(x:number, y:number):boolean;
	
	terrainTag(x:number, y:number):number;
	
	regionId(x:number, y:number):number;
	
	/**
	 * @param {number} direction 2=down, 4=left, 6=right, 8=up
	 */
	startScroll(direction:number, distance:number, spped:number);
	
	isScrolling():boolean;
	
	update();
	
	updateScroll();
	
	scrollDistance():number;
		
	/**
	 * @param {number} direction 2=down, 4=left, 6=right, 8=up
	 */
	doScroll(direction:number, distance:number);
	
	updateEvents();
	
	updateVehicles();
	
	updateParallax();
	
	changeTileset(tilesetId:number);
	
	changeBattleback(battleback1Name:string, battleback2Name:string);
	
	changeParallax(name:string, loopX:boolean, loopY:boolean, sx:number, sy:number);
	
	updateInterpreter();
	
	unlockEvent(eventId:number);
	
	setupStartingEvent():boolean;
	
	setupTestEvent():boolean;
	
	setupStartingMapEvent():boolean;
	
	setupAutorunCommonEvent():boolean;
	
	isAnyEventStarting():boolean;
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
	
	/**是否有文字（数组） */
	hasText():boolean;
	
	/**是否有选择 */
	isChoice():boolean;
	
	isNumberInput():boolean;
	
	isItemChoice():boolean;
	
	isBusy():boolean;
	
	/**（最后一个文本追加了\f？） */
	newPage();
	
	/** 所有文本（即将文本数组使用\n拼接） */
	allText():string;
	

}
/** The game object class for the party. Information such as gold and items is
 included. */
declare class Game_Party extends Game_Unit<Game_Actor>{
	initAllItems();
	
	exists():boolean;
	
	size():number;
	
	isEmpty():boolean;
	
	allMembers():Array<Game_Actor>;
	
	/** fixed to 4 now */
	maxBattleMembers():number;
	
	leader():Game_Actor;
	
	reviveBattleMembers();
	
	items():Array<$Item>;
	
	weapons():Array<$Weapon>;
	
	armors():Array<$Armor>;
	
	equipItems():Array<Equipment>;

	allItems():Array<Usable>;
	
	/**可为防具，武器，道具 */
	itemContainer(item:any):any;
	
	setupStartingMembers();
	
	name():string;
	
	setupBattleTest();
	
	setupBattleTestMembers();
	
	setupBattleTestItems();
	
	highestLevel():number;
	
	addActor(actorId:number);
	
	removeActor(actorId:number);
	
	gold():number;
	
	gainGold(amount:number);
	
	loseGold(amount:number);
	
	/** now fixed to 99999999 */
	maxGold():number;
	
	steps():number;
	
	increaseSteps();
	
	/**可为防具，武器，道具 */
	numItems(item:any):number;
	
	/** now fixed to 99 */
	maxItems(item:any):number;
	
	hasMaxItems(item:any):boolean;
	
	hasItem(item:any, includeEquip:boolean):boolean;
	
	isAnyMemberEquipped(item:Equipment):boolean;
	
	gainItem(item:any, amout:number, includeEquip:boolean);
	
	discardMembersEquip(item:Equipment, amout:number);
	
	loseItem(item:any, amout:number, includeEquip:boolean);
	
	consumeItem(item:$Item);
	
	canUse(item:Usable):boolean;
	
	canInput():boolean;
	
	onPlayerWalk();
	
	menuActor():Game_Actor;
	
	setMenuActor(actor:Game_Actor);
	
	makeMenuActorNext();
	
	makeMenuActorPrevious();
	
	targetActor():Game_Actor;
	
	setTargetActor(actor:Game_Actor);
	
	lastItem():Game_Item;
	
	setLastItem(item:any);
	
	swapOrder(index1:number, index2:number);
	
	/**0:characterName, 1: characterIndex */
	charactersForSavefile():Array<any>;
	
	/**0:faceName, 1:faceIndex */
	facesForSavefile():Array<any>;
	
	partyAbility(abilityId:boolean):boolean;
	
	hasEncounterHalf():boolean;
	
	hasEncounterNone():boolean;
	
	hasCancelSurprise():boolean;
	
	hasRaisePreemptive():boolean;
	
	hasGoldDouble():boolean;
	
	hasDropItemDouble():boolean;
	
	ratePreemptive(troopAgi:number):number;
	
	rateSurprise(troopAgi:number):number;
	
	performVictory();
	
	performEscape();
	
	removeBattleStates();
	
	requestMotionRefresh();
}


declare module Game_Party{
var ABILITY_ENCOUNTER_HALF    :number;
var ABILITY_ENCOUNTER_NONE   :number;
var ABILITY_CANCEL_SURPRISE   :number;
var ABILITY_RAISE_PREEMPTIVE :number;
var ABILITY_GOLD_DOUBLE       :number;
var ABILITY_DROP_ITEM_DOUBLE  :number;
}
/**The game object class for a picture. */
declare class Game_Picture{
	initialize();
	
	name():string;
	
	origin():number;
	
	x():number;
	
	y():number;
	
	scaleX():number;
	
	scaleY():number;
	
	opacity():number;
	
	blendMode():number;
	
	tone:Array<number>;
	
	angle:number;
	
	initBasic();
	
	initTarget();
	
	initTone();
	
	initRotation();
	
	show(name:string, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number);
	
	move(origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number, duration:number);
	
	rotate(speed:number);
	
	tint(tone:Array<number>, duration:number);
	
	erase();
	
	update();
	
	updateMove();
	
	updateTone();
	
	updateRotation();
}
/** The game object class for the player. It contains event starting
 determinants and map scrolling functions. */
declare class Game_Player extends Game_Character{
	
	clearTransferInfo();
	
	followers():Game_Followers;
	
	refresh();
	
	reserveTransfer(mapId:number, x:number, y:number, d:number, fadeType:number);
	
	requestMapReload();
	
	isTransferring():boolean;
	
	newMapId():number;
	
	fadeType():number;
	
	performTransfer();
	
	vehicle():Game_Vehicle;
	
	isInBoat():boolean;
	
	isInShip():boolean;
	
	isInAirship():boolean;
	
	isInVehicle():boolean;
	
	/** wali and is not forced to move */
	isNormal():boolean;
	
	isDashing():boolean;
	
	isDebugThrough():boolean;
	
	isCollided(x:number, y:number):boolean;
	
	centerX():number;
	
	centerY():number;
	
	center(x:number, y:number):number;
	
	locate(x:number, y:number);
	
	makeEncounterCount();
	
	makeEncounterTroopId():number;
	
	meetsEncounterConditions(encounter:$MapEncounter):boolean;
	
	executeEncounter():boolean;
	
	startMapEvent(x:number, y:number, triggers:Array<number>, normal:boolean);
	
	moveByInput();
	
	canMove():boolean;
	
	getInputDirection():number;
	
	executeMove(direction:number);
	
	updateDashing();
	
	/**shift pressed */
	isDashButtonPressed():boolean;
	
	updateScroll(lastScrolledX:number, lastScrolledY:number);
	
	updateVehicle();
	
	updateVehicleGetOn();
	
	updateVehicleGetOff();
	
	updateNonmoving(wasMoving:boolean);
	
	triggerAction():boolean;
	
	triggerButtonAction():boolean;
	
	triggerTouchAction():boolean;
	
	triggerTouchActionD1(x1:number, y1:number):boolean;
	
	triggerTouchActionD2(x2:number, y2:number):boolean;
	
	triggerTouchActionD3(x2:number, y2:number):boolean;
	
	updateEncounterCount();
	
	canEncounter():boolean;
	
	encounterProgressValue():number;
	
	checkEventTriggerHere(triggers:Array<number>);
	
	checkEventTriggerThere(triggers:Array<number>);
	
	checkEventTriggerTouch(x:number, y:number);
	
	canStartLocalEvents():boolean;
	
	getOnOffVehicle():boolean;
	
	getOnVehicle():boolean;
	
	getOffVehicle():boolean;
	
	forceMoveForward();
	
	isOnDamageFloor():boolean;
	
	showFollowers();
	
	hideFollowers();
	
	gatherFollowers();
	
	areFollowersGathering():boolean;
	
	areFollowersGathered():boolean;
	
}
/**
The game object class for screen effect data, such as changes in color tone
and flashes. */
declare class Game_Screen{
	initialize();
	clear();
	
	/** 内部各种清除 */
	onBattleStart();
	
	/** @return 0-255 */
	brightness():number;;
	
	/** @return [r,g,b,a] */
	tone():Array<number>;
	
	/** @return [r,g,b,a] */
	flashColor():Array<number>
	
	shake():number;
	
	zoomX():number;
	
	zoomY():number;
	
	zoomScale():number;
	
	weatherType():string;
	
	weatherPower():number;
	

	picture(pictureId:number):Game_Picture;
	
	realPictureId(pictureId:number):number;
	
	clearFade();
	
	clearTone();
	
	clearFlash();
	
	clearShake();
	
	clearZoom();
	
	clearWeather();
	
	clearPictures();
	
	eraseBattlePictures();
	
	/**目前固定返回100 */
	maxPictures():number;
	
	startFadeOut(duration:number);
	
	startFadeIn(duration:number);
	
	startTint(tone:Array<number>,duration:number);
	
	startFlash(color:Array<number>, duration:number);
	
	startShake(power:number, speed:number, duration:number);
	
	startZoom(x:number, y:number, scale:number, duration:number);
	
	setZoom(x:number, y:number, scale:number);
	
	changeWeather(type:string, power:number, duration:number);
	
	/** 内部调用各种update方法 */
	update();
	
	updateFadeOut();
	updateFadeIn();
	updateTone();
	updateFlash();
	updateShake();
	updateZoom();
	updateWeather();
	updatePictures();
	
	
	startFlashForDamage();
	
	showPicture(pictureId:number, name:string, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number);
	
	movePicture(pictureId:number, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number, duration:number);
	
	rotatePicture(pictureId:number, speed:number);
	
	tintPicture(pictureId:number, tone:Array<number>, duration:number);
	
	erasePicture(pictureId:number);
}
/**The game object class for self switches. */
declare class Game_SelfSwitches{
	initialize();
	
	clear();
	
	/**TODO: type? */
	value(key:any):any;
	
	setValue(key:any, value:any);
	
	onChange();
}
/**The game object class for switches. */
declare class Game_Switches{
	initialize();
	
	clear();
	
	/**TODO: type correct? */
	value():string;
	
	setValue(switchid:number, value:string);
	
	/**（内部调用了$gameMap.requestRefresh） */
	onChange();
	
}
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
/**The game object class for a troop and the battle-related data. */
declare class Game_Troop extends Game_Unit<Game_Enemy>{
	
	static LETTER_TABLE_HALF:Array<string>;
 	static LETTER_TABLE_FULL :Array<string>;
	 
	isEventRunning();
	
	updateInterpreter();
	
	turnCount():number;
	
	clear();
	
	troop():$Troop;
	
	setup(troopId:number);
	
	makeUniqueNames();
	
	letterTable():Array<string>;
	
	enemyNames():Array<string>;
	
	meetsConditions(page:$EventPage):boolean;
	
	setupBattleEvent();
	
	increaseTurn();
	
	expTotal():number;
	
	goldTotal():number;
	
	goldRate():number;
	
	makeDropItems():Array<$EnemyDropItem>;
}



/**The superclass of Game_Party and Game_Troop. */
declare class Game_Unit<T>{
	initialize();
	
	inBattle():boolean;
	
	members():Array<T>;
	
	aliveMembers():Array<T>;
	
	deadMembers():Array<T>;
	
	movableMembers():Array<T>;
	
	clearActions();
	
	agility():number;
	
	tgrSum():number;
	
	randomTarget():T;
	
	randomDeadTarget():T;
	
	smoothTarget(index:number):T;
	
	smoothDeadTarget(index:number):T;
	
	clearResults();
	
	onBattleStart();
	
	onBattleEnd();
	
	makeActions();
	
	select(activeMember:T);
	
	isAllDead():boolean;
	
	substituteBattler():T;
}
/**The game object class for variables.
 */
declare class Game_Variables{
	initialize();
	
	clear();
	
	value(variableId:number):number;
	
	setValue(variableId:number, value:number);
	
	onChange();
}
/** The game object class for a vehicle. */
declare class Game_Vehicle extends Game_Character{
	
	constructor(type:string);
	
	initialize(type:string);
	
	isBoat():boolean;
	
	isShip():boolean;
	
	isAirship():boolean;
	
	resetDirection();
	
	initMoveSpeed();
	
	vehicle():$SystemVehicle;
	
	loadSystemSettings();
	
	refresh();
	
	setLocation(mapId:number, x:number, y:number);
	
	isMapPassable(x:number, y:number, d:number):boolean;
	
	getOn();
	
	getOff();
	
	setBgm(bgm:$AudioFile);
	
	playBgm();
	
	syncWithPlayer();
	
	shadowX();
	
	shadowY();
	
	shadowOpacity():number;
	
	canMove():boolean;
	
	updateAirship();
	
	updateAirshipAltitude();
	
	maxAltitude():number;
	
	isLowest():number;
	
	isHighest():number;
	
	isTakeoffOk():boolean;
	
	isLandOk():boolean;
	
}
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