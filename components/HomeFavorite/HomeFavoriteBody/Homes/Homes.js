// Third Party
import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";

// Assets
import muiStyles from './HomesStyles';

const useStyles = makeStyles(muiStyles);

const Homes = () => {
    const classes = useStyles();

    return (
        <Typography>Homes</Typography>
    )
}

export default Homes
