import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <div>
                <h1 id="el-count">{this.props.count}</h1>
            </div>
        );
    }
}