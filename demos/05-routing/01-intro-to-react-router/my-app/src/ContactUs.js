import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <h1>Contact us</h1>
                <p>
                    Sit culpa nisi sint officia ea fugiat mollit sunt ex. Irure laboris enim id sunt proident id dolor deserunt ex cupidatat magna laboris ea culpa. Lorem dolore nulla eu id Lorem laborum irure ipsum in proident duis aute veniam. Id dolore occaecat do dolor adipisicing mollit sit nostrud ut minim elit. Mollit aute ex in ea velit. Excepteur pariatur velit labore exercitation ea Lorem culpa officia exercitation duis ad.
                    <br /><br />
                    <Link to={this.props.match.url + '/phone'}>Phone</Link>
                    &nbsp;
                    <Link to={this.props.match.url + '/email'}>Email</Link>
                </p>
                <div>
                    <Switch>
                        <Route path={this.props.match.url} exact={true} render={() => "9448441478"} />
                        <Route path={this.props.match.url + '/phone'} render={() => "9448441478"} />
                        <Route path={this.props.match.url + '/email'} render={() => "puranik@digdeeper.in"} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default ContactUs;