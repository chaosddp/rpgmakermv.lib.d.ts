
/** 可使用，技能和道具的基类 */
declare interface Usable{
	/**动画的ID。 */
	animationId :number;

	/**伤害。 */
	damage :$Damage;

	/**描述。 */
	description :string;

	/**由 使用效果 数据组成的数组。 */
	effects :Array<$Effect>;

	/**命中类型。 */
	hitType :number;

	
	/**图标编号。 */
	iconIndex :number;

	/**ID。 */
	id:number;

	/**名称。 */
	name:string;

	/**备注。 */
	note:string;

	/**使用场合。(战斗和地图？) */
	occasion :number;

	/**连续次数。 */
	repeats :number;

	
	/**效果范围。 */
	scope :number;

	/**速度修正。 */
	speed:number;


	
	/**成功几率。 */
	successRate : number;

	/**TP获取量。 */
	tpGain :number;
}