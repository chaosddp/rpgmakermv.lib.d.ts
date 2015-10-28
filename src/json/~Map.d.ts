/**地图数据的JSON。 */
declare class $Map {
	/**是否自动播放BGM。 */
	autoplayBgm :boolean;
	
	/**是否自动播放BGS。 */
	autoplayBgs :boolean;
	
	/**战斗背景下层图片的文件名。 */
	battleback1Name :string;
	
	/**战斗背景上层图片的文件名。 */
	battleback2Name :string;
	
	/**地图的BGM。 */
	bgm :$AudioFile;
	
	/**地图的BGS。 */
	bgs :$AudioFile;
	
	/**地图数据的三维数组。 (TODO: type?)*/
	data :Array<any>;
	
	/**是否允许跑步。 */
	disableDashing : boolean;
	
	/**地图显示名称。 */
	displayName :string;
	
	/**由 地图遇敌 数据组成的数组。 */
	encounterList :Array<$MapEncounter>;
	
	/**遇敌平均步数。 */
	encounterStep :number;
	
	/**由 事件 数据组成的数组。 */
	events :Array<$Event>
	
	/**地图高度。 */
	height:number;
	
	/**地图备注。 */
	note:string;
	
	/**是否开启远景图横向循环。 */
	parallaxLoopX :boolean;
	
	/**是否开启远景图纵向循环。 */
	parallaxLoopY :boolean;
	
	/**远景图的文件名。 */
	parallaxName :string;
	
	/**远景图是否在编辑器中显示。 */
	parallaxShow :boolean;
	
	/**远景图的水平滚动速度。 */
	parallaxSx :number;
	
	/**远景图的垂直滚动速度。 */
	parallaxSy :number;
	
	/**地图循环方式。 */
	scrollType :number;
	
	/**是否使用战斗背景图像。 */
	specifyBattleback :boolean;
	
	/**地图使用的图块组 ID。 */
	tilesetId:number;
	
	/**地图的宽度 */
	width:number;
	
}