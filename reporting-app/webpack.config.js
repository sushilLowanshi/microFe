const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  // mode: "development",
   mode: "production",
  devServer: {
    port: 3003,
      historyApiFallback: {
    index: "/index.html",   // make sure it always falls back
  },
  hot: true,
  open: true,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reporting",
      filename: "remoteEntry.js",
      exposes: {
        // "./ReportingApp": "./src/bootstrap.tsx", 
        "./ReportingApp": "./src/App",
      },
      // remotes: {
      //   host: "host@http://localhost:3000/remoteEntry.js", // remote host URL
      // },
      shared: {
  react: { singleton: true, eager: true, requiredVersion: "18.2.0" },
  "react-dom": { singleton: true, eager: true, requiredVersion: "18.2.0" },
  "react-router-dom": { singleton: true,eager: true },
 "react-redux": { singleton: true, requiredVersion: "9.2.0" },
  "@reduxjs/toolkit": { singleton: true, requiredVersion: "2.9.0" },
},

    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
