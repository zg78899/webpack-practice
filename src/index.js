/**
 * 1.원의 넓이를 구하는 공식
 * 2.PI 정의
 * 3.공식을 통해 결과 얻기 
 */
//module로 함수를 가져옴 common js 방식
// const {getCircleArea} = require('./mathUtil');

// import {getCircleArea} from './mathUtil';

// const result = getCircleArea(2);
// console.log(result);

const {getCircleArea, getRactangle}= require('./mathUtil');
const { logFigureError, logResult ,logInput} = require('./log');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('넓이를 구하고자 하는 도형의 종류를 입력해 주세요.(정사각형 , 원) : ', figure => {
  console.log(`선택한 도형 : ${figure}`);
  switch (figure) {
    case '정사각형':
      rl.question('변의 길이를 말해 주세요', input => {
        console.log(logInput(input));
        console.log(logResult(figure,getRactangle(input)));
        rl.close();
      });
    case '원':
      rl.question('반지름의 길이를 입력해 주세요', input => {
        console.log(logInput(input));
        console.log(logResult(figure,getCircleArea(input)));
        rl.close();
      });
      break;
    default:
      console.log(
        logFigureError
      );
      rl.close();
  }
}
)
