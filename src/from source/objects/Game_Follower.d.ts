/**The game object class for a follower. A follower is an allied character,
 other than the front character, displayed in the party. */
declare class Game_Follower{
	
	constructor(memberIndex:number);
	
	initialize(memberIndex:number);
	
	refresh();
	
	actor():Game_Actor;
	
	isVisible():boolean;
	
	chaseCharacter(character:Game_CharacterBase);
	
}