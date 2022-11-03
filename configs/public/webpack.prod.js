const { merge } = require("webpack-merge");
const [commonBrowserConfig] = require("./webpack.common");

module.exports = [
    merge(commonBrowserConfig, {
        mode: "production"
    })
];
