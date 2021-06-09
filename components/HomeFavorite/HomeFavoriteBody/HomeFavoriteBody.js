// Third Party
import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';

// Assets
import muiStyles from './HomeFavoriteBodyStyles';

// Components
import Map from 'components/Map';
import Neighborhoods from './Neighborhoods/Neighborhoods';
import Homes from './Homes/Homes';

const useStyles = makeStyles(muiStyles);

const HomeFavoriteBody = () => {
    const classes = useStyles();

    const [selected, setSelected] = useState("Neighborhoods")

    return (
        <Grid container direction="row" >
            <Grid item container direction="column" className={classes.favoriteBodyElement}>
                <Grid item container direction="row" alignItems="center" justify="center" className={classes.buttonsContainer}>
                    <Grid item>
                        <Button 
                            className={ selected === "Homes" ? classes.favoriteCategoryButtonSelected : classes.favoriteCategoryButton } 
                            onClick={()=>{setSelected("Homes")}}
                        >
                            Homes
                        </Button>
                        <Button 
                            className={ selected === "Neighborhoods" ? classes.favoriteCategoryButtonSelected : classes.favoriteCategoryButton } 
                            onClick={()=>{setSelected("Neighborhoods")}}
                        >
                            Neighborhoods
                        </Button>
                    </Grid>
                    <Grid className={classes.homeFiltersIconContainer}>
                    <img src="/homeFilters.svg" alt="Filters icon" className={classes.homeFiltersIcon} />
                    </Grid>
                </Grid>
                <Grid item container style={{maxWidth: "100%"}}>
                    {
                        selected ===  "Neighborhoods"
                            ?
                        <Neighborhoods />
                            :
                        <Homes />
                    }
                </Grid>
            </Grid>
            <Grid item className={classes.favoriteBodyElement}>
                <Typography>Map</Typography>
            </Grid>
        </Grid>
    )
}

export default HomeFavoriteBody
