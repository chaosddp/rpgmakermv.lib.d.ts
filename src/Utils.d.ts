
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