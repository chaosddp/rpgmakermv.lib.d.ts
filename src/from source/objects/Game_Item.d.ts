/** The game object class for handling skills, items, weapons, and armor. It is
 required because save data should not include the database object itself. */
declare class Game_Item{
	constructor(item:any)
	
	initialize(item:any);
	
	/**是技能 */
	isSkill():boolean;
	
	isItem():boolean;
	
	/** 技能（skill）或者物品（item） */
	isUsableItem():boolean;
	
	isWeapon():boolean;
	
	isArmor():boolean;
	
	/**武器（weapon）或护甲（Armor） */
	isEquipItem():boolean;
	
	/**类型为空 */
	isNull():boolean;
	
	itemId():number;
	
	/**根据类型返回不同的对象 */
	object():any;
	
	setObject(item:any);
	
	setEquip(isWeapon:boolean, itemId:number)
}