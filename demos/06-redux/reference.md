## Three principles Redux is based on
- State is stored centrally and is the single source of truth
- State is read-only and can be changed only by emitting an action
- All changes to state are made by pure functions

## Concepts behind Redux
- Immutability
    * In JS, objects (includes arrays, functions etc.) are mutable, primitives are immutable
    * Some arrays methods are immutable and some are mutable
    * In Redux we never use mutable methods to change the state of a component
- Pure functions
    * Do not alter arguments
    * Do not use global state and non-deterministic methods (eg. Math.random())
    * No side effects - no change in global state, no DB and network calls
    * Always give the same output for same inputs
    * Pure functions always return a value
- Flux pattern
    * React apps do not follow the MVC pattern
    * Building blocks - Actions with Action Creators, Dispatcher, Stores with reducers, Views
- MVC vs Flux
    * Many models vs few stores
    * Bi-directional data flow between View and Controller, and Model and Controller vs Uni-directional flow (store to view allowed. View however cannot update store - it happens only indirectly via action and dispatcher)

## Redux Advantages
- Its architecture helps structure interactive applications and avoid spaghetti code
- Predictable state management system
- Centralized state management (via Redux or alternatives like Flux and Mobx) would definitely help (and required) by large scale applications.
- A hybrid approach to state management is possible (but not recommended) - use Redux store to store info required by many components (eg. authentication status for users). OTOH is a state information is shared between only an element and its parent then we can easily use React state to store state info.

## API
* Action creators take inputs and return an action object with type (string) and any other properties (typically a property called payload).
* store is create using using Redux.createStore( reducer ) or store.createStore( combineReducers( { reducer1, reducer2, ... } ) ) . The reducer function gets currentState and action and returns a new state (it is a pure function and should not mutate currentState). All reducers are called for every action dispatched. A reducer is called once when the store is created and it should initialize state in this call. combineReducers() creates a root reducers that manages a state tree - every branch of the state tree is managed by a separate reducer.
* store.subscribe() takes a callback that is invoked on state changes - it updates the views
* store.getState() get the current state
* store.dispatch() is passed action object during the call - get the action object by calling the action creator.

## Applying Redux middleware
Import applyMiddleware function and pass it as trailing argument to createStore() like so.
```
createStore( reducer, applyMiddleware( mw1, mw2, ... ) );
```
It is a hook that sits in-between the dispatch of action (using store.dispatch()) and reducer. It is called before the dispatcher calls the reducer on some action. Before reducer is called, middleware are applied in the order thet are passed to applyMiddleware. After the call of reducer, the remaining code of the middleware (after call to next()) is executed in reverse order.

A middleware is defined as
```
function mw( store ) {
    return function( next ) {
        return function( action ) {
            // write stuff that should be executed before the reducer executes, here 
            next( action );
            // write stuff that should be executed after the reducer executes, here 
        }
    }
}
```
or (in ES2015)
```
const mw = store => next => action => {
    // write stuff that should be executed before the reducer executes, here 
    next( action );
    // write stuff that should be executed after the reducer executes, here 
};
```
Since it gets action, it can modify the action if required. Calling next( action ) results in reducer getting executed. Not caling next cancels the dispatched action - so nothing further, including the reducer, will execute - most probably this is something you DO NOT want to happen - so make sure you call next() unless you really want to cancel the action.

A popular logging middleware is ```redux-logger``` which defines the logger middleware with the name ```logger```.
```
$ npm install --save redux-logger
```

## Installation
```
$ npm install --save redux
```

## References:
* [Overview of the Flux Pattern on the Flux site](https://facebook.github.io/flux/docs/in-depth-overview.html)
* [Redux site](https://redux.js.org/)
* [Middleware in Redux](https://redux.js.org/advanced/middleware)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)

## Copyright notice
React JS Demos v1.0.0  
Copyright Prashanth Puranik  
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. For permission requests, write to the publisher, addressed "Attention: Permissions Coordinator" at the address below.  
Prahara Consulting Private Limited  
204, Sri Vari Enclave  
Horamavu Agara Road, Horamavu, Bangalore.   
puranik@digdeeper.in  
Date: 2018-02-28T17:24Z  