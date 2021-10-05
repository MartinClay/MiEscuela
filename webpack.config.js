module.exports = {
   devServer: {
      proxy:{
         '*': 'http://[::1]:3000/',
         "secure": false,
         "changeOrigin":true,
      }
   },
   entry:'./app/index',
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
   }
}

