/**The static class that manages the plugins. */
declare module PluginManager{
	function setup(plugins:Array<PluginData>);
	
	function checkErrors();
	
	function parameters(name:string):Object;
	
	function setParameters(name:string, parameters:Object);
	
	function loadScript(name:string);
	
	function onError(e:Error);
}

declare class PluginData
{
	name:string;
	status:boolean;
	description:string;
	parameters:Array<any>;
}