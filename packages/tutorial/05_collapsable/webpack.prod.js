"use strict";

const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const terserOptions = require("../../../tools/terser-options.json");

module.exports = merge(require("../../../tools/webpack.common"), {
  mode: "production",
  devtool: "hidden-source-map",
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "__IVI_DEBUG__": "false",
      "__IVI_TARGET__": JSON.stringify("browser"),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "html/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
});
