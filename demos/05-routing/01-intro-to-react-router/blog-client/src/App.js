import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Master from './Master';
import Detail from './Detail';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Master />
                    <Route path="/" exact render={() => (
                        <h1>
                            Stadium
                            <br />
                            <small>A place to voice your thoughts and ideas</small>
                        </h1>
                    )} />
                    <Route path="/posts/:postId" component={Detail} />
                </div>
            </Router>
        );
    }
}

export default App;
