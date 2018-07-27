import React, { Component } from 'react';
import { loadMoviesPage, updateSearchKey } from '../actions/creators';

import './MovieList.css';
import imageNotAvailableUrl from './image-not-available.jpg';

export default class MovieList extends Component {
    constructor( props ) {
        super( props );

        this.fetchMoviesPage = this.fetchMoviesPage.bind( this );
        this.filterMoviesByType = this.filterMoviesByType.bind( this );
        this.filterMoviesBySearchKey = this.filterMoviesBySearchKey.bind( this );
        this.updateSearchKey = this.updateSearchKey.bind( this );
    }
    
    componentDidMount() {
        this.props.dispatch( loadMoviesPage( 1, this.props.curType, this.props.curSearch ) );
    }

    fetchMoviesPage( event ) {
        event.preventDefault();
        let pageNumber = parseInt( event.currentTarget.getAttribute( 'data-pagenumber' ), 10 );
        this.props.dispatch( loadMoviesPage( pageNumber, this.props.curType, this.props.curSearch ) );
    }

    filterMoviesByType( event ) {
        let videoType = event.currentTarget.getAttribute( 'data-videotype' );
        this.props.dispatch( loadMoviesPage( 1, videoType, this.props.curSearch ) );
    }

    filterMoviesBySearchKey( event ) {
        event.preventDefault();
        let search = this.searchNode.value;
        this.props.dispatch( loadMoviesPage( 1, this.props.curType, search ) );
    }

    updateSearchKey( event ) {
        event.preventDefault();
        let search = event.currentTarget.value;
        this.props.dispatch( updateSearchKey( search ) );
    }

    getClassByType( type ) {
        const map = {
            movie: 'primary',
            series: 'success',
            episode: 'warning'
        }
        
        return map[type] || 'default';
    }

    getPaginationLimits() {
        if( !this.props.totalResults ) {
            return {
                firstPage: null,
                lastPage: null
            };
        }

        const { curPage } = this.props;

        const firstPage = 1;
        const lastPage = Math.ceil( this.props.totalResults / 10 );

        const startPage = Math.max( parseInt( ( curPage - 1 ) / 5, 10 ) * 5 + 1, 1 );
        const endPage = Math.min( startPage + 4, lastPage );
        
        const previousPage = Math.max( startPage - 1, 1 );
        const nextPage = Math.min( endPage + 1, lastPage );

        const hasPreviousPage = previousPage < startPage;
        const hasNextPage = nextPage > endPage;

        return { firstPage, lastPage, startPage, endPage, hasPreviousPage, hasNextPage, previousPage, nextPage };
    }

    renderPagination() {
        const { curPage } = this.props;

        const { startPage, endPage, hasPreviousPage, hasNextPage, previousPage, nextPage } = this.getPaginationLimits();

        const pages = [];
        for( let i = startPage; i <= endPage; i++ ) {
            pages.push( <li className={ curPage === i ? 'active' : ''} key={i}><a href={"#" + i} data-pagenumber={i} onClick={this.fetchMoviesPage}>{i}</a></li> );
        }

        return (
            <nav aria-label="Page navigation">
                <ul className="pagination" style={{margin: 0}}>
                    <li className={hasPreviousPage ? '' : 'disabled'}>
                        <a href="#previous" aria-label="Previous" data-pagenumber={previousPage} onClick={this.fetchMoviesPage}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages}
                    <li className={hasNextPage ? '' : 'disabled'}>
                        <a href="#next" aria-label="Next" data-pagenumber={nextPage} onClick={this.fetchMoviesPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
                {
                    this.props.totalResults ? (
                        <div>Showing {( curPage - 1 ) * 10 + 1} - {curPage * 10} of {this.props.totalResults}</div>
                    ) : null
                }
            </nav>
        );
    }

    renderTypeSelector() {
        return (
            <div className="btn-group" role="group" aria-label="Select the type of video">
                <button type="button" className={'btn btn-' + this.getClassByType( "" )} data-videotype="" onClick={this.filterMoviesByType} style={{opacity: !this.props.curType ? 1 : 0.3}}>ANY</button>
                <button type="button" className={'btn btn-' + this.getClassByType( "movie" )} data-videotype="movie" onClick={this.filterMoviesByType} style={{opacity: this.props.curType === 'movie' ? 1 : 0.3}}>movie</button>
                <button type="button" className={'btn btn-' + this.getClassByType( "series" )} data-videotype="series" onClick={this.filterMoviesByType} style={{opacity: this.props.curType === 'series' ? 1 : 0.3}}>series</button>
                <button type="button" className={'btn btn-' + this.getClassByType( "episode" )} data-videotype="episode" onClick={this.filterMoviesByType} style={{opacity: this.props.curType === 'episode' ? 1 : 0.3}}>episode</button>
            </div>
        );
    }

    renderSearch() {
        return (
            <form className="text-center">
                <div className="input-group">
                    <input type="text" id="search" name="search" className="form-control" placeholder="Search by keyword" value={this.props.curSearch} onInput={this.updateSearchKey} ref={ node => this.searchNode = node }/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.filterMoviesBySearchKey} type="button">Search</button>
                    </span>
                </div>
                {
                    this.props.lastSearch ? (
                        <div>Showing results for <code>{this.props.lastSearch}</code></div>
                    ) : null
                }
            </form>
        );
    }

    render() {
        return (
            <div>
                <h2>Video Catalog</h2>
                <hr />
                <div className="row" style={{marginTop: 20, marginBottom: 20}}>
                    <div className="col-sm-4">
                        {this.renderPagination()}
                    </div>
                    <div className="col-sm-4">
                        {this.renderSearch()}
                    </div>
                    <div className="col-sm-4">
                        <div className="pull-right">
                            {this.renderTypeSelector()}
                        </div>
                    </div>
                </div>
                { this.props.loading ? <div className="alert alert-info">Loading...</div> : null }
                { this.props.error ? <div className="alert alert-danger">An error occured while trying to fetch list of movies. Try reloading the page.</div> : null }
                {
                    !this.props.loading && !this.props.error ? (
                        <div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Year</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.movies.map(movie => (
                                            <tr key={movie.imdbID}>
                                                <td>
                                                    {
                                                        movie.Poster !== 'N/A' ? (
                                                            <img src={movie.Poster} alt={`Poster of the movie ${movie.Title}`} className="movie-poster center-block" />
                                                        ) : <img src={imageNotAvailableUrl} alt={`Poster of the movie ${movie.Title}`} className="movie-poster center-block" />
                                                    }
                                                </td>
                                                <td>{movie.Title}</td>
                                                <td>{movie.Year}</td>
                                                <td><span className={'label label-' + this.getClassByType( movie.Type )}>{movie.Type}</span></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : null
                }
            </div>
        );
    }
}