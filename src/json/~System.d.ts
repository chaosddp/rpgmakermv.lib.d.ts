/**储存系统数据的JSON。 */
declare class $System {
	/**飞艇的设置。 */
	airship :$SystemVehicle;
	
	/**护甲种类的列表。 */
	armorTypes :Array<string>;
	
	/**由 战斗动作 数据组成的数组。 */
	attackMotions :Array<$SystemAttackMotion>;
	
	/**测试战斗模式下，战斗背景的下层图片文件名。 */
	battleback1Name:string;
	
	/**测试战斗模式下，战斗背景的上层图片文件名。 */
	battleback2Name:string;
	
	/**战斗BGM。 */
	battleBgm:$AudioFile;
	
	/**在编辑动画时设置的敌人色相的改变值。 */
	battlerHue:number;
	
	/**在编辑动画时设置的敌人战斗图的文件名。 */
	battlerName:string;
	
	/**小型船的设置。 */
	boat: $SystemVehicle;
	
	/**当前的货币单位。 */
	currencyUnit:string;
	
	/**战败时的ME。 */
	defeatMe:$AudioFile;
	
	/**当前编辑的地图ID。 */
	editMapId:number;
	
	/**属性的列表。 (Elements in database editor) */
	elements:Array<string>;
	
	/**装备类型的列表。 */
	equipTypes:Array<string>;
	
	/**Game Over 时的 ME。 */
	gameoverMe:$AudioFile;
	
	/**游戏的标题。 */
	gameTitle:string;
	
	/**描述本地环境的字符串，例如 "ja_JP" 或者 "en_US"。 */
	locale:string;
	
	/**魔法技能的技能类型ID组成的数组。 */
	magicSkills:Array<number>;
	
	/**菜单的选项。(编辑器中的6个checkbox) */
	menuCommands:Array<boolean>;
	
	/**战斗中是否显示TP的选项。 */
	optDisplayTp:boolean;
	
	/**是否描绘标题文字的选项。 */
	optDrawTitle:boolean;
	
	/**未参战人员是否获得EXP的选项。 */
	optExtraExp:boolean;
	
	/**地形伤害是否导致无法战斗的选项。 */
	optFloorDeath:boolean;
	
	/**是否显示跟随成员的选项。 */
	optFollowers:boolean;
	
	/**是否使用横版战斗模式的选项。 */
	optSideView:boolean;
	
	/**慢性伤害是否导致死亡的选项。 */
	optSlipDeath:boolean;
	
	/**开始时行走图是否透明的选项。 */
	optTransparent:boolean;
	
	/**初始队伍角色ID的数组。 */
	partyMembers:Array<number>;
	
	/**大型船的设置。 */
	ship:$SystemVehicle;
	
	/** 技能类型的列表。*/
	skillTypes:Array<string>;
	
	/**由音效文件的 声音数据 组成的数组。 */
	sounds:Array<$AudioFile>;
	
	/**初始地图的ID。 */
	startMapId:number;
	
	/**初始地图的X坐标。 */
	startX:number;
	
	/**初始地图的Y坐标。 */
	startY:number;
	
	/**开关名称的列表。 */
	switches:Array<string>;
	
	/** 游戏用语。*/
	terms:$SystemTerms;
	
	/**由 测试战斗者 数据组成的数组。 */
	testBattlers:Array<$SystemTestBattler>;
	
	/**战斗测试的敌群ID。 */
	testTroopId: number;
	
	/**标题画面的下层图片文件名。 */
	title1Name:string;
	
	/**标题画面的上层图片文件名。 */
	title2Name:string;
	
	/**标题画面的BGM。 */
	titleBgm:$AudioFile;
	
	/**变量名称的列表。 */
	variables:Array<string>;
	
	/**检查游戏是否发生更新的随机数。 */
	versionId:number;
	
	/**胜利时的ME。 */
	victoryMe:$AudioFile;
	
	/**武器类型的列表。 */
	weaponTypes:Array<string>;
	
	/**窗口的颜色。 */
	windowTone:Array<number>;
}