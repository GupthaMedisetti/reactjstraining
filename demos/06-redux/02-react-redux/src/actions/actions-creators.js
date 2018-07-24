import { INCREMENT, DECREMENT } from './actions';

export function incrementAction( step ) {
    return {
        type: INCREMENT,
        payload: {
            step: step
        }
    };
}

export function decrementAction( step ) {
    return {
        type: DECREMENT,
        payload: {
            step: step
        }
    };
}