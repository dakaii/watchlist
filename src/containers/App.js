import React, { Component, Fragment } from 'react';
import SearchBar from './SearchBar'
import MovieList from './MovieList'

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <SearchBar/> */}
        <MovieList/>
      </Fragment>
    );
  }
}

export default App;
