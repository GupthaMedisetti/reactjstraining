import { UPDATE_NAME, UPDATE_AGE } from '../actions/actions-constants';
import { initialProfileState } from '../store/initial-state';

export default ( curState = initialProfileState, action ) => {
    let newState;

    console.log( 'state passed to profile reducer : ', curState );

    switch( action.type ) {
        case UPDATE_NAME:
            newState = {
                ...curState,
                name: action.payload.name
            };
            break;
        case UPDATE_AGE:
            newState = {
                ...curState,
                age: action.payload.age
            }
            break;
        default:
            return curState; // if the reducer does not know what to do with the action then return the current state object as such
    }
    
    return newState; // return the new object
};