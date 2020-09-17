//__dirname(파일을 담고있는 폴더의 절대 경로), path name
const path = require('path');
module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  target:'node'
}