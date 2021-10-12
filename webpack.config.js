const webpack = require('webpack')
module.exports = {
   devServer: {
      proxy:{
         '*': 'http://[::1]:3000/',
         "secure": false,
         "changeOrigin":true,
      }
   },
   entry:['react-hot-loader/patch','./app/index'],
   output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
   },
   module:{
      rules:[
         {
         test: /\.(js|jsx)$/,
         use:'babel-loader',
         exclude: /node_modules/
         },  
         {
         test: /\.css$/,
         use: ['style-loader','css-loader']
         }
      ],
   },
   resolve: {
        alias: {
            process: 'process/browser',
            stream: "stream-browserify",
            zlib: "browserify-zlib"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ]
}

