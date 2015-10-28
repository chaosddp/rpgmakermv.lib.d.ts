/**物品数据的JSON。 */
declare class $Item {
	/**使用动画的ID。 */
	animationId :number;
	
	/**是否为消耗品。 */
	consumable :boolean;
	
	/**伤害。 */
	damage :$Damage;
	
	/**物品描述。 */
	description :string;
	
	/**由 使用效果 数据组成的数组。 */
	effects :Array<$Effect>;
	
	/**命中类型。 */
	hitType :number;
	
	/**物品图标的索引。 */
	iconIndex :number;
	
	/**物品ID。 */
	id:number;
	
	/**物品类型ID。 */
	itypeId :number;
	
	/**物品名称。 */
	name:string;
	
	/**备注。 */
	note:string;
	
	/**使用场合。(战斗和地图？) */
	occasion :number;
	
	/**物品价格。 */
	price:number;
	
	/**连续次数。 */
	repeats :number;
	
	/**效果范围。 */
	scope:number;
	
	/**速度修正。 */
	speed:number;
	
	/**成功机率。 */
	successRate :number;
	
	/**TP获取量。 */
	tpGain :number;
	
}