import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

function mapStateToProps( state, ownProps ) {
    return {
        count: state.counter.count
    };
}

const LoginFormContainer = connect()( LoginForm );

export default LoginFormContainer;