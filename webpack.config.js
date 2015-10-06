var webpack = require('webpack');

module.exports = {
    entry: [
        __dirname+"/src/base.js"
    ],
    output: {
        filename: "app.js",
        path: __dirname+'/assets/js',
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|gif|woff2)$/i, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'base64-font-loader'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};