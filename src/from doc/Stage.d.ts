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