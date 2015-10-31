/**The static class that handles BGM, BGS, ME and SE. */
declare module AudioManager{
	var bgmVolume:number;
	var bgsVolume:number;
	var meVolume:number;
	var seVolume:number;
	
	function playBgm(bgm:$AudioFile, pos:number);
	
	function replayBgm(bgm:$AudioFile);
	
	function isCurrentBgm(bgm:$AudioFile):boolean;
	
	function updateBgmParameters(bgm:$AudioFile);
	
	function updateCurrentBgm(bgm:$AudioFile, pos:number);
	
	function stopBgm();
	
	function fadeOutBgm(duration:number);
	
	function fadeInBgm(duration:number);
	
	function playBgs(bgs:$AudioFile, pos:number);
	
	function replayBgs(bgs:$AudioFile);
	
	function isCurrentBgs(bgs:$AudioFile):boolean;
	
	function updateBgsParameters(bgs:$AudioFile);
	
	function updateCurrentBgs(bgs:$AudioFile, pos:number);
	
	function stopBgs();
	
	function fadeOutBgs(duration:number);
	function fadeInBgs(duration:number);
	
	function playMe(me:$AudioFile);
	
	function updateMeParameters(me:$AudioFile);
	
	function fadeOutMe(duration:number);
	
	function stopMe();
	
	function playSe(se:$AudioFile);
	
	function updateSeParameters(buffer, se:$AudioFile);
	
	function stopSe();
	
	function playStaticSe(se:$AudioFile);
	
	function loadStaticSe(se:$AudioFile);
	
	function isStaticSe(se:$AudioFile):boolean;
	
	function stopAll();
	
	/**保存当前bgm的状态，用于下次恢复 */
	function saveBgm():AudioObject;
	
	function saveBgs():AudioObject;
	
	function makeEmptyAudioObject():AudioObject;
	
	/**创建html5Audio/webaudio用于缓冲 */
	function createBuffer(folder:string, name:string):any;
	
	function updateBufferParameters(buffer, configVolume, audio);
	
	/**.ogg/.m4a */
	function audioFileExt():string;
	
	function shouldUseHtml5Audio():boolean;
	
	function checkErrors();
	
	function checkWebAudioError();
}

declare class AudioObject{
	name:string;
	volume:number;
	pitch:number;
	pan:number;
	pos:number;
}