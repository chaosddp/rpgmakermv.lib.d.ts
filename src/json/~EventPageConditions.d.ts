/**事件出现条件数据的JSON。 */
declare class $EventPageConditions{
	/**角色ID。 */
	actorId :number;
	
	/**是否勾选指定角色在队伍中选项。 */
	actorValid :boolean;
	
	/**物品ID。 */
	itemId :number;
	
	/**是否勾选拥有指定物品选项。 */
	itemValid :boolean;
	
	/**独立开关名称。 */
	selfSwitchCh :string;
	
	/**是否勾选独立开关开启选项。 */
	selfSwitchValid :boolean;
	
	/**第一个开关ID */
	switch1Id :number;
	
	/**是否勾选第一个开关打开选项。 */
	switch1Valid :boolean;
	
	/**第二个开关ID。 */
	switch2Id :number;
	
	/**是否勾选第二个开关打开选项。 */
	switch2Valid :boolean;
	
	/**变量ID。 */
	variableId :number;
	
	/**是否勾选变量大于选项。 */
	variableValid :boolean;
	
	/**变量的值。 */
	variableValue :number;
}