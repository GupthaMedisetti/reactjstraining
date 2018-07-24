import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

import App from './App';
import Timer from './shared/Timer';
import ShoppingList from './shared/ShoppingList';

import registerServiceWorker from './registerServiceWorker';

// Part 1
// let timerElement = <Timer />;
// console.log( 'timerElement =', timerElement );
// let timerComponentInstance = ReactDOM.render(timerElement, document.getElementById('root'));
// setInterval( () => console.log( 'timeComponentInstance = ', timerComponentInstance ), 1000 );

// Part 2
let thingsToBuy = [
    { name: 'Tomato Ketchup', quantity: 1 },
    { name: 'Notebook', quantity: 2 },
    { name: 'Chocolate Bars', quantity: 10 }
];

function itemClickHandler( name, quantity ) {
    console.log( `Need to purchase ${quantity} of ${name}` );
}

ReactDOM.render(
    <ShoppingList title="Things to buy at More Megastore" couponCodeOrDiscount="30" items={thingsToBuy} onClick={itemClickHandler}  />,
    document.getElementById( 'root' )
);

registerServiceWorker();