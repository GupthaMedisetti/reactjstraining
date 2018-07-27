import { createStore, combineReducers, applyMiddleware } from 'redux';

import counterReducer from '../reducers/counter-reducer';
import profileReducer from '../reducers/profile-reducer';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

// store for the app
export default createStore( 
    combineReducers(
        {
            counter: counterReducer,
            profile: profileReducer
        }
    ),
    composeWithDevTools( applyMiddleware( thunk ) )
);