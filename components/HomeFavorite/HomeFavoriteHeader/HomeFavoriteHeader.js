// Third Party
import React from 'react';
import { makeStyles, Grid, Typography, ButtonBase } from '@material-ui/core';

// Assets
import muiStyles from './HomeFavoriteHeaderStyles';

const useStyles = makeStyles(muiStyles);

const HomeFavoriteHeader = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="space-between" alignItems="center" className={classes.headerContainer}>
            <Grid item>
                <Typography className={classes.headerTxt}>Favorites</Typography>
            </Grid>
            <Grid item container direction="row" justify="center" alignItems="center" className={classes.accountContainer}>
                <ButtonBase className={classes.thumbnail}>
                    <img src="/avatar.svg" alt="Nomadville avatar" className={classes.thumbnailImage} />
                </ButtonBase>
                <img src="/accountCtl.svg" alt="Account controller icon" className={classes.accountClt} />
            </Grid>
        </Grid>
    )
}

export default HomeFavoriteHeader
