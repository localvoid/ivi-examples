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
const rollupAlias = require("rollup-plugin-alias");
const closureCompiler = require("google-closure-compiler").gulp();
const browserSync = require("browser-sync").create();

const series = gulp.series;
const parallel = gulp.parallel;

const ENABLE_SOURCEMAPS = true;

const CLOSURE_OPTS = {
  compilation_level: "ADVANCED",
  language_in: "ECMASCRIPT_2017",
  language_out: "ECMASCRIPT5_STRICT",
  use_types_for_optimization: true,
  assume_function_wrapper: true,
  isolation_mode: "IIFE",
  summary_detail_level: 3,
  warning_level: "QUIET",
  rewrite_polyfills: true,
  new_type_inf: true
};

function clean() {
  return del(["build", "docs"]);
}

function copyAssets() {
  return gulp.src(["src/**/*.html", "src/**/*.css"])
    .pipe(gulp.dest("docs"));
}

function compileTypeScript(done) {
  exec("./node_modules/typescript/bin/tsc",
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
      input: "build/es6/src/" + name + "/main.js",
      context: "window",
      plugins: [
        rollupAlias({
          "ivi-vars": __dirname + "/node_modules/ivi-vars/browser",
        }),
        rollupSourceMaps(),
        rollupNodeResolve(),
      ],
    }).then((bundle) => Promise.all([
      bundle.write({
        format: devMode ? "iife" : "es",
        name: devMode ? "example" : undefined,
        file: "build/" + name + ".js",
        sourcemap: devMode ? "inline" : true,
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
  // // Basic
  "01_introduction",
  "02_stateful_component",
  "03_events",
  "04_forms",
  "05_collapsable",
  // // Games
  "games/snake",
  // // Benchmarks
  "benchmarks/uibench",
  "benchmarks/uibench_fc",
  "benchmarks/dbmon",
  "benchmarks/10k",
];

const EXTERNS = {
  "benchmarks/uibench": "src/benchmarks/uibench/externs/uibench.js",
  "benchmarks/uibench_fc": "src/benchmarks/uibench_fc/externs/uibench.js",
};

const buildDistTasks = PROJECTS.map((p) => series(bundle(p), compile(p, EXTERNS[p])));
const buildDevTasks = PROJECTS.map((p) => series(bundle(p, true), copyBundle(p)));

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function watchProject(name) {
  gulp.watch("build/es6/src/" + name + "/**/*.js", series(
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
