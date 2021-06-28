// Third Party
import React from 'react';
import { makeStyles, Grid, Divider } from '@material-ui/core';

// Assets
import muiStyles from 'styles/accountStyles';

// Components
import HomeHeader from 'common/HomeHeader/HomeHeader';
import HomeLayout from 'components/HomeLayout/HomeLayout';
import AccountSettings from 'components/AccountSettings/AccountSettings';



const useStyles = makeStyles(muiStyles);

const index = () => {
    const classes = useStyles();

    return (
        <HomeLayout noPadding={true}>
            <Grid container direction="column">
                <Grid item>
                    <HomeHeader title="Account Settings" />
                </Grid>

                <Divider className={classes.accountDivider} />

                <Grid item>
                    <AccountSettings />
                </Grid>

            </Grid>

        </HomeLayout>
    )
}

export default index
