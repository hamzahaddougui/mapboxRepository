// Third Party
import React from 'react';
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";

// Assets
import muiStyles from './BottomBarStyles';

const useStyles = makeStyles(muiStyles);

const BottomBar = ({totalSteps, currentStep, setCurrentStep, onClick}) => {
    const classes = useStyles();

    const handleNavigation = () => {
        onClick();
        setCurrentStep(currentStep+1)
    }

    return (
        <>
        { 
            currentStep === totalSteps
                ? 
            (
                <Grid className={classes.LaststepContainer}>
                    <Typography className={classes.navigationStep}>Step <span className={classes.navigationTotalSteps}>{currentStep}</span>/<span className={classes.navigationTotalSteps}>{totalSteps}</span></Typography>
                </Grid> 
            )
                : 
            (
                <Grid container direction="row" alignItems="center" justify="center" className={classes.bottomContainer}>
                    <Grid item className={classes.buttonContainer}>
                        <Button className={classes.navigationTxt} onClick={handleNavigation}>Next</Button>
                    </Grid>
                    <Grid item className={classes.stepContainer}>
                        <Typography className={classes.navigationStep}>Step <span className={currentStep === totalSteps ? classes.navigationTotalSteps : classes.navigationStep}>{currentStep}</span>/<span className={classes.navigationTotalSteps}>{totalSteps}</span></Typography>
                    </Grid>            
                </Grid>
            ) 
        }
        </>
    )
}

export default BottomBar
