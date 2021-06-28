// Third Party
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Grid, Typography, Button, ButtonBase } from "@material-ui/core";

// Assets
import muiStyles from './CongratulationStyles';
import HomeHeader from 'common/HomeHeader/HomeHeader';

const useStyles = makeStyles(muiStyles);

const Congratulation = ({ open, setOpen }) => {
    const classes = useStyles();

    const favorites = useSelector(state => state.modules.neighborhood.favorites);

    // console.log(localStorage);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
       <Grid container direction="column" justify="center" alignItems="center">
           {/* <Grid item container direction="row" justify="center" alignItems="center" className={classes.accountContainer}>
                    <ButtonBase className={classes.thumbnail}>
                        <img src="/avatar.svg" alt="Nomadville avatar" className={classes.thumbnailImage} />
                    </ButtonBase>
                    <img src="/accountCtl.svg" alt="Account controller icon" className={classes.accountClt} />
            </Grid> */}

            <HomeHeader noPadding={true} />

           <Grid item container direction="column" justify="center" alignItems="center" className={classes.wrapper}>
                <img src="/congratulations.png" alt="Congratulations Icon" className={classes.icon} />
                <Typography className={classes.title}>Congratulations</Typography>
                <Typography className={classes.desc}>We found <span className={classes.highlighted}>241 Homes</span> in these neighborhoods :</Typography>
                {favorites.length > 0 && (<Typography className={classes.nbExamples}>{favorites[0].Neighborhood}{favorites[1] && <span>, {favorites[1].Neighborhood}</span>} ...</Typography>)}
                <Button className={classes.buttonContainer} onClick={handleOpen}>View homes</Button>
           </Grid>
       </Grid>
    )
}

export default Congratulation
