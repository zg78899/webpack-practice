//common 파일에는 공통적으로 사용하는 코드들만을 남김
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


const postcssLoader = {
  loader:'postcss-loader',
  options: {
    config: {
      path: 'postcss.config.js'
    }
  }
};

const isProduction = process.env.NODE_ENV === 'PRODUCTION';

//data:mediatype;base64,data

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js', // has contenthash chunkhash
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [ //filename.module.scss =>css modules //filename.scss => global
      // {
      //   test: /\.css$/i,
      //   use:[
      //   {
      //     loader:MiniCssExtractPlugin.loader
      //   }
      //   ,{
      //     loader: 'css-loader',
      //     options:{
      //       modules: true
      //     }
      //   }]
      // },
      {
        test: /\.s?css$/,
        oneOf: [ //여러 룰 중에 하나의 룰이 작동하게 해주기 위함
          {
            test: /\.module\.s?css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader //3번째 외부 파일이 됨
              },
              {
                loader: 'css-loader',// 2번째 
                options: {
                modules: true
                }
              },
              postcssLoader,
              'sass-loader' //1번째 
            ]
          },{
            use:[ //global-loader
              MiniCssExtractPlugin.loader,
              'css-loader',
              postcssLoader,
              'sass-loader'
            ]
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      }, {
        test: /\.(png|jpg?g|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name() {
              if (!isProduction) {
                return '[path][name].[ext]'
              }
              return '[contenthash].[ext]'
            },
            publicPath: 'assets/',
            outputPath: 'assets/'
          }
        }],
      }, {
        test: /\.svg$/,
        use: [{
          //문서의 요청 리소스가 줄어 리소스 를 아낄 수 있다.
          loader: 'url-loader',
          options: {
            //파일크기에 따라, 제한을 걸어둠,바이트 크기의 숫자가 들어감
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack',
      template: './template.hbs',
      meta: {
        viewport: "width=device-width, initial-scale=1.0"
      },
      minify: isProduction ? {
        collapseWhitespace: true,
        useShortDoctype: true,
        removeScriptTypeAttributes: true
      } : false
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      IS_PRODUCTION: isProduction,
    }),
  ],
}