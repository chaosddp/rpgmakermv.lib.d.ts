/**The static class that manages the configuration data. */
declare module ConfigManager{
	/** */
	var alwaysDash:boolean;
	
	var commandRemember:boolean;
	
	var bgmVolume:number;
	
	var bgsVolume:number;
	
	var meVolume:number;
	
	var seVolume:number;
	
	function load();
	
	/**保存配置 */
	function save();
	
	/**生成需要存档的配置对象 */
	function makeData():ConfigData;
	
	/**恢复配置 */
	function applyData(config:ConfigData);
	
	/**读取指定的flag */
	function readFlag(config:ConfigData, name:string):boolean;
	
	/**读取指定的音量，默认100 */
	function readVolume(config:ConfigData, name:string):number;
}

declare class ConfigData{
	
	commandRemember:boolean;
	bgmVolume:number;
	bgsVolume:number;
	meVolume:number;
	seVolume:number;
	alwaysDash: boolean;
}