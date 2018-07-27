import React, { Component } from 'react';
import axios from 'axios';

export default class Profile extends Component {
    render() {
        console.log( this.props );
        return (
            <div id="profile-part">
                <form>
                    Name: <input type="name" name="name" id="name" />
                    Age: <input type="age" name="age" id="age" />
                </form>
                <output id="result-name"></output> / <output id="result-age"></output>
            </div>
        );
    }
}