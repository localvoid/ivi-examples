const exec = require("child_process").exec;
const gulp = require("gulp");
const del = require("del");
const gulpIf = require("gulp-if");
const gulpSourcemaps = require("gulp-sourcemaps");
const rollup = require("rollup");
const rollupSourceMaps = require("rollup-plugin-sourcemaps");
const rollupAlias = require("rollup-plugin-alias");
const rollupNodeResolve = require("rollup-plugin-node-resolve");
const rollupReplace = require("rollup-plugin-replace");
const closureCompiler = require("google-closure-compiler").gulp();

const series = gulp.series;
const parallel = gulp.parallel;

const ENABLE_SOURCEMAPS = false;

const CLOSURE_OPTS = {
    compilation_level: "ADVANCED",
    language_in: "ECMASCRIPT6_STRICT",
    language_out: "ECMASCRIPT5_STRICT",
    use_types_for_optimization: true,
    assume_function_wrapper: true,
    // TODO: replace with --isolation-mode=IIFE in the next release
    // https://github.com/google/closure-compiler/commit/51dd82730ec76874a8de15a4b6b6d856d901fdb2
    output_wrapper: "(function(){%output%}).call(this);",
    summary_detail_level: 3,
    warning_level: "QUIET",
    rewrite_polyfills: false,
};

function clean() {
    return del(["build", "docs"]);
}

function copyAssets() {
    return gulp.src(["src/**/*.html", "src/**/*.css"])
        .pipe(gulp.dest("docs"));
}

function compileTypescript(done) {
    exec("./node_modules/typescript/bin/tsc --importHelpers",
        function(err, stdout, stderr) {
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.log(stderr);
            }
            done(err);
        });
}

function bundle(name) {
    const fn = function() {
        return rollup.rollup({
            entry: "build/es6/src/" + name + "/main.js",
            context: "window",
            plugins: [
                rollupSourceMaps(),
                rollupAlias({
                    tslib: "node_modules/tslib/tslib.es6.js",
                }),
                rollupNodeResolve({ jsnext: true }),
                rollupReplace({
                    values: {
                        "__IVI_DEV__": false,
                    },
                }),
            ],
        }).then((bundle) => Promise.all([
            bundle.write({
                format: "es",
                dest: "build/" + name + ".js",
                sourceMap: true,
            }),
        ]));
    };
    fn.displayName = "bundle: " + name;
    return fn;
}

function compile(name, externs) {
    const fn = function() {
        return gulp.src("build/" + name + ".js")
            .pipe(gulpIf(ENABLE_SOURCEMAPS, gulpSourcemaps.init({ loadMaps: true })))
            .pipe(closureCompiler(Object.assign({}, CLOSURE_OPTS, {
                js_output_file: name + "/bundle.js",
            }, externs ? { externs: externs } : undefined)))
            .pipe(gulpIf(ENABLE_SOURCEMAPS, gulpSourcemaps.write(".", { destPath: "docs" })))
            .pipe(gulp.dest("docs"));
    }
    fn.displayName = "compile: " + name;
    return fn;
}

exports.clean = clean;

const build01Introduction = exports.build01Introduction = series(
    bundle("01_introduction"),
    compile("01_introduction")
);

const build02StatefulComponent = exports.build02StatefulComponent = series(
    bundle("02_stateful_component"),
    compile("02_stateful_component")
);

const build03Events = exports.build03Events = series(
    bundle("03_events"),
    compile("03_events")
);

const build04Forms = exports.build04Forms = series(
    bundle("04_forms"),
    compile("04_forms")
);

const buildSnake = exports.buildSnake = series(
    bundle("games/snake"),
    compile("games/snake")
);

const buildTodoMVC = exports.buildTodoMVC = series(
    bundle("todomvc"),
    compile("todomvc")
);

const buildBenchmarkUIBench = exports.buildUIBench = series(
    bundle("benchmarks/uibench"),
    compile("benchmarks/uibench", "src/benchmarks/uibench/externs/uibench.js")
);

const buildBenchmarkDBMon = exports.buildDBMon = series(
    bundle("benchmarks/dbmon"),
    compile("benchmarks/dbmon")
);

const buildBenchmark10k = exports.build10k = series(
    bundle("benchmarks/10k"),
    compile("benchmarks/10k")
);

const buildPlaygroundPointerEvents = exports.buildPlaygroundPointerEvents = series(
    bundle("playground/pointer-events"),
    compile("playground/pointer-events")
);

exports.compileTypescript = compileTypescript;
exports.default = exports.build = series(
    clean,
    copyAssets,
    compileTypescript,
    build01Introduction,
    build02StatefulComponent,
    build03Events,
    build04Forms,
    buildSnake,
    buildTodoMVC,
    buildBenchmarkUIBench,
    buildBenchmarkDBMon,
    buildBenchmark10k,
    buildPlaygroundPointerEvents
);
