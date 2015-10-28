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