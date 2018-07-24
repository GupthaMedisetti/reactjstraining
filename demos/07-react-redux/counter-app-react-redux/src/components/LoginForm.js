import React, { Component } from 'react';
import { incrementAction, decrementAction } from '../actions/Counter';

class LoginForm extends Component {
    constructor( props ) {
        super( props );
        this.increment = this.increment.bind( this );
        this.decrement = this.decrement.bind( this );
    }

    increment() {
        this.props.dispatch( incrementAction() );
    }

    decrement() {
        this.props.dispatch( decrementAction() );
    }

    render() {
        return (
            <form>
                <input type="button" value="Increment" onClick={this.increment} />
                &nbsp;
                <input type="button" value="Decrement" onClick={this.decrement} />
            </form>
        );
    }
}

export default LoginForm;