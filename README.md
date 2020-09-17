# **module**  

1.  코드의 재사용성이 증가한다. 

2. 코드의 관리가 편해진다.
3. 코드를 모듈화하는 기준이 명확해야한다.

## **사용방법**

1. 내보내는 경우(export ) : 

   ~~~javascript
module.exports = {
   	변수 
}  
   ~~~

    가져오는 경우(import):

   ~~~javascript
   const 변수  = require('exports하는경로'); 
   ~~~

node index.js: index.js 파일을 node로 확인



2.exports.변수 = 변수;

import경우:const 변수  = require('exports하는경로');



3.esm(npm i esm); node -r esm index.js

export , export default

import {변수 } from 'export 파일의 상대 경로' 



## Module의 종류

1. Built-in Core Module(예:Node.js module)

2. Community-based Module (예:NPM)



#  bundle이란? 

 webpack을 통해 한 파일로 여러종류의 module들을 bundle하여 하나의 파일로 만든다.

1. 모든 모듈을 로드하기 위해 검색하는 시간이 단축된다. 

2. 사용하지 않는 코드를 제거해 준다.

3. 파일의 크기를 줄여준다.

 

# webpack이란 ?

webpack은 module bundler이다. 

1. webpack의 기본 구조
**entry :** 모듈의 의존 관계를 이해하기 위한 시작점을 설정
**output:** Webpack이 생성하는 번들 파일에 대한 정보를 설정(번들 파일의 위치 설정)

webpack-cli 방식
1)npm init -y
2)npm install webpack webpack-cli --save-dev
3)번들 파일을 만드어줌(entry(./src/index.js)와 output(dist 폴더에 위치 시켜 주어야한다.)을 설정해 주어야함 )  npx webpack (에러가 발생) / 다시 npx webpack(에러발생 ,node module에 내장된 객체를 읽지 못함)->target(webpack이 어떤 환경에서 실행되는지를 알려줌)을 지정-> npx weback --target=node ->dist파일에 main.js파일이 생성

-웹 webapack 설정 파일에서 설정 webpack.config.js파일 생성
__dirname은 절대 파일의 절대 경로를 나타냄

~~~javscript
const path = require('path');
module.exports = {
  entry:'./src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  target:'node'
};
~~~

기본 구조:**mode**

1.Package.json --save-dev,--save

​	1)애플리케이션 내부에 직접 포함되는 모듈( dependencies):--save

​	2)개발과정에서 필요한 모듈(devDependencies):--sace-dev

2.개발환경과 프로덕션 환경 

3.Mode & Webpack-merge

기본구조:**Loader** : 다양한 모둘들을 입력받아 처리하는 역할 

~~~javascript
module.exports={
  module:{
    rules:[loader1,loader2]
  }
}
~~~

2.  Webpack의 설정 
3. Webpack의 활용

기본 구조 : **plugin**

npm i html-webpack-plugin -D(--save-dev)

~~~javascript
module.exports = {
  plugins:[new Plugin({...option}),...];
}
~~~

  

handlebars: npm i handlebars -D

webapck & caching 