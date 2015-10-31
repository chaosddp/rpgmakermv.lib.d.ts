/**The static class that loads images, creates bitmap objects and retains them. */
declare module ImageManager{
	function loadAnimation(filename:string, hue:number):Bitmap;
	
	function loadBattleback1(filename:string, hue:number):Bitmap;
	
	function loadBattleback2(filename:string, hue:number):Bitmap;
	
	function loadEnemy(filename:string, hue:number):Bitmap;
	
	function loadCharacter(filename:string, hue:number):Bitmap;
	
	function loadFace(filename:string, hue:number):Bitmap;
	
	function loadParallax(filename:string, hue:number):Bitmap;
	
	function loadPicture(filename:string, hue:number):Bitmap;
	
	function loadSvActor(filename:string, hue:number):Bitmap;
	
	function loadSvEnemy(filename:string, hue:number):Bitmap;
	
	function loadSystem(filename:string, hue:number):Bitmap;
	
	function loadTileset(filename:string, hue:number):Bitmap;
	
	function loadTitle1(filename:string, hue:number):Bitmap;
	
	function loadTitle2(filename:string, hue:number):Bitmap;
	
	/** */
	function loadBitmap(folder:string, filename:string, hue:number, smooth:boolean):Bitmap;

	function loadEmptyBitmap():Bitmap;
	
	function loadNormalBitmap(path:string, hue:number):Bitmap;
	
	/**clear cache */
	function clear();
	
	function isReady():boolean;
	
	function isObjectCharacter(filename:string):boolean;
	
	function isBigCharacter(filename:string):boolean;
	
	function isZeroParallax(filename:string):boolean;
}