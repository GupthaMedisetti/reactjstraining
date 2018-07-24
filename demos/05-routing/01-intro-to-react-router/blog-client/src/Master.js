import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Master extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get( 'http://localhost:4201/posts' )
            .then( posts => {
                console.log( posts.data );
                return posts.data;
            })
            .then( posts => this.setState( { posts } ) )
            .catch( error => console.log( error ) );
    }

    render() {
        return (
            <div className="master">
                <ul>
                    {this.state.posts && this.state.posts.map( post => (
                        <li key={post.id}>
                            <NavLink activeItemClass=""to={'/posts/' + post.id}>{post.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Master;