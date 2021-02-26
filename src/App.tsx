import React from 'react';
import './App.css';
import MasterView from './components/MasterView';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MasterView/>
    </Router>
  );
}

export default App;
