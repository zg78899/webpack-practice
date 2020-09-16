const PI= 3.14;
const getCircleArea = r =>r*r*PI;
const getRactangle = r=> r *r
//node환경의 common.js
//1.module객체 방식 
module.exports = {
  PI,
  getCircleArea,
  getRactangle
}

//exports 방식
// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

//esm 방식
// export {
//   PI,
//   getCircleArea,
//   getRactangle
// }