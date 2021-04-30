// Third Party
import React from 'react';
import { makeStyles } from "@material-ui/core";

// Assets
import muiStyles from './MainStyles';

const useStyles = makeStyles(muiStyles);

const Main = ({children}) => {
    const classes = useStyles();

    return (
        <main className={classes.rootContainer}>
            {children}
        </main>
    )
}

export default Main
