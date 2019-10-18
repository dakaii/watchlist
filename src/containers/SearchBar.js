import React, { Component, Fragment } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LoadingBar from '../components/LoadingBar'


class SearchBar extends Component {
    state = {
		title: '',
		loading: false,
	};
	
	handleSubmit = event => {
		event.preventDefault()
		// this.props.MovieAPI(this.state.title)
		this.setState({
			title: '',
			loading: true,
		});
	}
	
	handleChange = event => {
		this.setState({title: event.target.value});
	};

    render() {
        return (
			<Fragment>
				<AppBar position="static" color="primary">
					<Toolbar>
						<Typography variant="title" style={styles.typography}>
							Popcorn
						</Typography>
						<form onSubmit={this.handleSubmit}>
						<TextField
							value={this.state.title}
							onChange={this.handleChange}
							style={styles.textfield}
							/>
						</form>
						<Button
							style={styles.button}
							onClick={this.handleSubmit}>
								Search
						</Button>
					</Toolbar>
				</AppBar>
				{ this.state.loading ? <LoadingBar/> : null }
			</Fragment>
        );
    }
}

const mapStateToProps = state => {
	return {
		// imgUrl: state.Poster,
		error: state.Error,
		timestamp: new Date().getTime(),
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({ MovieAPI }, dispatch);
// }

export default connect(mapStateToProps , [])(SearchBar);

const styles = {
	textfield: {
		backgroundColor:'#fff',
		padding:2,
	},
	typography: {
		flex: 1,
		color: 'inherit',
	},
	button: {
		color: 'inherit',
	},
};