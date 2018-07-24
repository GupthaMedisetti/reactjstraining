import { connect } from 'react-redux';
import Display from '../components/Display';

function mapStateToProps( state, ownProps ) {
    return {
        count: state.counter.count
    };
}

const DisplayContainer = connect( mapStateToProps )( Display );

export default DisplayContainer;
