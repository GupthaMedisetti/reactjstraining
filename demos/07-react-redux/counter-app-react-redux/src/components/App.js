import React, { Component } from 'react';
import DisplayContainer from '../containers/Display';
import LoginFormContainer from '../containers/LoginForm';

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            counter: 0
        };
        this.increment = this.increment.bind( this );
        this.decrement = this.decrement.bind( this );
    }

    increment() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }

    decrement() {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    }

    render() {
        return (
            <div>
                <LoginFormContainer increment={this.increment} decrement={this.decrement} />
                <DisplayContainer counter={this.state.counter} />
            </div>
        );
    }
}

export default App;
