
/**职业数据的JSON。 */
declare class $Class{
	/** 决定经验值曲线的数值数组。 (TODO: type correct?)*/
	expParams :Array<number>;
	
	/**职业ID。 */
	id:number;
	
	/** 由 习得技能 数据组成的数组。*/
	learnings :Array<$ClassLearning>;
	
	/**职业名称。 */
	name:string;
	
	/**备注。 */
	note: string;
	
	/**包含每一等级对应普通能力的二维数组。 (TODO: type?) */
	params:Array<any>;
	
	/**由 特性 数据组成的数组。 */
	traits :Array<$Trait>;
}