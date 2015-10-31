/** 护甲和武器的基类 */
declare interface Equipment{
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