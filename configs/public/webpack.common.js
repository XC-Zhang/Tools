const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const webpack = require("webpack");

/**
 * @type {webpack.Configuration}
 */
 const browserConfig = {
    entry: "./src/public/index.ts",
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "ts-loader"
        }]
    },
    output: {
        path: join(__dirname, "..", "..", "dist", "public"),
        publicPath: "/tools/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            base: "/tools/",
            template: "./src/public/index.html"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        fallback: {
            path: "path-browserify",
            fs: false,
            crypto: false
        }
    }
};

module.exports = [
    browserConfig
];