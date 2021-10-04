module.exports = {
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

