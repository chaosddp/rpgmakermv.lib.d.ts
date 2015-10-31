var gulp = require("gulp");
var concat = require("gulp-concat");


gulp.task("default", function(){
	
	// copy reference definition files
	gulp.src("ref/*.d.ts")
		.pipe(gulp.dest("output"));
		
	// here to merge files to a single one
	gulp.src(["src/ref.txt"
			,"src/from doc/*.d.ts"
			,"src/json/*.d.ts"
			, "src/from source/*/*.d.ts"])
		.pipe(concat("rpgmakermv.lib.d.ts"))
		.pipe(gulp.dest("output"));
});