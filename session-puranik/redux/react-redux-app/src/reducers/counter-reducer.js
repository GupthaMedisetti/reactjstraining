import { INCREMENT, DECREMENT, FETCH_PRODUCT, FETCH_PRODUCT_SUCCESS } from '../actions/actions-constants';
import { initialCounterState } from '../store/initial-state';

export default ( curState = initialCounterState, action ) => {
    /* returns new state (without modifying anyting in old state) */
    // curState.result++ // DO NOT DO THIS
    
    let newState; // reference for new state object

    console.log( 'state passed to counter reducer : ', curState );

    switch( action.type ) {
        case INCREMENT:
            newState = { // we make sure not to modify current state in any way (hence a new object is being created)
                ...curState,
                result: curState.result + 1 // we make sure not to modify current state in any way (hence no ++ used)
            };
            break;
        case DECREMENT:
            newState = {
                ...curState,
                result: curState.result - 1
            };
            break;
        case FETCH_PRODUCT:
            newState = {
                ...curState,
                loading: true,
                product: null
            };
            break;
        case FETCH_PRODUCT_SUCCESS:
            newState = {
                ...curState,
                loading: false,
                product: action.payload.product
            }
            break;
        default:
            return curState; // if the reducer does not know what to do with the action then return the current state object as such
    }

    return newState; // return the new object
};