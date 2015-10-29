/**定时器？ */
declare class Game_Timer{
	initialize();
	
	update(sceneActive:any);
	
	start();
	
	stop();
	
	isWorking():boolean;
	
	seconds():number;
	
	onExpire();
}