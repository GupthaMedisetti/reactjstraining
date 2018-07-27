import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <h1>Harman Connected Services</h1>
                <hr />
                <div>
                    <Link to="/">Home</Link>
                    &nbsp;&nbsp;
                    <Link to="/services">Services</Link>
                    &nbsp;&nbsp;
                    <Link to="/contact-us">Contact us</Link>
                </div>
            </div>
        );
    }
}