/**The wrapper class for a follower array. */
declare class Game_Followers{
	initialize();
	
	isVisible():boolean;
	
	show():boolean;
	
	hide():boolean;
	
	follower(index:number):Game_Follower;
	
	forEach(callback:Function, thisObject:Object);
	
	reverseEach(callback:Function, thisObject:Object);
	
	refresh();
	
	update();
	
	updateMove();
	
	jumpAll();
	
	synchronize(x:number, y:number, d:number);
	
	gather();
	
	areGathering():boolean;
	
	visibleFollowers():Array<Game_Follower>;
	
	areMoving():boolean;
	
	areGathered():boolean;
	
	isSomeoneCollided():boolean;
}