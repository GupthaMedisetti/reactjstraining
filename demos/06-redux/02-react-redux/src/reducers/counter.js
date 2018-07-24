import { INCREMENT, DECREMENT } from '../actions/actions';

export default function counterReducer( prevState = { count: 0 }, action ) {
    let newState = { ...prevState };

    switch( action.type ) {
        case INCREMENT:
            newState.count = prevState.count + action.payload.step;
            break;
        case DECREMENT:
            newState.count = prevState.count - action.payload.step;
            break;
    }

    return newState;
}