/**储存交通工具数据的JSON。 */
declare class $SystemVehicle{
	/**交通工具的BGM。 */
	bgm:$AudioFile;
	
	/**行走图的编号。 */
	characterIndex:number;
	
	/**行走图的文件名。 */
	characterName:string;
	
	/**起始位置的地图ID。 */
	startMapId:number;
	
	/**起始位置的地图X坐标。 */
	startX:number;
	
	/**起始位置的地图Y坐标。 */
	startY:number;
	
}