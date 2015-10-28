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
