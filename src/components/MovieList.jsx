import GridList from '@material-ui/core/GridList';
import React, { Fragment } from 'react';
import MovieInfo from './MovieInfo';


export default (props) => {
    const {
        imageBaseUrl,
        movies,
        alreadyBookmarked,
        genres,
        addAction,
        removeAction } = props;

    return (
        <Fragment>
            <GridList style={styles.gridList}>
                {movies.map(movie => (
                    <MovieInfo
                        key={movie.original_title}
                        imgUrl={imageBaseUrl + movie.poster_path}
                        movie={movie}
                        alreadyBookmarked={alreadyBookmarked}
                        genres={genres}
                        addAction={addAction}
                        removeAction={removeAction}
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
