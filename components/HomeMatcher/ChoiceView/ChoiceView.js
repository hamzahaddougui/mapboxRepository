// Third Party
import React from 'react';
import { makeStyles, Grid, Typography, Paper, IconButton } from "@material-ui/core";
import { Close, Clear, Favorite } from "@material-ui/icons";

// Components
import BottomBar from '../../HomeLayout/BottomBar/BottomBar'

// Assets
import muiStyles from './ChoiceViewStyles';

const useStyles = makeStyles(muiStyles);

const ChoiceView = ({ open, setOpen, totalSteps, currentStep, setCurrentStep }) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            {/* <Close className={classes.closeIcon} onClick={handleClose} /> */}
            <img src="/cancel.svg" alt="Close Icon" className={classes.closeIcon} onClick={handleClose} />
            <Typography className={classes.title}>Let's find your style of home</Typography>

            <Grid item>
                <Paper elevation={0} className={classes.CardContainer}>
                </Paper>
            </Grid>

            <Grid item container direction="row" justify="center" alignItems="center" className={classes.controllersContainer}>
                <img src="/hmBack.svg" alt="Back icon" className={classes.smallIcon} onClick={() => {console.log("Back")}} />
                <img src="/hmSwipe.svg" alt="Swipe icon" className={classes.BigIcon} onClick={() => {console.log("Swipe")}} />
                <Typography className={classes.controllersTxt}>Loading...</Typography>
                <img src="/hmSave.svg" alt="Save icon" className={classes.BigIcon} onClick={() => {console.log("Save")}} />
                <img src="/hmPreferences.svg" alt="Preferences" className={classes.smallIcon} onClick={() => {console.log("Preferences")}} />
            </Grid>

            <BottomBar totalSteps={totalSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </Grid>
    )
}

export default ChoiceView
