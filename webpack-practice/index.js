import 'normalize.css';
import style from './index.css';
import $ from 'jquery';


function component(){
  const element = document.createElement('div');
  element.innerHTML = 'Hello world';
  console.log(style);
  element.classList  = style.helloWebpack;
  return element;
};
document.body.appendChild(component());

console.log(`${style.helloWebpack}`.length);
console.log(`IS_PRODUCTION MODE:${IS_PRODUCTION}`)