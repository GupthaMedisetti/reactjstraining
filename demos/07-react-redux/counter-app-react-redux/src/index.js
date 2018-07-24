import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

import counterReducer from './reducers/Counter';
import loginFormReducer from './reducers/LoginForm';

let appStore = createStore(combineReducers(
    {
        counter: counterReducer,
        loginForm: loginFormReducer
    }
));

ReactDOM.render( 
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
