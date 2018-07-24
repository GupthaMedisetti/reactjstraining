import React, { Component } from 'react';

class Display extends Component {
    constructor( props ) {
        super( props );
    } 

    render() {
        return (
            <h1 id="counter" ref={( node ) => this.counter = node}>{this.props.count}</h1>
        );
    }
}

export default Display;
