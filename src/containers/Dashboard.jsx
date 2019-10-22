import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import UpcomingMovieList from './UpcomingMovieList';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <UpcomingMovieList />
            </Fragment>
        );
    }
}

export default Dashboard;
