// Third Party
import React from 'react';
import { makeStyles } from "@material-ui/core";

// Assets
import muiStyles from './MainStyles';

const useStyles = makeStyles(muiStyles);

const Main = ({children, openSideBar, noPadding}) => {
    const classes = useStyles(( noPadding= {noPadding} ));

    return (
        <main className={ openSideBar ? classes.rootContainerOpen : classes.rootContainerClosed }>
            {children}
        </main>
    )
}

export default Main
