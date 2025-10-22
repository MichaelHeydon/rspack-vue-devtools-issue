/**
 * Unified rspack configuration for both development and production
 * Note that rspack is a new bundler that is a drop-in replacement for Webpack.
 * See https://rspack.rs/ for more information.
 */

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("@rspack/core");

module.exports = {
    mode: "development",
    entry: {
        vueTest: "./vueTest.ts",
    },
    output: {
        path: path.resolve(__dirname, "www/static/js/bundle"),
        publicPath: "/static/js/bundle/",
        filename: "[name].js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "www"),
        },
        compress: true,
        port: 8080,
        hot: true,
        open: false,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader", // to handle .vue files
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "builtin:swc-loader",
                        options: {
                            jsc: {
                                parser: {
                                    syntax: "typescript",
                                },
                            },
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".js", ".vue", ".ts", ".json"],
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
    plugins: [
        new VueLoaderPlugin(), // to handle .vue files
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
        }),
    ],
};
