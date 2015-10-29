/**The game object class for a picture. */
declare class Game_Picture{
	initialize();
	
	name():string;
	
	origin():number;
	
	x():number;
	
	y():number;
	
	scaleX():number;
	
	scaleY():number;
	
	opacity():number;
	
	blendMode():number;
	
	tone:Array<number>;
	
	angle:number;
	
	initBasic();
	
	initTarget();
	
	initTone();
	
	initRotation();
	
	show(name:string, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number);
	
	move(origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number, duration:number);
	
	rotate(speed:number);
	
	tint(tone:Array<number>, duration:number);
	
	erase();
	
	update();
	
	updateMove();
	
	updateTone();
	
	updateRotation();
}