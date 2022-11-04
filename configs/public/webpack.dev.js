const { merge } = require("webpack-merge");
const [commonBrowserConfig] = require("./webpack.common");

module.exports = [
    merge(commonBrowserConfig, {
        mode: "development",
        module: {
            rules: [{
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }]
        },
        devtool: "source-map",
        devServer: {
            compress: true,
            port: 8775,
            static: false
        }
    })
];
