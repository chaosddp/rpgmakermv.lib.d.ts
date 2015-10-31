/**The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event. */
declare class Game_Character extends Game_CharacterBase{
	
	memorizeMoveRoute();
	
	restoreMoveRoute();
	
	isMoveRouteForcing():boolean;	
	
	setMoveRoute(moveRoute:$MoveRoute);
	
	forceMoveRoute(moveRoute:$MoveRoute);
	
	updateRoutineMove();
	
	processMoveCommand(command:$EventCommand);
	
	deltaXFrom(x:number);
	
	deltaYFrom(y:number);
	
	moveRandom();
	
	moveTowardCharacter(character:Game_CharacterBase);
	
	moveAwayFromCharacter(character:Game_CharacterBase);
	
	turnTowardCharacter(character:Game_CharacterBase);
	
	turnAwayFromCharacter(character:Game_CharacterBase);
	
	turnTowardPlayer();
	
	turnAwayFromPlayer();
	
	moveTowardPlayer();
	
	moveAwayFromPlayer();
	
	moveForward();
	
	moveBackward();
	
	processRouteEnd();
	
	advanceMoveRouteIndex();
	
	turnRight90();
	
	turnLeft90();
	
	turn180();
	
	turnRightOrLeft90();
	
	turnRandom();
	
	swap(character:Game_CharacterBase);
}


declare module Game_Character{
var ROUTE_END               :number;
var ROUTE_MOVE_DOWN         :number;
var ROUTE_MOVE_LEFT         :number;
var ROUTE_MOVE_RIGHT        :number;
var ROUTE_MOVE_UP           :number;
var ROUTE_MOVE_LOWER_L      :number;
var ROUTE_MOVE_LOWER_R      :number;
var ROUTE_MOVE_UPPER_L      :number;
var ROUTE_MOVE_UPPER_R      :number;
var ROUTE_MOVE_RANDOM       :number;
var ROUTE_MOVE_TOWARD       :number;
var ROUTE_MOVE_AWAY         :number;
var ROUTE_MOVE_FORWARD      :number;
var ROUTE_MOVE_BACKWARD     :number;
var ROUTE_JUMP              :number;
var ROUTE_WAIT              :number;
var ROUTE_TURN_DOWN         :number;
var ROUTE_TURN_LEFT         :number;
var ROUTE_TURN_RIGHT        :number;
var ROUTE_TURN_UP           :number;
var ROUTE_TURN_90D_R        :number;
var ROUTE_TURN_90D_L        :number;
var ROUTE_TURN_180D         :number;
var ROUTE_TURN_90D_R_L      :number;
var ROUTE_TURN_RANDOM       :number;
var ROUTE_TURN_TOWARD       :number;
var ROUTE_TURN_AWAY         :number;
var ROUTE_SWITCH_ON         :number;
var ROUTE_SWITCH_OFF        :number;
var ROUTE_CHANGE_SPEED      :number;
var ROUTE_CHANGE_FREQ       :number;
var ROUTE_WALK_ANIME_ON     :number;
var ROUTE_WALK_ANIME_OFF    :number;
var ROUTE_STEP_ANIME_ON     :number;
var ROUTE_STEP_ANIME_OFF    :number;
var ROUTE_DIR_FIX_ON        :number;
var ROUTE_DIR_FIX_OFF       :number;
var ROUTE_THROUGH_ON        :number;
var ROUTE_THROUGH_OFF       :number;
var ROUTE_TRANSPARENT_ON    :number;
var ROUTE_TRANSPARENT_OFF   :number;
var ROUTE_CHANGE_IMAGE      :number;
var ROUTE_CHANGE_OPACITY    :number;
var ROUTE_CHANGE_BLEND_MODE :number;
var ROUTE_PLAY_SE           :number;
var ROUTE_SCRIPT            :number;
}