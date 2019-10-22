import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom';

export default () => {

	return (
		<AppBar color="primary" position="static">
			<Toolbar>
				<TypoGraphy variant="h5" color="inherit">
					Watchlist
				</TypoGraphy>
				<List component="nav">
					<ListItem component="div">
						<ListItemText inset>
							<Link to="/" style={styles.link}>
								Upcoming Movies
							</Link>
						</ListItemText>

						<ListItemText inset>
							<Link to="/watchlist" style={styles.link}>
								Watch List
							</Link>
						</ListItemText>

					</ListItem >
				</List>
			</Toolbar>
        </AppBar>
	)
}

const styles = {
	link : {
		color: 'white',
		textDecoration: 'none',
	},
}