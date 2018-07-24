import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import counterReducer from './reducers/counter';

import { Provider } from 'react-redux';

let appStore = createStore( counterReducer );

ReactDOM.render( (
        /** <Route /> will go within <Provider /> */
        <Provider store={appStore}>
            <App />
        </Provider>
    ), 
    document.getElementById('root')
);

console.log( appStore.getState() );