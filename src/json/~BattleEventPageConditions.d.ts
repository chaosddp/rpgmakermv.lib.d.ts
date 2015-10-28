/**战斗事件触发条件数据的JSON。 */
declare class $BattleEventPageConditions{
	/**指定角色的HP百分比。 */
	actorHp :number;
	
	/**指定角色的ID。 */
	actorId :number;
	
	/**是否勾选指定角色HP选项。 */
	actorValid :boolean;
	
	/**指定敌人的HP百分比 */
	enemyHp : number;
	
	/**指定敌人的索引。 */
	enemyIndex :number;
	
	/**是否勾选指定敌人HP选项。 */
	enemyValid :boolean;
	
	/**开关ID。 */
	switchId :number;
	
	/**是否勾选指定开关选项 */
	switchValid:boolean;
	
	/**指定回合数的数值A。 */
	turnA :number;
	
	/**指定回合数的数值B。 */
	turnB :number;
	
	/**是否勾选回合结束时选项。 */
	turnEnding :boolean;
	
	/**是否勾选指定回合数选项。 */
	turnValid :boolean;
}