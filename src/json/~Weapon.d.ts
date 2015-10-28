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