// Third Party
import React, { useState } from 'react';
import { makeStyles, Grid, Typography, ButtonBase } from '@material-ui/core';

// Assets
import muiStyles from './HomeHeaderStyles';
import UserDropMenu from 'common/UserDropMenu/UserDropMenu';

const useStyles = makeStyles(muiStyles);

const HomeHeader = ({title, noPadding}) => {
    const classes = useStyles(( noPadding= {noPadding} ));

    const [openUserMenu, setOpenUserMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickUserMenu = (event) => {
        setOpenUserMenu(!openUserMenu);
        setAnchorEl(event.currentTarget);
        console.log("Menu Clicked!!");
    };

    return (
        <Grid container direction="row" justify={title ? "space-between" : "flex-end"} alignItems="center" className={classes.headerContainer}>
            {
                title 
                && 
                (
                    <Grid item>
                        <Typography className={classes.headerTxt}>{title}</Typography>
                    </Grid>
                )
            }
            <Grid item container direction="row" justify="center" alignItems="center" className={classes.accountContainer}>
                <ButtonBase className={classes.thumbnail} onClick={handleClickUserMenu}>
                    <img src="/avatar.svg" alt="Nomadville avatar" className={classes.thumbnailImage} />
                </ButtonBase>
                <img src="/accountCtl.svg" alt="Account controller icon" className={classes.accountClt} />
            </Grid>

            <UserDropMenu open={openUserMenu} anchorEl={anchorEl}/>
        </Grid>
    )
}

export default HomeHeader
