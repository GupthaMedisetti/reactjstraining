import React, { Component } from 'react';
import Counter from '../containers/Counter';
import Profile from '../containers/Profile';

class App extends Component {
    render() {
        console.log( this.props );
        
        return (
            <div>
                <Counter />
                <Profile />
            </div>
        );
    }
}

export default App;