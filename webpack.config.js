const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },   performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
 module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource'
    
     },
    ]
 },
};