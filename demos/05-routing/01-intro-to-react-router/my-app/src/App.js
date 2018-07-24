import React, { Component } from 'react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <ul>
                <li><NavLink exact activeClassName="active-link" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active-link" to="/about">About us</NavLink></li>
                <li><NavLink exact activeClassName="active-link" to="/contact">Contact us</NavLink></li>
                <li><NavLink exact activeClassName="active-link" to="/sign-in">Sign in</NavLink></li>
            </ul>

            <div style={{margin: '40px'}}>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={ContactUs} />
                    <Route path="*" render={() => {
                        return (
                            <h1>Page not found</h1>
                        );
                    }} />
                </Switch>
            </div>
        </div>
    );
  }
}

export default App;