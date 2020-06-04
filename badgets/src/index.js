// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, React Badges!</h1>;
// const element = React.createElement(
//   'a',
//   { href: 'https://google.com' },
//   'Ir a Google'
// );
const name = 'Daniel';
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola soy, {name}</h1>;

const jsx = (
  <div>
    <h1>Hola, soy daniel</h1>
    <p>Agilista</p>
  </div>
);

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola, soy Daniel'),
  React.createElement('p', {}, 'Agilista!!!')
);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
