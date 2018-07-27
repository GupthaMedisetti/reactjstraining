import { createStore, combineReducers, applyMiddleware } from 'redux';

// store for the app
export default store = createStore( 
    combineReducers(
        {
            counter: counterReducer,
            profile: profileReducer
        }
    ),
    applyMiddleware( logger )
);