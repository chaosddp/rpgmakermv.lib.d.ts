/**The static class that manages scene transitions. */
declare module SceneManager{
	function run(sceneClass:Scene_Base);
	
	function initialize();
	
	function initGraphics();
	
	/**@return {stirng} canvas/webgl/auto */
	function preferableRendererType():string;
	
	function shouldUseCanvasRenderer():boolean;
	
	function checkWebGL();
	
	function checkFileAccess();
	
	function initAudio();
	
	function initInput();
	
	function initNwjs();
	
	function checkPluginErrors();
	
	function setupErrorHandlers();
	
	function requestUpdate();
	
	function update();
	
	/**close window */
	function terminate();
	
	function onError(e:Error);
	
	function onKeyDown(event:KeyboardEvent);
	
	function catchException(e:Error);
	
	function tickStart();
	
	function tickEnd();
	
	function updateInputData();
	
	function updateMain();
	
	function changeScene();
	
	function updateScene();
	
	function renderScene();
	
	function onSceneCreate();
	
	function onSceneStart();
	
	function onSceneLoading();
	
	function isSceneChanging():boolean;
	
	function isCurrentSceneBusy():boolean;
	
	function isCurrentSceneStarted():boolean;
	
	function isNextScene():boolean;
	
	function isPreviousScene():boolean;
	
	function goto(sceneClass:Scene_Base);
	
	function push(sceneClass:Scene_Base);
	
	function pop();
	
	function exit();
	
	function clearStack();
	
	function stop();
	
	function prepareNextScene();
	
	function snap();
	
	function snapForBackground();
	
	function backgroundBitmap():Bitmap;
}