const {merge} = require('webpack-merge');
const common  = require('./webpack.common');
const StyleLintPlugin  = require('stylelint-webpack-plugin');

const config ={
  mode:'development',
  devServer:{
    open:false,
    overlay:true,
    historyApiFallback:{
      index:'./index.html',
      rewrites:[
        {from:/^\/subpage$/,to:'subpage.html'},
        {from: /./ ,to:'404.html'}
      ]
    },
    port:3333,
  },
  plugins:[
    new StyleLintPlugin()
  ]
};

module.exports = merge(common,config);
