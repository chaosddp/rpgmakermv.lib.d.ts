/**角色数据的JSON。 */
declare class $Actor{
	/** 横版战斗的战斗图文件名。*/
	battlerName :string;
	
	/**角色的行走图索引。 */
	characterIndex :number;
	
	/**角色的行走图（文件名）。 */
	characterName :string;
	
	/**职业ID。 */
	classId :number;
	
	/**初始装备。(TODO: type?) */
	equips:Array<any>;
	
	/**脸图的索引。 */
	faceIndex :number;
	
	/**脸图的文件名。 */
	faceName :string;
	
	/**角色ID。 */
	id:number;
	
	/**初始等级。 */
	initialLevel :number;
	
	/**最大等级。 */
	maxLevel :number;
	
	/**角色名称。 */
	name:string;
	
	/**角色称号。(昵称？) */
	nickname :string;
	
	/**备注。 */
	note:string;
	
	/**人物简介 */
	profile :string;
	
	/**由 "特性" 数据组成的数组。 */
	traits:Array<$Trait>;
}