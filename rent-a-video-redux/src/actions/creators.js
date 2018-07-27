import axios from 'axios';
import * as ACTIONS from './constants';

const fetchMoviesPage = ( pageNumber, type, search ) => ({
    type: ACTIONS.FETCH_MOVIES_PAGE,
    payload: { pageNumber, type, search }
});

const fetchMoviesPageSuccess = ( movies, totalResults ) => ({
    type: ACTIONS.FETCH_MOVIES_PAGE_SUCCESS,
    payload: { movies, totalResults }
});

const fetchMoviesPageFailure = error => ({
    type: ACTIONS.FETCH_MOVIES_PAGE_FAILURE,
    payload: { error }
});

export const updateSearchKey = searchKey => ({
    type: ACTIONS.UPDATE_SEARCH_KEY,
    payload: { searchKey }
});

export const loadMoviesPage = ( page, type, search ) => {
    return dispatch => {
        const pageUrl = `http://www.omdbapi.com/?apikey=c76a8e00&page=${page}` + ( type ? `&type=${type}` : `` ) + ( search ? `&s=${search}` : `` );
        
        dispatch( fetchMoviesPage( page, type, search ) );

        axios.get( pageUrl )
            .then( response => response.data )
            .then( data => {
                if( data.Search ) {
                    dispatch( fetchMoviesPageSuccess( data.Search, data.totalResults ) );
                } else {
                    throw new Error( 'Something went wrong with the request.' );
                }
            })
            .catch( error => dispatch( fetchMoviesPageFailure( error ) ) );
    };
}