import React, { Component } from "react";
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { getConfig, getGenres, getUpcomingMovies } from '../actions/MovieAPI';
import Pagination from "material-ui-flat-pagination";

class UpcomingMovieList extends Component {
	state = {
		offset: 0,
	};

	componentDidMount() {
		this.props.getGenres();
		this.props.getConfig();
		this.props.getUpcomingMovies({pageNum: 1});
	}

	handleClick = (offset, page) => {
		this.setState({ offset });
		this.props.getUpcomingMovies({ pageNum: page });
	};

	render() {
		const imageBaseUrl = this.props.configuration.images.secure_base_url + 'w154';
		const upcomingMovies = this.props.upcomingMovies.results;
		const genres = new Map(this.props.genres.genres.map(obj => [obj.id, obj.name]));

		return (
			<div style={styles.container}>
				<MovieList imageBaseUrl={imageBaseUrl} upcomingMovies={upcomingMovies} genres={genres}/>
				<Pagination
					style={{textAlign: "center"}}
					limit={20}
					offset={this.state.offset}
					total={200}
					onClick={(_, offset, page) => this.handleClick(offset, page)}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	configuration: state.configuration,
	genres: state.genres,
	upcomingMovies: state.upcomingMovies,
});

const mapDispatchToProps = {
	getConfig,
	getGenres,
	getUpcomingMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovieList);


const styles = {
	container : {
		margin: "auto",
	},
}