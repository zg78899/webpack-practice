import 'normalize.css';
import style from './index.css';

function component(){
  const element = document.createElement('div');
  element.innerHTML = 'Hello world';
  console.log(style);
  element.classList  = style.helloWebpack;
  return element;
};
document.body.appendChild(component());