import React, { Component } from 'react';
import Form from './Form';
import Display from './Display';

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
                <Form increment={this.increment} decrement={this.decrement} />
                <Display counter={this.state.counter} />
            </div>
        );
    }
}

export default App;
