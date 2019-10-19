import GridList from '@material-ui/core/GridList';
import React, { Fragment } from 'react';
import MovieInfo from './MovieInfo';


export default ({ imageBaseUrl, upcomingMovies, genres }) => {
    return (
        <Fragment>
            <GridList style={styles.gridList}>
                {upcomingMovies.map(movie => (
                    <MovieInfo
                        key={movie.original_title}
                        imgUrl={imageBaseUrl + movie.poster_path}
                        movie={movie}
                        genres={genres}
                    />
                ))}
            </GridList>
        </Fragment>
    );
}

const styles = {
    gridList :{
        padding: 20,
    }
}
