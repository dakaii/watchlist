import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default ({ imgUrl }) => {
    return (
    <Paper  elevation={1}>
        <Grid container wrap="nowrap" spacing={8}>
            <img
                src={imgUrl}
                style={styles.image}
                alt=""
            />
        </Grid>
    </Paper>
    )
}


const styles = {
	image: {
		// padding: 'auto',
		marginLeft  : 'auto',
		marginRight : 'auto',
	},
};