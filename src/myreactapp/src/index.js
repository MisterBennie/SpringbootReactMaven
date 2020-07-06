import React from 'react';
import ReactDOM from 'react-dom';
//import App from './js/Person';
import App from './Day4/SinglePointOfThruth/App';
//import App from './Day4/SingleRoot/App';
//import App from './Day4/className/App';
//import App from './Day4/dynamicClass/App';
//import App from './Day4/inlineStyles/App';
//import App from './Day4/renderLists/App';
//import App from './Day4/conditionalRendering/App';
//import App from './Day4/conditionalRendering2/App';
//import App from './Day4/bindingMethods/App';
//import App from './Day4/bindingMethodsWithParameter/App';
//import App from './Day4/children/App';
//import App from './Day4/propsVsState/App';
//import App from './Day4/EventHandler';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 