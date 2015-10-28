var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("default", function(){
	
	// here to merge files to a single one
	
	gulp.src("src/*.d.ts")
		.pipe(concat("rpgmakermv.lib.d.ts"))
		.pipe(gulp.dest("output"))
});