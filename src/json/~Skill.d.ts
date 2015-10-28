/**技能数据的JSON。 */
declare class $Skill {
	/**动画的ID。 */
	animationId :number;
	
	/**技能伤害。 */
	damage:$Damage;
	
	/**技能描述。 */
	description :string;
	
	/**由 使用效果 数据组成的数组。 */
	effects :Array<$Effect>;
	
	/**命中类型。 */
	hitType :number;
	
	/**图标编号。 */
	iconIndex :number;
	
	/**技能ID。 */
	id:number;
	
	/**使用时显示信息的第一行。 */
	message1 :string;
	
	/**使用时显示信息的第二行。 */
	message2 :string;
	
	/**MP消耗量。 */
	mpCost :number;
	
	/**技能名称。 */
	name:string;
	
	/**备注。 */
	note:string;
	
	/**使用场合。 */
	occasion :number;
	
	/**连续次数。 */
	repeats :number;
	
	/**武器限制1 */
	requiredWtypeId1 :number;
	
	/**武器限制2。 */
	requiredWtypeId2 :number;
	
	/**效果范围。 */
	scope :number;
	
	/**速度修正。 */
	speed:number;
	
	/**技能类型ID。 */
	stypeId :number;
	
	/**成功几率。 */
	successRate : number;
	
	/**TP消耗量。 */
	tpCost :number;
	
	/**TP获取量。 */
	tpGain :number;
	
}