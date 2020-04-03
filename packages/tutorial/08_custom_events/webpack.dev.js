"use strict";

const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(require("../../../tools/webpack.common"), {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    host: "0.0.0.0",
    port: 9000,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.IVI_TARGET": JSON.stringify("browser"),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "html/index.html",
    }),
  ],
});
