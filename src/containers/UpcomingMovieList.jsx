import Pagination from "material-ui-flat-pagination";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { getConfig, getGenres, getUpcomingMovies } from '../actions/MovieAPI';
import { addToWatchList } from '../actions/WatchListAPI';
import MovieList from '../components/MovieList';
import { MAX_PAGE } from '../constants/UIConstants';


class UpcomingMovieList extends Component {
	state = {
		offset: 0,
	};

	componentDidMount() {
		if (!this.props.configuration.images.secure_base_url) {
			this.props.getConfig();
		};
		if (this.props.genres.genres.length === 0) {
			this.props.getGenres();
		}
		this.props.getUpcomingMovies({pageNum: 1});
	}

	handlePaginationClicked = (offset, page) => {
		this.setState({ offset });
		this.props.getUpcomingMovies({ pageNum: page });
	};

	render() {
		const imageBaseUrl = this.props.configuration.images.secure_base_url + 'w154';
		const upcomingMovies = this.props.upcomingMovies.results;
		const bookmarkList = this.props.watchList.currentList;
		const genres = new Map(this.props.genres.genres.map(obj => [obj.id, obj.name]));

		return (
			<div style={styles.container}>
				<MovieList
					imageBaseUrl={imageBaseUrl}
					movies={upcomingMovies}
					alreadyBookmarked={bookmarkList}
					genres={genres}
					addAction={this.props.addToWatchList}
				/>
				<Pagination
					style={{textAlign: "center"}}
					limit={1}
					offset={this.state.offset}
					total={MAX_PAGE}
					onClick={(_, offset, page) => this.handlePaginationClicked(offset, page)}
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
	addToWatchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovieList);


const styles = {
	container : {
		margin: "auto",
	},
}