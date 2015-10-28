/**敌人数据的JSON类。 */
declare class $Enemy {
	/** 由 行动模式 数据组成的数组。*/
	actions :Array<$EnemyAction>;
	
	/**敌人战斗图的色调调整。 */
	battlerHue :number;
	
	/**敌人战斗图的文件名。 */
	battlerName :string;
	
	/**由 掉落物品 数据组成的数组 */
	dropItems :Array<$EnemyDropItem>;
	
	/**经验值。 */
	exp:number;
	
	/**金钱。 */
	gold:number;
	
	/**敌人ID。 */
	id:number;
	
	/**敌人名称。 */
	name:string;
	
	/**备注。 */
	note: string;
	
	/**敌人的能力值。 (TODO: type?) */
	params:Array<any>;
	
	/**由 特性 数据组成的数组。 */
	traits :Array<$Trait>;
}