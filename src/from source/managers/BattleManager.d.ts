/**The static class that manages battle progress. */
declare module BattleManager{
	
	function setup(troopId:number, canEscape:boolean, canLose:boolean);
	
	function initMembers();
	
	function isBattleTest():boolean;
	
	function setBattleTest(battleTest:boolean);
	
	function setEventCallback(callback:Function);
	
	function setLogWindow(logWindow:Window_BattleLog);
	
	function setStatusWindow(statusWindow:Window_BattleStatus);
	
	function setSpriteset(spriteset:Spriteset_Battle);
	
	function onEncounter();
	
	function ratePreemptive():number;
	
	function rateSurprise():number;
	
	function saveBgmAndBgs();
	
	function playBattleBgm();
	
	function playVictoryMe();
	
	function playDefeatMe();
	
	function replayBgmAndBgs();
	
	function makeEscapeRatio():number;
	
	function update();
	
	function updateEvent():boolean;
	
	function updateEventMain():boolean;
	
	function isBusy():boolean;
	
	function isInputting():boolean;
	
	function isInTurn():boolean;
	
	function isTurnEnd():boolean;
	
	function isAborting():boolean;
	
	function isBattleEnd():boolean;
	
	function canEscape():boolean;
	
	function canLose():boolean;
	
	function isEscaped():boolean;
	
	function actor():Game_Actor;
	
	function clearActor();
	
	function changeActor(newActorIndex:number, lastActorActionState:string);
	
	function startBattle();
	
	function displayStartMessages();
	
	function startInput();
	
	function inputtingAction():Game_Action;
	
	function selectNextCommand();
	
	function selectPreviousCommand();
	
	function refreshStatus();
	
	function startTurn();
	
	function updateTurn();
	
	function processTurn();
	
	function endTurn();
	
	function updateTurnEnd();
	
	function getNextSubject():Game_Battler;
	
	function allBattleMembers():Array<Game_Battler>;
	
	function makeActionOrders();
	
	function startAction();
	
	function updateAction();
	
	function endAction();
	
	function invokeAction(subject:Game_Battler, target:Game_Battler);
	
	function invokeNormalAction();
	
	function invokeNormalAction(subject:Game_Battler, target:Game_Battler);
	
	function invokeCounterAttack(subject:Game_Battler, target:Game_Battler);
	
	function invokeMagicReflection(subject:Game_Battler, target:Game_Battler);
	
	function applySubstitute(target:Game_Battler);
	
	function checkSubstitute(target:Game_Battler);
	
	function isActionForced():boolean;
	
	function forceAction(battler:Game_Battler);
	
	function processForcedAction();
	
	function abort();
	
	function checkBattleEnd():boolean;
	
	function checkAbort():boolean;
	
	function processVictory();
	
	function processEscape():boolean;
	
	function processAbort();
	
	function processDefeat();
	
	function endBattle(result:number);
	
	function updateBattleEnd();
	
	function makeRewards();
	
	function displayVictoryMessage();
	
	function displayDefeatMessage();
	
	function displayEscapeSuccessMessage();
	
	function displayEscapeFailureMessage();
	
	function displayRewards();
	
	function displayExp();
	
	function displayGold();
	
	function displayDropItems();
	
	function gainRewards();
	
	function gainExp();
	
	function gainGold();
	
	function gainDropItems();
	
}