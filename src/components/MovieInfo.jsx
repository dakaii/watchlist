import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';


export default ({ movie, alreadyBookmarked = [], imgUrl, genres, addAction, removeAction }) => {
    let button;
    const bookmarkedTitles = alreadyBookmarked.map(m => m.original_title)

    if (addAction && bookmarkedTitles.includes(movie.original_title)) {
        button = <Button color="primary" disabled>Already Added to WatchList</Button>;
    } else if (addAction) {
        button = <Button color="primary" onClick={() => { addAction({ movie }); }}>Add to WatchList</Button>
    } else if (removeAction) {
        button = <Button color="secondary" onClick={() => { removeAction({ movie }); }}>Remove from WatchList</Button>
    }

    return (
        <Paper>
            <Grid container style={styles.cell}>
                <Grid>
                    <ButtonBase>
                        <img alt={movie.original_title} src={imgUrl} />
                    </ButtonBase>
                </Grid>
                <Grid>
                    <Typography style={styles.text}>
                        Title: {movie.original_title}
                    </Typography>
                    <Typography style={styles.text}>
                        Average Vote: {movie.vote_average}
                    </Typography>
                    <Typography style={styles.text}>
                        Overview: {movie.overview}
                    </Typography>
                    <Typography style={styles.text}>
                        Release date: {movie.release_date}
                    </Typography>
                    <Typography style={styles.text}>
                        Genres: {movie.genre_ids.map(genre_id => (
                            genres.get(genre_id) + ' '
                        ))}
                    </Typography>
                    {button}
                </Grid>
            </Grid>
        </Paper>
    );
}

const styles = {
    cell: {
        width: 450,
        padding: 10,
    },
    text: {
        padding: 5,
    },
}