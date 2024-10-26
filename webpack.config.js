const path = require('path');

module.exports = {
    mode: 'development',
    entry: './bartender.js',  // Update this path to your main JS file
    output: {
        filename: 'bundle.js',  // The output file
        path: path.resolve(__dirname, 'dist'),  // Output directory
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
};
