import React from 'react';
import MovieDetails from './movieDetails/MovieDetails';
import Navbar from './Navbar';
import SeenMoviesView from './seenMovies/SeenMoviesView';
import WatchlistView from './watchlistPage/WatchlistView';
import { Layout } from 'antd';
import WelcomeView from './welcomePage/welcomeView';
import { Route, Switch } from 'react-router-dom';


export default function MasterView() {

    return (
        <Layout>
            <Navbar />
            <Switch>
                <Route path='/movie/:imdbid' component={MovieDetails}/>
            </Switch>
            <Route exact path='/'>
                <WelcomeView /> 
            </Route>
            <Route path='/watchlist'>
                <WatchlistView/>
            </Route>
            <Route path='/seen'>
                <SeenMoviesView/>
            </Route>    
        </Layout>
    );
}