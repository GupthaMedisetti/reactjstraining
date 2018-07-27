import React, { Component } from 'react';

export default class Counter extends Component {
    constructor( props ) {
        super( props )

        console.log( this.props );
    }

    increment = () => {
        this.props.increment();
    };

    decrement = () => {
        this.props.decrement();
    };

    fetchProduct( id ) {
        this.props.fetchProduct( id );
    }
    
    componentDidMount() {
        this.fetchProduct( 1 );
    }

    render() {
        console.log( this.props );
        return (
            <div id="counter-part">
                <button id="btn-increment" onClick={this.increment}>Increment</button>
                <br />
                <button id="btn-decrement" onClick={this.decrement}>Decrement</button>
                <br />
                Result: <output id="result">{this.props.result}</output>
                <div>
                {this.props.product ?  this.props.product.name : null}
                </div>
            </div>
        );
    }
}