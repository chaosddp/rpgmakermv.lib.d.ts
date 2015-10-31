
/** The game object class for a result of a battle action. For convinience, all
 member variables in this class are public. */
declare class Game_ActionResult{
	
	used:boolean;
    missed :boolean;
    evaded  :boolean;
    physical :boolean;
    drain :boolean;
    critical :boolean;
    success :boolean;
    hpAffected :boolean;
    hpDamage :number;
    mpDamage :number;
    tpDamage :number;
    addedStates :Array<number>;
    removedStates :Array<number>;
    addedBuffs :Array<number>;
    addedDebuffs :Array<number>;
    removedBuffs :Array<number>;
	
	initialize();
	
	clear();
	
	addedStateObjects():Array<$State>;
	
	removedStateObjects():Array<$State>;
    
    isStatusAffected():boolean;
    
    isHit():boolean;
    
    isStateAdded(stateId:number):boolean;
    
    pushAddedState(stateId:number);
    
    isStateRemoved(stateId:number):boolean;
    
    pushRemovedState(state:number);
    
    isBuffAdded(paramId:number):boolean;
    
    pushAddedBuff(paramId:number);
    
    isDebuffAdded(paramId:number):boolean;
    
    pushAddedDebuff(paramId:number);
    
    isBuffRemoved(paramId:number):boolean;
    
    pushRemovedBuff(paramId:number);
}