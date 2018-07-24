import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                <input type="button" value="Increment" onClick={this.props.increment} />
                &nbsp;
                <input type="button" value="Decrement" onClick={this.props.decrement} />
            </form>
        );
    }
}

export default Form;