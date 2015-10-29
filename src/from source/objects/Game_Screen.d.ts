/**
The game object class for screen effect data, such as changes in color tone
and flashes. */
declare class Game_Screen{
	initialize();
	clear();
	
	/** 内部各种清除 */
	onBattleStart();
	
	/** @return 0-255 */
	brightness():number;;
	
	/** @return [r,g,b,a] */
	tone():Array<number>;
	
	/** @return [r,g,b,a] */
	flashColor():Array<number>
	
	shake():number;
	
	zoomX():number;
	
	zoomY():number;
	
	zoomScale():number;
	
	weatherType():string;
	
	weatherPower():number;
	

	picture(pictureId:number):Game_Picture;
	
	realPictureId(pictureId:number):number;
	
	clearFade();
	
	clearTone();
	
	clearFlash();
	
	clearShake();
	
	clearZoom();
	
	clearWeather();
	
	clearPictures();
	
	eraseBattlePictures();
	
	/**目前固定返回100 */
	maxPictures():number;
	
	startFadeOut(duration:number);
	
	startFadeIn(duration:number);
	
	startTint(tone:Array<number>,duration:number);
	
	startFlash(color:Array<number>, duration:number);
	
	startShake(power:number, speed:number, duration:number);
	
	startZoom(x:number, y:number, scale:number, duration:number);
	
	setZoom(x:number, y:number, scale:number);
	
	changeWeather(type:string, power:number, duration:number);
	
	/** 内部调用各种update方法 */
	update();
	
	updateFadeOut();
	updateFadeIn();
	updateTone();
	updateFlash();
	updateShake();
	updateZoom();
	updateWeather();
	updatePictures();
	
	
	startFlashForDamage();
	
	showPicture(pictureId:number, name:string, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number);
	
	movePicture(pictureId:number, origin:number, x:number, y:number, scaleX:number, scaleY:number, opacity:number, blendMode:number, duration:number);
	
	rotatePicture(pictureId:number, speed:number);
	
	tintPicture(pictureId:number, tone:Array<number>, duration:number);
	
	erasePicture(pictureId:number);
}