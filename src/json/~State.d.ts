/**状态数据的JSON。 */
declare class $State{
	/**自动解除的时机。 */
	autoRemovalTiming :number;
	
	/**受到伤害时解除的概率。 */
	chanceByDamageNumber:number;
	
	/**图标编号。 */
	iconIndex :number;
	
	/**状态ID。 */
	id:number;
	
	/**状态持续回合数的最大值。 */
	maxTurns :number;
	
	/**状态附加队友时的提示信息。 */
	message1 :string;
	
	/**状态附加敌人时的提示信息。 */
	message2 :string;
	
	/**状态持续时的提示信息。 */
	message3  :string;
	
	/**状态解除时的提示信息。 */
	message4 :string;
	
	/**状态持续回合数的最小值。 */
	minTurns :number;
	
	/**横版战斗时该状态的动作。 */
	motion:number;
	
	/**状态名称。 */
	name:string;
	
	/**备注。 */
	note:string;
	
	/**横版状态时状态显示的图片。 */
	overlay :number;
	
	/**显示优先级 */
	priority :number;
	
	/**战斗结束后是否解除状态。 */
	removeAtBattleEnd :boolean;
	
	/**受到伤害时是否解除状态。 */
	removeByDamage :boolean;
	
	/**获得其他限制性状态时是否解除状态。(抗性?) */
	removeByRestriction :boolean;
	
	/**一定步数后是否解除状态。 */
	removeByWalking :boolean;
	
	/**状态限制。 */
	restriction :number;
	
	/**解除状态所需的步数。 */
	stepsToRemove :number;
	
	/**由 特性 数据组成的数组 */
	traits :Array<$Trait>;
}