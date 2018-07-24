import React from 'react';
import { incrementAction, decrementAction } from '../actions/actions-creators';

export default class Form extends React.Component {
    constructor( props ) {
        super( props );
        this.increment = this.increment.bind( this );
        this.decrement = this.decrement.bind( this );
    }

    increment() {
        this.props.dispatch( incrementAction( parseInt( this.node.value ) ) )
    }

    decrement() {
        this.props.dispatch( decrementAction( parseInt( this.node.value )  ) );
    }

    render() {
        return (
            <div>
                <input type="text" id="step" placeholder="10" ref={( node ) => this.node = node}  />
                <input type="button" id="btn-increment" value="Increment" onClick={this.increment} />
                <input type="button" id="btn-decrement" value="Decrement" onClick={this.decrement} />
            </div>
        );
    }
}