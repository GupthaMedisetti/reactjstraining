import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';

import { movieList } from './reducers/movie-list';
import initialState from './reducers/init';

const appStore = createStore( movieList, initialState, applyMiddleware( thunk ) );

ReactDOM.render( (
        <Provider store={appStore}>
            <App />
        </Provider>
    ),
    document.getElementById( 'root' )
);
