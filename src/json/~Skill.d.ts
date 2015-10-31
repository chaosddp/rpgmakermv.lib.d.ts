/**技能数据的JSON。 */
declare class $Skill extends Usable{
	
	/**使用时显示信息的第一行。 */
	message1 :string;
	
	/**使用时显示信息的第二行。 */
	message2 :string;
	
	/**MP消耗量。 */
	mpCost :number;
	
	/**武器限制1 */
	requiredWtypeId1 :number;
	
	/**武器限制2。 */
	requiredWtypeId2 :number;
	
	/**技能类型ID。 */
	stypeId :number;
	
	/**TP消耗量。 */
	tpCost :number;
}