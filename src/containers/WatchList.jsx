import React, { Component } from "react";
import { connect } from 'react-redux';
import { getConfig, getGenres, getUpcomingMovies } from '../actions/MovieAPI';
import { removeFromWatchList } from '../actions/WatchListAPI';
import MovieList from '../components/MovieList';
import Navbar from "./NavBar";


class WatchList extends Component {
    state = {
        offset: 0,
    };

    componentDidMount() {
        if (!!this.props.configuration.images.secure_base_url) {
            this.props.getConfig();
        };
        if (this.props.genres.genres.length === 0) {
            this.props.getGenres();
        }
    }

    handleClick = (offset, page) => {
        this.setState({ offset });
        this.props.getUpcomingMovies({ pageNum: page });
    };

    render() {
        const imageBaseUrl = this.props.configuration.images.secure_base_url + 'w154';
        const bookmarkList = this.props.watchList.currentList;
        bookmarkList.sort(function (a, b) {
            return new Date(a.release_date) - new Date(b.release_date);
        });
        const genres = new Map(this.props.genres.genres.map(obj => [obj.id, obj.name]));

        return (
            <div style={styles.container}>
                <Navbar />
                <MovieList
                    imageBaseUrl={imageBaseUrl}
                    movies={bookmarkList}
                    genres={genres}
                    removeAction={this.props.removeFromWatchList}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    configuration: state.configuration,
    genres: state.genres,
    upcomingMovies: state.upcomingMovies,
    watchList: state.watchList,
});

const mapDispatchToProps = {
    getConfig,
    getGenres,
    getUpcomingMovies,
    removeFromWatchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);


const styles = {
    container: {
        margin: "auto",
    },
}