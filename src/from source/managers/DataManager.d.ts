
/**The static class that manages the database and game objects. */
declare module DataManager{
	/**TODO：待验证：尝试添加额外的json文件，有默认实现解析，直接用name访问 */
	var _databaseFiles:Array<DatabaseFileConfigItem>;
	
	/**读取_databaseFiles定义的文件并解析 */
	function loadDatabase();
	
	/**
	 * 加载指定文件，并在window对象上添加对应的属性名
	 * 
	 * @param {string} name 附加到window对象时对应的属性名
	 * @param {string} src json 文件名
	 */
	function loadDataFile(name:string, src:string);
	
	function isDatabaseLoaded():boolean;
	
	function loadMapData(mapId:number);
	
	function makeEmptyMap();
	
	function isMapLoaded():boolean;
	
	/**主要用于解析对象上的元数据（metadata） */
	function onLoad(object:any);
	
	/**
	 * @param {any} data 任何有note属性的对象
	 */
	function extractMetadata(data:any);
	
	function checkError();
	
	function isBattleTest():boolean;
	
	function isEventTest():boolean;
	
	function isSkill(item:any):boolean;
	
	function isItem(item:any):boolean;
	
	function isWeapon(item:any):boolean;
	
	function isArmor(item:any):boolean;
	
	/**初始化一些全局变量 */
	function createGameObjects();
	
	function setupNewGame();
	
	function setupBattleTest();
	
	function setupEventTest();
	
	function loadGlobalInfo():Array<SaveFileInfo>;
	
	function saveGlobalInfo(info:SaveFileInfo);
	
	/**当前文件是否是当前游戏的（存档） */
	function isThisGameFile(saveFileId:number):boolean;
	
	function isAnySavefileExists():boolean;
	
	function latestSavefileId():number;
	
	function loadAllSavefileImages();
	
	function loadSavefileImages(info:SaveFileInfo);
	
	/**最大存档文件个数，固定20 */
	function maxSavefiles():number;
	
	function saveGame(saveFileId:number):boolean;
	
	function loadGame(saveFileId:number):boolean;
	
	function loadSavefileInfo(saveFileId:number):SaveFileInfo;
	
	function lastAccessedSavefileId():number;
	
	function saveGameWithoutRescue(saveFileId:number):boolean;
	
	function loadGameWithoutRescue(saeFileId:number):boolean;
	
	function selectSavefileForNewGame();
	
	/**生成存档时的文件信息 */
	function makeSavefileInfo():SaveFileInfo;
	
	/**生成存档内容 */
	function makeSaveContents():SaveContent;
	
	/** 从存档恢复 */
	function extractSaveContents(content:SaveContent);
}

declare class DatabaseFileConfigItem
{
	/**解析后的json对象被附加在window上的名称，解析成功后即可直接用这个名字调用对象 */
	name:string;
	
	/**json文件名 */
	src:string;
}

declare class SaveFileInfo{
	globalId:number;
	title:string;
	characters:Array<any>;
	faces:Array<any>;
	playtime:string;
	timestamp:Date;
}

declare class SaveContent{
	system:Game_System;
	screen:Game_Screen;
	timer:Game_Timer;
	switches:Game_Switches;
	variables:Game_Variables;
	selfSwitches:Game_SelfSwitches;
	actors:Game_Actors;
	party:Game_Party;
	map:Game_Map;
	player:Game_Player;
}