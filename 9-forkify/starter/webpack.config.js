const path = require('path');

Node.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(_dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    node: 'development'
};