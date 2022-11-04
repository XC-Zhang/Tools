const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const [commonBrowserConfig] = require("./webpack.common");

module.exports = [
    merge(commonBrowserConfig, {
        mode: "production",
        module: {
            rules: [{
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
    })
];
