/** The game object class for a battle action. */
declare class Game_Action{
	constructor(subject:Game_BattlerBase, forcing:boolean);
	initialize(subject:Game_BattlerBase, forcing:boolean);
	
	clear();
	
	setSubject(subject:Game_Actor);
	
	
}

declare module Game_Action{
var EFFECT_RECOVER_HP :number;
var EFFECT_RECOVER_MP    :number;
var EFFECT_GAIN_TP      :number;
var EFFECT_ADD_STATE     :number;
var EFFECT_REMOVE_STATE   :number;
var EFFECT_ADD_BUFF         :number;
var EFFECT_ADD_DEBUFF      :number;
var EFFECT_REMOVE_BUFF    :number;
var EFFECT_REMOVE_DEBUFF   :number;
var EFFECT_SPECIAL          :number;
var EFFECT_GROW             :number;
var EFFECT_LEARN_SKILL      :number;
var EFFECT_COMMON_EVENT     :number;
var SPECIAL_EFFECT_ESCAPE    :number;
var HITTYPE_CERTAIN          :number;
var HITTYPE_PHYSICAL       :number;
var HITTYPE_MAGICAL        :number;
}