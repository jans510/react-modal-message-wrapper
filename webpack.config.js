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
    resolve: {
        extensions: ['', '.js', 'jsx']
    },
    eslint: {
        configFile: '.eslintrc'
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    module: {
        preLoaders: [
            { test:/\.jsx?$/, exclude: /node_modules/, loader: 'eslint' }
        ],
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
            {test: /\.less$/, exclude: /node_modules/, loaders: ['style', 'css', 'less']},
        ]
    }
};
