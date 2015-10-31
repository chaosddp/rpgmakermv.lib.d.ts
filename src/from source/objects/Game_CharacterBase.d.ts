/**
The superclass of Game_Character. It handles basic information, such as coordinates and images, shared by all characters. */
declare class Game_CharacterBase{
	x:number;
	y:number;

	
	initMembers();
	
	pos(x:number, y:number):boolean;
	
	posNt(x:number, y:number):boolean;
	
	moveSpeed():number;
	
	setMoveSpeed(moveSpeed:number);
	
	moveFrequency():number;
	
	setMoveFrequency(moveFrequency:number);
	
	opacity():number;
	
	setOpacity(opacity:number);
	
	blendMode():number;
	
	setBlendMode(blendMode:number);
	
	isNormalPriority():boolean;
	
	setPriorityType(porityType:number);
	
	isMoving():boolean;
	
	isJumping():boolean;
	
	jumpHeight():number;
	
	isStopping():boolean;
	
	checkStop(threshold:number):boolean;
	
	resetStopCount();
	
	realMoveSpeed():number;
	
	distancePerFrame():number;
	
	isDashing():boolean;
	
	isDebugThrough():boolean;
	
	straighten();
	
	reverseDir(d:number);
	
	canPass(x:number, y:number, d:number):boolean;
	
	canPassDiagonally(x:number, y:number, horz:number, vert:number):boolean;
	
	isMapPassable(x:number, y:number, d:number):boolean;
	
	isCollidedWithCharacters(x:number, y:number):boolean;
	
	isCollidedWithEvents(x:number, y:number):boolean;
	
	isCollidedWithVehicles(x:number, y:number):boolean;
	
	setPosition(x:number, y:number);
	
	copyPosition(character:Game_CharacterBase);
	
	/**set position to (x, y) */
	locate(x:number, y:number);
	
	direction():number;
	
	setDirection(d:number);
	
	isTile():boolean;
	
	isObjectCharacter():boolean;
	
	shiftY():number;
	
	scrolledX():number;
	
	scrolledY():number;
	
	screenX():number;
	
	screenY():number;
	
	screenZ():number;
	
	isNearTheScreen():boolean;
	
	update();
	
	updateStop();
	
	updateJump();
	
	updateMove();
	
	updateAnimation();
	
	animationWait();
	
	updateAnimationCount();
	
	updatePattern();
	
	maxPattern():number;
	
	pattern():number;
	
	setPattern(patter:number);
	
	/**is it 1 */
	isOriginalPattern():number;
	
	/**reset to 1 */
	resetPattern();
	
	refreshBushDepth();
	
	isOnLadder();
	
	isOnBush();
	
	terrainTag():number;
	
	regionId():number;
	
	increaseSteps();
	
	tileId():number;
	
	characterName():string;
	
	characterIndex():number;
	
	setImage(characterName:string, characterIndex:number);
	
	setTileImage(tileId:number);
	
	checkEventTriggerTouchFront(d:number);
	
	checkEventTriggerTouch(x:number, y:number);
	
	isMovementSucceeded(x:number, y:number);
	
	setMovementSuccess(success:boolean);
	
	moveStraight(d:number);
	
	moveDiagonally(horz:number, vert:number);
	
	jump(xPlus:number, yPlus:number);
	
	hasWalkAnime():boolean;
	
	setWalkAnime(walkAnime:boolean);
	
	hasStepAnime():boolean;
	
	setStepAnime(stepAnime:boolean);
	
	isDirectionFixed():boolean;
	
	setDirectionFix(directionFix:boolean);
	
	isThrough():boolean;
	
	setThrough(through:boolean);
	
	isTransparent():boolean;
	
	bushDepth():number;
	
	setTransparent(transparent:boolean);
	
	requestAnimation(animationId:number);
	
	requestBalloon(balloonId:number);
	
	animationId():number;
	
	balloonId():number;
	
	startAnimation();
	
	startBalloon();
	
	isAnimationPlaying():boolean;
	
	isBalloonPlaying():boolean;
	
	endAnimation();
	
	endBalloon();
}