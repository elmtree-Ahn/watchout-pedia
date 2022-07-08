import React from 'react';
import { Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Tvpage from './pages/Tvpage';
import TvDetail from './pages/TvDetail';
import MovieDetail from './pages/MovieDetail';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/tv" element={<Tvpage/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/tv/:id" element={<TvDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
