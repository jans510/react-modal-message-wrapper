var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/jsx/modal.jsx'
    ],
    output: {
        path: __dirname + '/dist/',
        filename: 'react-modal-message-wrapper.js',
        library: 'react-modal-message-wrapper.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', 'jsx']
    },
    eslint: {
        configFile: '.eslintrc'
    },
    externals: {
        react: 'react',
        'react-bootstrap': 'react-bootstrap'
    },
    module: {
        preLoaders: [
            { test:/\.jsx?$/, exclude: /node_modules/, loader: 'eslint' }
        ],
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
        ]
    }
};
