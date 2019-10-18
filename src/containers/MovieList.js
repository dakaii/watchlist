import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import MovieInfo from '../components/MovieInfo';
import { getConfig, getUpcomingMovies } from '../actions/MovieAPI';
import Pagination from "material-ui-flat-pagination";

class MovieList extends Component {
	state = {
		offset: 0,
	};

	componentDidMount() {
		this.props.getConfig();
		this.props.getUpcomingMovies({pageNum: 1});
	}

	handleClick = (offset, page) => {
		this.setState({ offset });
		this.props.getUpcomingMovies({ pageNum: page });
	};

	render() {
		const config = this.props.configuration.images;
		const image_base_url = (config) ? config.secure_base_url + 'w500' : '';
		const upcomingMovies = this.props.upcomingMovies.results || [];

		return (
		<Fragment>
			<div style={styles.root}>
				<GridList cellHeight={160} style={styles.gridList} cols={3}>
					{upcomingMovies.map(movie => (
						<GridListTile key={movie.original_title} cols={1}>
							<img src={image_base_url+movie.poster_path} alt={movie.original_title} />
						</GridListTile>
					))}
				</GridList>
			</div>
			<Pagination
				style={styles.root}
				limit={20}
				offset={this.state.offset}
				total={200}
				onClick={(event, offset, page) => this.handleClick(offset, page)}
			/>
		</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	configuration: state.configuration,
	upcomingMovies: state.upcomingMovies,
});

const mapDispatchToProps = {
	getConfig,
	getUpcomingMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	gridList: {
		width: 500,
		height: 450,
	},
};