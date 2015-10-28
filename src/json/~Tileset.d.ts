/**储存图块组数据的JSON。 */
declare class $Tileset{
	/**图块组标志。 */
	flags:Array<number>;
	
	/**图块组ID。 */
	id:number;
	
	/**图块组模式。 */
	mode:number;
	
	/**图块组名称。 */
	name:string;
	
	/**图块组备注。 */
	note:string;
	
	/** 图块图片的文件名。*/
	tilesetNames:Array<string>;
	
}