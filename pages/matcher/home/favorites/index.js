// Third Party
import React from 'react';
import { makeStyles, Grid, Divider } from '@material-ui/core';

// Assets
import muiStyles from 'styles/homeFavoritesStyles';

// Components
import HomeLayout from 'components/HomeLayout/HomeLayout';
import HomeFavoriteHeader from 'components/HomeFavorite/HomeFavoriteHeader/HomeFavoriteHeader';
import HomeFavoriteBody from 'components/HomeFavorite/HomeFavoriteBody/HomeFavoriteBody';

const useStyles = makeStyles(muiStyles);

const HomeFavorite = () => {
    const classes = useStyles();

    return (
        <HomeLayout noPadding={true}>
            <Grid container direction="column">
                <Grid item>
                    <HomeFavoriteHeader />
                </Grid>
                <Divider className={classes.favoriteDivider} />
                <Grid item>
                    <HomeFavoriteBody />
                </Grid>
            </Grid>
        </HomeLayout>
    )
}

export default HomeFavorite;
