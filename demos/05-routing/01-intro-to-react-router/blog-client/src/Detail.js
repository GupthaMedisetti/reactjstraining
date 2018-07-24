import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            post: null,
            postId: 0,
            loading: 'FETCHING'
        }
    }

    componentWillReceiveProps( nextProps ) {
        console.log( nextProps.match.params.postId );
        this.setState({
            post: null,
            postId: nextProps.match.params.postId,
            loading: 'FETCHING'
        });
    }

    getPosts() {
        if( this.state.loading === 'FETCHING' ) {
            axios.get( 'http://localhost:4201/posts/' + this.state.postId )
                .then( post => {
                    return post.data;
                })
                .then( post => this.setState( { post, loading: 'FETCHED' } ) )
                .catch( error => console.log( error ) );
            return true;
        }

        return false;
    }

    // componentDidMount() {
    //     this.getPosts();
    // }

    componentDidUpdate( prevProps, prevState ) {
        console.log( '********************************************' );
        console.log( 'this.state.loading = ', this.state.loading );
        console.log( 'prevState = ', prevState );
        console.log( 'state = ', this.state );
        
        if( !this.getPosts() ) {
            if( prevState.postId !== this.state.postId ) {
                this.setState( prevState => ({
                    post: null,
                    postId: 0,
                    loading: 'FETCHING'
                }));
            }
        }
    }

    render() {
        console.log( 'render' );

        let el = null;
        if( this.state.post ) {
            el = (
                <div className="detail">
                    <h1>{this.state.post.title}</h1>
                    <hr />
                    <article dangerouslySetInnerHTML={{ __html: this.state.post.text }}></article>
                </div>
            );
        }

        return el;
    }
}

export default Detail;