import React, { Component } from 'react';

import { Nav } from './Nav';

export class Services extends Component {
    render() {
        return (
            <div>
                Some of the services we offer are
                <ul>
                    <li>Digital transformation</li>
                    <li>Agile and DevOps Services</li>
                    <li>Product Engineering</li>
                </ul>
            </div>
        );
    }
}