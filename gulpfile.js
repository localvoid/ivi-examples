"use strict";

const exec = require("child_process").exec;
const gulp = require("gulp");
const gulpRename = require("gulp-rename");
const rollup = require("rollup");
const rollupNodeResolve = require("rollup-plugin-node-resolve-main-fields");
const closureCompiler = require("google-closure-compiler").gulp();

const series = gulp.series;
const parallel = gulp.parallel;

const CLOSURE_OPTS = {
  compilation_level: "ADVANCED",
  language_in: "ECMASCRIPT_2017",
  language_out: "ECMASCRIPT5_STRICT",
  use_types_for_optimization: true,
  assume_function_wrapper: true,
  isolation_mode: "IIFE",
  summary_detail_level: 3,
  warning_level: "QUIET",
  rewrite_polyfills: false,
};

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
      input: `build/es6/src/${name}/main.js`,
      context: "window",
      plugins: [
        rollupNodeResolve({
          mainFields: ["es2016", "module", "main"],
        }),
      ],
    }).then((bundle) => Promise.all([
      bundle.write({
        format: "es",
        file: `build/${name}.js`,
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
    return gulp.src(["env.production.js", `build/${name}.js`])
      .pipe(closureCompiler(Object.assign({}, CLOSURE_OPTS, {
        js_output_file: name + "/bundle.js",
      }, externs ? { externs: externs } : undefined)))
      .pipe(gulp.dest("docs"));
  }
  fn.displayName = "compile: " + name;
  return fn;
}

const PROJECTS = [
  // // Basic
  "01_introduction",
  // "02_stateful_component",
  // "03_events",
  // "04_forms",
  // "05_collapsable",
  // // // Games
  // "games/snake",
  // // // Benchmarks
  // "benchmarks/uibench",
  // "benchmarks/uibench_fc",
  "benchmarks/dbmon",
  // "benchmarks/10k",
];

const EXTERNS = {
  "benchmarks/uibench": "src/benchmarks/uibench/externs/uibench.js",
  "benchmarks/uibench_fc": "src/benchmarks/uibench_fc/externs/uibench.js",
};

const buildDistTasks = PROJECTS.map((p) => series(bundle(p), compile(p, EXTERNS[p])));
const buildDevTasks = PROJECTS.map((p) => series(bundle(p, true), copyBundle(p)));

exports.compileTypeScript = compileTypeScript;

exports.default = exports.build = series(
  clean,
  copyAssets,
  compileTypeScript,
  buildDistTasks
);
