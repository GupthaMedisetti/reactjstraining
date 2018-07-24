import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <h1 id="counter" ref={( node ) => this.counter = node}>{this.props.counter}</h1>
        );
    }
}

export default Display;
