/**用于WebGL的颜色矩阵滤镜。 */
declare class ToneFilter{
	/**
	 * 更改色相。
	 * 
	 * @param {number} value 介于 -360～360 之间的色相值
	 */
	adjustHue ( value:number );
	
	/**
	 * 更改饱和度。
	 * 
	 * @param {number} value 介于 -255～255 之间的饱和度值
	 */
	adjustSaturation ( value:number );
	
	/**
	 * 更改色调。
	 * 
	 * @param {number} r 介于 -255～255 之间的红色值
	 * @param {nubmer} g 介于 -255～255 之间的绿色值
	 * @param {number} b 介于 -255～255 之间的蓝色值
	 */
	adjustTone ( r:number , g:number , b:number );
	
	/**重置滤镜。 */
	reset ();
}