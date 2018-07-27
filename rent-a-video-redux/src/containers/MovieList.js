import { connect } from 'react-redux';
import MovieListComponent from '../components/MovieList';

function mapStateToProps( state, ownProps ) {
    return state;
}

const MovieList = connect( mapStateToProps )( MovieListComponent );

export default MovieList;