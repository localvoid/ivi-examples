"use strict";

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(require("../../../tools/webpack.common"), {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "__IVI_DEBUG__": "true",
      "__IVI_TARGET__": JSON.stringify("browser"),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "html/index.html",
    }),
  ],
});
