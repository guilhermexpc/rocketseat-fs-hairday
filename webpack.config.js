// import path from "node:path";
const path = require("path"); // Commonjs module
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const entryFolder = "src";
const outputFolder = "dist";
const file = "main.js";

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, entryFolder, file),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, outputFolder)
  },

  devServer: {
    static: {
      directory: path.join(__dirname, outputFolder)
    },
    port: 3000,
    open: true,
    liveReload: true
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve(entryFolder, "assets", "scissors.svg")
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, entryFolder, "assets"),
          to: path.resolve(__dirname, outputFolder, "src", "assets")
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]]
          }
        }
      }
    ]
  }
};
