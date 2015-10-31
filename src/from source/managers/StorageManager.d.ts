/**The static class that manages storage for saving game data. */
declare module StorageManager{
	/**保存json文件 */
	function save(saveFileId:number, json:string);
	
	function load(saveFileId:number);
	
	
	function exists(saveFileId:number);
	
	function remove(saveFileId:number);
	
	/**当前是否在NW.js环境中 */
	function isLocalMode():boolean;
	
	/**保存文件到本地(压缩->base64) */
	function saveToLocalFile(saveFileId:number, json:string);
	
	function loadFromLocalFile(saveFileId:number):string;
	
	function localFileExists(saveFileId:number):boolean;
	
	function removeLocalFile(saveFileId:number);
	
	/** */
	function saveToWebStorage(saveFileId:number, json:string);
	
	function loadFromWebStorage(saveFileId:number):string;
	
	function webStorageExists(saveFileId:number):boolean;
	
	function removeWebStorage(saveFileId:number):boolean;
	
	function localFileDirectoryPath():string;
	
	/**
	 * @param {number} saveFileId <0: means config.rpgsave， =0:means global.rpgsave, >0: means file{id}.rpgsave
	 */
	function localFilePath(saveFileId:number):string;
	
	/**
	 * @param {number} saveFileId <0: return "RPG Config", =0: return "RPG Global". >0: return "RPG File{id}"
	 */
	function webStorageKey(saveFileId:number):string;
}