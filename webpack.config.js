const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "index.html",
});

const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
    mode: "development",
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
    },
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, '/')
    //     }
    // },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            {
                test: /\.(png|jpj|gif)/,
                loader: "url-loader",
                options: {
                    esModule: false,
                    limit: 300000,
                },
                type: "javascript/auto",
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },

            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },
};