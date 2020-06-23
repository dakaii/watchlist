import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar color="default" position="static">
                <Toolbar>
                    <Typography
                        variant="h5"
                        className={classes.title}
                        color="inherit"
                    >
                        Legendary Tacos
                    </Typography>
                    {/* <List component="nav">
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
                    </ListItem>
                </List> */}
                    <Button component={Link} to="/login" color="primary">
                        Log In
                    </Button>
                    <Button
                        component={Link}
                        to="/signup"
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));
