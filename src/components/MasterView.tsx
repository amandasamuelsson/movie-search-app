import React from 'react';
import MovieDetails from './movieDetails/MovieDetails';
import Navbar from './Navbar';
import SearchView from './searchPage/SearchView';
import SeenMoviesView from './seenMovies/SeenMoviesView';
import WatchlistView from './watchlistPage/WatchlistView';
import { Layout } from 'antd';
import WelcomeView from './welcomePage/welcomeView';
import { Route } from 'react-router-dom';

export default function MasterView() {
    return (
        <Layout>
            <Navbar />
            <MovieDetails
            imdbId={''}/>
            {/* <Route exact path='/'>
                <WelcomeView /> 
            </Route>
            <Route path='/watchlist'>
                <WatchlistView/>
            </Route>
            <Route path='/seen'>
                <SeenMoviesView/>
            </Route>     */}
        </Layout>
      );
}