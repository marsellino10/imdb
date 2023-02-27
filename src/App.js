import React , { useEffect, useState }from 'react';
import { Route ,Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MoviesContainer from './components/movies contaier/MoviesContainer';
import MovieDetails from './pages/movie-details/MovieDetails';


function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='movie/:id' element={<MovieDetails />}/>
          <Route path='movies/:type' element={<MoviesContainer />}/>
        </Routes>
    </div>
  );
}

export default App;
