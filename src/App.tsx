import React from 'react';
import './App.css';
import MasterView from './components/MasterView';
import MovieDetails from './components/movieDetails/MovieDetails';
import Navbar from './components/Navbar';
import SearchView from './components/searchPage/SearchView';
import SeenMoviesView from './components/seenMovies/SeenMoviesView';
import WatchlistView from './components/watchlistPage/WatchlistView';
import WelcomeTitle from './components/welcomePage/Titel';

function App() {
  return (
    <MasterView/>
   // <WelcomeTitle /> 
  );
}

export default App;
