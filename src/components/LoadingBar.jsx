import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default () =>
    <LinearProgress color="secondary" variant="query" style={styles.loading_bar}/>


const styles = {
    loading_bar: {
        height: 5,
    },
};