import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Weather from './component/Weather'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import getReport from './component/reducer/reducers'
import * as serviceWorker from './serviceWorker';
const store=createStore(getReport,applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><Weather /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
