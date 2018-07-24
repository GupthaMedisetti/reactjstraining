import { connect } from 'react-redux';
import Display from '../components/Display';


function mapStateToProps( state, ownProps ) {
    console.log( state );
    return {
        count: state.count
    };
}

export let DisplayContainer = connect( mapStateToProps )( Display );