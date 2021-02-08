const path = require('path')

module.exports = {
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    mode: 'production'
}