import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Board from './Components/Board';
import Scoreboard from './Components/Scoreboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Scoreboard}/>
        <Route path='/board' component={Board}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
