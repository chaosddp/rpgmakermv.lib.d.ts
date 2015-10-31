/** The static class that handles terms and messages. */
declare module TextManager{
	
	function basic(baseId:number):string;
	
	function param(paramId:number):string;
	
	function command(commandId:number):string;
	
	function message(messageId:number):string;
	
	function getter(method:string, param:number):any;
	
	/**货币单位 */
	var currencyUnit:string;
	
 	var level           :string;
   var  levelA          :string;
   var  hp              :string;
   var  hpA             :string;
   var  mp              :string;
  var   mpA             :string;
   var  tp              :string;
   var  tpA             :string;
   var  exp             :string;
   var  expA            :string;
   var  fight           :string;
   var  escape          :string;
   var  attack          :string;
   var  guard           :string;
   var  item            :string;
  var   skill           :string;
   var  equip           :string;
   var  status          :string;
   var  formation       :string;
  var   save            :string;
  var   gameEnd         :string;
  var   options         :string;
  var   weapon          :string;
  var   armor           :string;
  var   keyItem         :string;
  var   equip2          :string;
   var  optimize        :string;
  var   clear           :string;
  var   newGame         :string;
  var   continue_       :string;
  var   toTitle         :string;
  var   cancel          :string;
  var   buy             :string;
  var   sell            :string;
  var   alwaysDash      :string;
  var   commandRemember :string;
  var   bgmVolume       :string;
  var   bgsVolume       :string;
  var   meVolume        :string;
  var   seVolume        :string;
  var   possession      :string;
  var   expTotal        :string;
  var   expNext         :string;
  var   saveMessage     :string;
  var   loadMessage     :string;
  var   file            :string;
  var   partyName       :string;
  var   emerge          :string;
  var   preemptive      :string;
  var   surprise        :string;
  var   escapeStart     :string;
  var   escapeFailure   :string;
   var  victory         :string;
  var  defeat          :string;
  var   obtainExp       :string;
  var   obtainGold      :string;
  var   obtainItem      :string;
  var   levelUp         :string;
  var   obtainSkill     :string;
  var   useItem         :string;
  var   criticalToEnemy :string;
  var   criticalToActor :string;
  var   actorDamage     :string;
  var   actorRecovery   :string;
  var   actorGain       :string;
  var   actorLoss       :string;
  var   actorDrain      :string;
 var    actorNoDamage   :string;
 var    actorNoHit      :string;
 var    enemyDamage     :string;
  var   enemyRecovery   :string;
  var   enemyGain       :string;
  var   enemyLoss       :string;
  var   enemyDrain      :string;
 var    enemyNoDamage   :string;
  var   enemyNoHit      :string;
  var   evasion         :string;
  var   magicEvasion    :string;
  var   magicReflection :string;
  var   counterAttack   :string;
  var   substitute      :string;
  var   buffAdd         :string;
  var   debuffAdd       :string;
  var   buffRemove      :string;
  var   actionFailure   :string;
	
}

