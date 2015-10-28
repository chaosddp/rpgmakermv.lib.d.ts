/**敌方队伍的 JSON 数据结构。 */
declare class $Troop{
	/**敌方队伍 ID。 */
	id:number;
	
	/**成员数据的数组。 */
	members:Array<$TroopMember>;
	
	/**名字。 */
	name:string;
	
	/**战斗事件（页）数据的数组. */
	pages:Array<$BattleEventPage>;
}