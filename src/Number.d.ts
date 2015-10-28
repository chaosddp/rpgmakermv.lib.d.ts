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