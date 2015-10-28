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