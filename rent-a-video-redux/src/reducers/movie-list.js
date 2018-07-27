import * as ACTIONS from '../actions/constants';
import initialState from './init';

export const movieList = ( curState = initialState, action ) => {
    let newState;

    switch( action.type ) {
        case ACTIONS.FETCH_MOVIES_PAGE:
            newState = {
                ...curState,
                nextPage: action.payload.pageNumber,
                nextType: action.payload.type,
                nextSearch: action.payload.search,
                totalResults: null,
                loading: true,
                error: null
            };
            break;
        case ACTIONS.FETCH_MOVIES_PAGE_SUCCESS:
            newState = {
                ...curState,
                lastSearch: curState.nextSearch,
                movies: action.payload.movies,
                curPage: curState.nextPage,
                curType: curState.nextType,
                curSearch: curState.nextSearch,
                nextPage: null,
                nextType: null,
                nextSearch: null,
                totalResults: action.payload.totalResults,
                loading: false,
                error: false
            };
            break;
        case ACTIONS.FETCH_MOVIES_PAGE_FAILURE:
            newState = {
                ...curState,
                nextPage: null,
                nextType: null,
                nextSearch: null,
                loading: false,
                error: action.payload.error
            };
            break;
        case ACTIONS.UPDATE_SEARCH_KEY:
            newState = {
                ...curState,
                curSearch: action.payload.searchKey
            };
            break;
        default:
            newState = curState;
    }

    return newState;
};