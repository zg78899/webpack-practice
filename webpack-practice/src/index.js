import 'normalize.css';
import style from './index.css';
import background from './images/background.jpg';
import bearSvg from './images/bear.svg'
import $ from 'jquery';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello world';

  const imgElement = document.createElement('img');
  imgElement.src = bearSvg;

  console.log(bearSvg);
  console.log(style);
  element.appendChild(imgElement);
  element.classList = style.helloWebpack;
  return element;
};
document.body.appendChild(component());

console.log(`${style.helloWebpack}`.length);
console.log(`IS_PRODUCTION MODE:${IS_PRODUCTION}`) 