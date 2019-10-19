import React, { Component, Fragment } from 'react';
// import SearchBar from './SearchBar'
import UpcomingMovieList from './UpcomingMovieList'

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <SearchBar/> */}
        <UpcomingMovieList/>
      </Fragment>
    );
  }
}

export default App;
