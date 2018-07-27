import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

import MovieList from './containers/MovieList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <MovieList />
            </div>
        );
    }
}

export default App;