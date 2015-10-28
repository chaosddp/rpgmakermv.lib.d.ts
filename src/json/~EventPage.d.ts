/**事件页数据的类。 */
declare class $EventPage{
	/**事件的执行条件。 */
	conditions :Array<$EventPageConditions>;
	
	/**是否固定朝向。 */
	directionFix :boolean;
	
	/**事件页的图像。 */
	image: $EventPageImage;
	
	/**由 事件指令 数据组成的数组。 */
	list:Array<$EventCommand>;
	
	/**移动频率。 */
	moveFrequency :number;
	
	/**移动路径。 */
	moveRoute :$MoveRoute;
	
	/**移动速度。 */
	moveSpeed :number;
	
	/**移动类型。 */
	moveType :number;
	
	/**优先级。 */
	priorityType :number;
	
	/**是否开启踏步动画。 */
	stepAnime :boolean;
	
	/**是否开启允许穿透。 */
	through :boolean;
	
	/**触发条件。 */
	trigger :number;
	
	/**是否开启步行动画。 */
	walkAnime :boolean;
}