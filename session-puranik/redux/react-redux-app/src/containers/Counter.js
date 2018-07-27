import { connect } from 'react-redux';
import Counter from '../components/Counter';

import { increment, decrement, fetchProduct } from '../actions/action-creators';

function mapStateToProps( state ) {
    return state.counter;
}

function mapDispatchToProps( dispatch ) {
    return {
        increment : function() {
            dispatch( increment() )
        },
        decrement : function() {
            dispatch( decrement() )
        },
        fetchProduct: function( id ) {
            dispatch( fetchProduct( id ) )
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Counter );