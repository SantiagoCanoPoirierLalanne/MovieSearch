import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "../src/components/searchMovies";
import './App.css';

function App() {
  return (
    <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
  );
}

export default App;
