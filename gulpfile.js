/**
 * Commands:
 *
 * serve - launch a development http server and watch for changes
 * build - production build
 */

const exec = require("child_process").exec;
const gulp = require("gulp");
const del = require("del");
const gulpIf = require("gulp-if");
const gulpSourcemaps = require("gulp-sourcemaps");
const gulpRename = require("gulp-rename");
const rollup = require("rollup");
const rollupSourceMaps = require("rollup-plugin-sourcemaps");
const rollupNodeResolve = require("rollup-plugin-node-resolve");
const rollupReplace = require("rollup-plugin-replace");
const closureCompiler = require("google-closure-compiler").gulp();
const browserSync = require("browser-sync").create();

const series = gulp.series;
const parallel = gulp.parallel;

const ENABLE_SOURCEMAPS = true;

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
    rewrite_polyfills: true,
};

function clean() {
    return del(["build", "docs"]);
}

function copyAssets() {
    return gulp.src(["src/**/*.html", "src/**/*.css"])
        .pipe(gulp.dest("docs"));
}

function compileTypeScript(done) {
    exec("./node_modules/typescript/bin/tsc --importHelpers",
        function (err, stdout, stderr) {
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.log(stderr);
            }
            done(err);
        });
}

function bundle(name, devMode) {
    const fn = function () {
        return rollup.rollup({
            entry: "build/es6/src/" + name + "/main.js",
            context: "window",
            plugins: [
                rollupSourceMaps(),
                rollupNodeResolve(),
                rollupReplace({
                    values: {
                        __IVI_DEV__: !!devMode,
                        __IVI_BROWSER__: true,
                    },
                }),
            ],
        }).then((bundle) => Promise.all([
            bundle.write({
                format: devMode ? "iife" : "es",
                moduleName: devMode ? "example" : undefined,
                dest: "build/" + name + ".js",
                sourceMap: devMode ? "inline" : true,
            }),
        ]));
    };
    fn.displayName = "bundle: " + name;
    return fn;
}

function copyBundle(name) {
    return function copyBundle() {
        return gulp.src("build/" + name + ".js")
            .pipe(gulpRename(name + "/bundle.js"))
            .pipe(gulp.dest("docs/"));
    }
}

function compile(name, externs) {
    const fn = function () {
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

const PROJECTS = [
    // Basic
    "01_introduction",
    "02_stateful_component",
    "03_events",
    "04_forms",
    "05_collapsable",
    // Games
    "games/snake",
    // Apps
    "todomvc",
    // Benchmarks
    "benchmarks/uibench",
    "benchmarks/dbmon",
    "benchmarks/10k",
    // Test playground
    "playground/pointer-events",
    "playground/gesture-events",
];

const EXTERNS = {
    "benchmarks/uibench": "src/benchmarks/uibench/externs/uibench.js",
};

const buildDistTasks = PROJECTS.map((p) => series(bundle(p), compile(p, EXTERNS[p])));
const buildDevTasks = PROJECTS.map((p) => series(bundle(p, true), copyBundle(p)));

function browserSyncReload(done) {
    browserSync.reload();
    done();
}

function watchProject(name) {
    gulp.watch("src/" + name + "/**/*.ts", series(
        compileTypeScript,
        bundle(name, true),
        copyBundle(name),
        browserSyncReload
    ));
}

function watch() {
    gulp.watch(["src/**/*.html", "src/**/*.css"],
        series(
            copyAssets,
            browserSyncReload
        ));

    PROJECTS.forEach((p) => {
        watchProject(p);
    });
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./",
            directory: true,
        },
        minify: false,
    });

    watch();
}

exports.compileTypeScript = compileTypeScript;
exports.watch = watch;

exports.serve = series(
    clean,
    copyAssets,
    compileTypeScript,
    buildDevTasks,
    serve
);

exports.default = exports.build = series(
    clean,
    copyAssets,
    compileTypeScript,
    buildDistTasks
);
