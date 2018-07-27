import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

export class ContactUs extends Component {
    render() {

        let { url } = this.props.match;

        return (
            <div>
                <Link to={url + '/phone'}>Phone</Link>
                &nbsp;&nbsp;
                <Link to={url + '/address'}>Address</Link>
                <Route path={ url + '/phone'} exact render={() => <p>Phone number is 9876543210</p>} />
                <Route path={ url + '/address'} exact render={() => <p>Address is #3A, Sadarmangala, Whitefield, Bangalore</p>} />
                
            </div>
        );
    }
}