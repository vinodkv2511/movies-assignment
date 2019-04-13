import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';

class App extends Component {
  dummyMovie = {
    "vote_count": 545,
    "id": 512196,
    "video": false,
    "vote_average": 6.1,
    "title": "Happy Death Day 2U - A womens anger is a mans nightmare",
    "popularity": 83.495,
    "poster_path": "/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg",
    "original_language": "en",
    "original_title": "Happy Death Day 2U",
    "genre_ids": [
        27,
        9648,
        53,
        878,
        35
    ],
    "backdrop_path": "/dhNJHBDacrZjSPtwaiwp3idpzxU.jpg",
    "adult": false,
    "overview": "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",
    "release_date": "2019-02-13"
}
  render() {
    return (
      <div className="App">
        <MovieCard movie={this.dummyMovie}/>
      </div>
    );
  }
}

export default App;
