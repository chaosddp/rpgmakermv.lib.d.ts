/**地图信息数据的JSON。 */
declare class $MapInfo {
	/**地图树状显示已展开的标记。 */
	expanded :boolean;
	
	/**地图名称。 */
	name:string;
	
	/**地图树状显示的顺序。 */
	order :number;
	
	/**父地图编号。 */
	parentId :number;
	
	/**编辑器内部使用，横向滚动的位置。 */
	scrollX :number;
	
	/**编辑器内部使用，纵向滚动的位置。 */
	scrollY :number;
}