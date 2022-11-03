const { merge } = require("webpack-merge");
const [commonBrowserConfig] = require("./webpack.common");

module.exports = [
    merge(commonBrowserConfig, {
        mode: "development",
        devtool: "eval-source-map",
        devServer: {
            compress: true,
            port: 8775,
            static: false
        }
    })
];
