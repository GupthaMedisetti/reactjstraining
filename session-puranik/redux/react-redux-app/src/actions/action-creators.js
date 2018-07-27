import { INCREMENT, DECREMENT, UPDATE_NAME, UPDATE_AGE, FETCH_PRODUCT, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from './actions-constants';

import axios from 'axios';

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

let fetchProductActionCreator = ( id ) => ({
    type: FETCH_PRODUCT,
    payload: {
        id: id
    }
});

let fetchProductSuccess = ( product ) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: {
        product: product
    }
});

let fetchProduct = ( id ) => {
    return ( dispatch ) => {
        dispatch( fetchProductActionCreator( id ) );

        axios.get( 'http://localhost:4201/products/' + id )
            .then(
                function( response ) {
                    dispatch( fetchProductSuccess( response.data ) );
                }
            )
            .catch(
                // function( err ) {
                //     dispatch( fetchProductFailure( err ) );
                // }
            )
    }
}

export {
    increment,
    decrement,
    updateName,
    updateAge,
    fetchProduct
}