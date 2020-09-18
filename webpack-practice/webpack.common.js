//common 파일에는 공통적으로 사용하는 코드들만을 남김
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 entry:'./index.js',
 output:{
   filename:'[name].[chunkhash].js', // has contenthash chunkhash
   path:path.resolve(__dirname,'dist')
 },
 module:{
  rules:[
    {
      test: /\.css$/i,
      use:[
      {
        loader:MiniCssExtractPlugin.loader
      }
      ,{
        loader: 'css-loader',
        options:{
          modules: true
        }
      }]
    },
    {
      test:/\.hbs$/,
      use:['handlebars-loader']
    }
  ]
 },
 plugins:[
   new MiniCssExtractPlugin({
     filename:'[contenthash].css'
   }),
  
   new HtmlWebpackPlugin({
     title:'Webpack',
     template:'./template.hbs',
     meta:{
       viewport:"width=device-width, initial-scale=1.0"
     },
     minify:{
       collapseWhitespace:true,
       useShortDoctype:true,
       removeScriptTypeAttributes:true

     }
   }),
   new CleanWebpackPlugin(),
 ],
}