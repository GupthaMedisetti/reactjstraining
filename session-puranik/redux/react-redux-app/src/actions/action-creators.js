import { INCREMENT, DECREMENT, UPDATE_NAME, UPDATE_AGE } from './actions-constants';

let increment = () => ({
    type: INCREMENT /* no extra info except type is required in this simple case */
});

let decrement = () => ({
    type: DECREMENT
});

let updateName = ( name ) => ({
    type: UPDATE_NAME,
    payload: {
        name: name
    }
});

let updateAge = ( age ) => ({
    type: UPDATE_AGE,
    payload: {
        age: age
    }
});

export {
    increment,
    decrement,
    updateName,
    updateAge
}