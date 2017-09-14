var webpack = require('webpack');
var path = require('path');
var MODE = process.env.MODE;
module.exports = {

    resolve: {
        alias: {}
    },

    devServer: {
        port: 3000,
        historyApiFallback: true
    },

    entry: {
        app: path.resolve(__dirname, './src/app/core/module.js')
    },

    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules(?!\/(ng-annotate|venqueuer|foreach-promise))|bower_components)/,
                use: ["ng-annotate-loader", "babel-loader?presets[]=es2015"]
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader?limit=10000&mimetype=application/font-woff"] },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["file-loader"] },
            {
                test: /\.svg$/,
                use: ['svg-loader?{png:{scale:2}}']
            },
            { test: /\.(png|jpg)$/, use: ['url-loader?limit=8192'] },

            { test: /\.js$/, loader: "webpack-strip?strip[]=console.log" }

        ]
    },

    plugins: [

        // OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
        new webpack.optimize.OccurrenceOrderPlugin()

    ]

};