/**护甲数据的JSON。 */
declare class $Armor{
	/**护甲类型 ID。 */
	atypeId :number;
	
	/**护甲的说明。 */
	description :string;
	
	/**装备类型ID。 */
	etypeId :number;
	
	/**图标的索引。 */
	iconIndex :number;
	
	/**护甲ID。 */
	id:number;
	
	/**护甲名称。 */
	name: string;
	
	/**备注。 */
	note:string;
	
	/**能力值变化量。 (TODO: type?) */
	params: Array<any>;
	
	/**价格。 */
	price :number;
	
	/**由 特性 数据组成的数组。 */
	traits:Array<$Trait>;
}