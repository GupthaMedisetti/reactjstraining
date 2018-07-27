import React, { Component } from 'react';
import './App.css';

import { Link, Route, Switch } from 'react-router-dom';

import { Nav } from './Nav';
import { Home } from './Home';
import { Services } from './Services';
import { ContactUs } from './ContactUs';
import { PageNotFound } from './PageNotFound';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <Switch>
                    <Route path={'/'} exact={true} component={Home}/>
                    <Route path={'/services'} component={Services}/>
                    <Route path={'/contact-us'} component={ContactUs}/>
                    
                    {/* you can get serviceid inside of ServiceDetail component using this.props.match.params.serviceid*/}
                    {/*<Route path={'/service/:serviceid'} component={ServiceDetail}/>*/}

                    <Route path="*" component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
