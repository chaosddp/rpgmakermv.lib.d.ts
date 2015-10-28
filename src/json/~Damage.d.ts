/**伤害数据的JSON。 */
declare class $Damage {
	/**是否允许必杀。 */
	critical :boolean;
	
	/**属性编号。 */
	elementId :number;
	
	/**伤害公式。 */
	formula : string;
	
	/**伤害类型。 */
	type:number;
	
	/**伤害离散度。 */
	variance :number;
}