import { connect } from 'react-redux';
import Profile from '../components/Profile';

function mapStateToProps( state ) {
    return state.profile;
}

export default connect( mapStateToProps /*, mapDispatchToProps */ )( Profile );