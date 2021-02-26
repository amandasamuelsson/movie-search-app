import React from 'react';
import MovieDetails from './movieDetails/MovieDetails';
import Navbar from './Navbar';
import SearchView from './searchPage/SearchView';
import SeenMoviesView from './seenMovies/SeenMoviesView';
import WatchlistView from './watchlistPage/WatchlistView';
import { Layout } from 'antd';

export default function MasterView() {
    return (
        <Layout>
            <Navbar />
            <WatchlistView/>
            {/* <MovieDetails/>
            <SearchView/>
            <SeenMoviesView/>        */}
        </Layout>
      );
}