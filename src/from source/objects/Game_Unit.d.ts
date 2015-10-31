/**The superclass of Game_Party and Game_Troop. */
declare class Game_Unit<T>{
	initialize();
	
	inBattle():boolean;
	
	members():Array<T>;
	
	aliveMembers():Array<T>;
	
	deadMembers():Array<T>;
	
	movableMembers():Array<T>;
	
	clearActions();
	
	agility():number;
	
	tgrSum():number;
	
	randomTarget():T;
	
	randomDeadTarget():T;
	
	smoothTarget(index:number):T;
	
	smoothDeadTarget(index:number):T;
	
	clearResults();
	
	onBattleStart();
	
	onBattleEnd();
	
	makeActions();
	
	select(activeMember:T);
	
	isAllDead():boolean;
	
	substituteBattler():T;
}