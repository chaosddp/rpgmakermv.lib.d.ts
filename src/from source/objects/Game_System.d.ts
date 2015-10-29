/**系统数据 */
declare class Game_System{
	/**初始化 */
	initialize();
	
	/** 是否是日语 */
	isJapanese():boolean;
	
	/**是否是中文*/
	isChinese():boolean;
	
	/**是否是韩语 */
	isKorean():boolean;
	
	/**是否是中日韩统一表意文字 （TODO:correct?） */
	isCJK():boolean;
	
	/**是否是俄语 */
	isRussian():boolean;
	
	/**是否是横版战斗模式 */
	isSideView():boolean;
	
	/**是否可以存档 */
	isSaveEnabled():boolean;
	
	/** 禁用存档 */
	disableSave();
	
	/**启动存档 */
	enableSave();
	
	/** 菜单是否可用 （TODO：哪个菜单？） */
	isMenuEnabled():boolean;
	
	/**禁用菜单 */
	disableMenu();
	
	/**启用菜单 */
	enableMenu();
	
	/**是否开启遇敌 */
	isEncounterEnabled():boolean;
	
	/**禁用遇敌 */
	disableEncounter();
	
	/**启用遇敌 */
	enableEncounter();
	
	/** TODO：System 设置里可以设置的一个菜单项 */
	isFormationEnabled();
	
	disableFormation();
	
	enableFormation();
	
	/**战斗次数？ （TODO） */
	battleCount():number;
	
	/**胜利次数？ （TODO） */
	winCount():number;
	
	/**逃跑次数 */
	escapeCount():number;
	
	/**存档次数 */
	saveCount():number;
	
	/**版本id？(TODO) */
	versionId():number;
	
	/**获取窗口的颜色
	 * 
	 * @return {Array<number>} 即$System.windowTone
	*/
	windowTone():Array<number>;
	
	/**设置口的颜色 （同$System） */
	setWindowTone(color:Array<number>);
	
	/**获取战斗背景音乐 */
	battleBgm():$AudioFile;
	
	/**获取设置战斗背景音乐 */
	setBattleBgm(bgm:$AudioFile);
	
	/**胜利时的ME */
	victoryMe():$AudioFile;
	
	/**设置胜利时的ME */
	setVictoryMe(value:$AudioFile);
	
	/**得到战败时的ME */
	defeatMe():$AudioFile;
	
	/**设置战败时的ME */
	setDefeatMe(value:$AudioFile);
	
	/**战斗开始，结果是战斗次数加1 */
	onBattleStart();
	
	/**战斗胜利，结果是胜利次数加1 */
	onBattleWin();
	
	/**逃跑，逃跑次数加1 */
	onBattleEscape();
	
	/**存档前调用的方法，存档次数加1，保存当前帧和bgm等 */
	onBeforeSave();
	
	/**存档后调用的方法，恢复保存的帧，恢复bgm等 */
	onAfterLoad();
	
	/**游戏时间 （单位应该是秒）*/
	playtime():number;
	
	/**游戏时间的文本，形如 小时：分钟：秒 */
	playtimeText();
	
	/**保存bgm */
	saveBgm();
	
	/**重播bgm（调用saveBgm保存的bgm） */
	replayBgm();
	
	/** */
	saveWalkingBgm();
	
	replayWalkingBgm();
}