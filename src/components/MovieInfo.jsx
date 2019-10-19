import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export default ({ movie, imgUrl, genres }) => {

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
                        Genres: { movie.genre_ids.map(genre_id => (
                            genres.get(genre_id) + "\n" 
                        ))}
                    </Typography>
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