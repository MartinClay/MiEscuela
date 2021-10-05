module.exports = {
   devServer: {
      proxy:{
         '/LogIn': 'http://locahost:3000/LogIn'
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

