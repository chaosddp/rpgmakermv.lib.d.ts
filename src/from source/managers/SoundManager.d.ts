/**The static class that plays sound effects defined in the database. */
declare module SoundManager{
	
	function preloadImportantSounds();
	
	function loadSystemSound(n:number);
	
	function playSystemSound(n:number);
	
	function playCursor();
	
	function playOk();
	function playCancel();
	function playBuzzer();
	function playEquip();
	function playSave();
	function playLoad();
	function playBattleStart();
	function playEscape();
	function playEnemyAttack();
	function playEnemyDamage();
	function playEnemyCollapse();
	function playBossCollapse1();
	function playBossCollapse2();
	function playActorDamage();
	function playActorCollapse();
	function playRecovery();
	function playMiss();
	function playEvasion();
	function playMagicEvasion();
	function playReflection();
	function playShop();
	function playUseItem();
	function playUseSkill();
	
}