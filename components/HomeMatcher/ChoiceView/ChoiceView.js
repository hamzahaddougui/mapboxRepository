// Third Party
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Grid, Typography, Paper, IconButton } from "@material-ui/core";
import { Close, Clear, Favorite } from "@material-ui/icons";
import TinderCard from 'react-tinder-card';

// Components
import BottomBar from '../../HomeLayout/BottomBar/BottomBar'

// Assets
import muiStyles from './ChoiceViewStyles';

const useStyles = makeStyles(muiStyles);

const ChoiceView = ({ open, setOpen, totalSteps, currentStep, setCurrentStep }) => {
    const classes = useStyles();

    const matchedHomes = useSelector(state => state.modules.home.matchedHomes);

    console.log(matchedHomes);

    const handleClose = () => {
        setOpen(!open);
    }

    // const onSwipe = (direction) => {
    //     console.log('You swiped: ' + direction);
    //     console.log(direction);
    //     if(direction==='right'){
    //         console.log("You liked the item");
    //     }else if(direction==='left'){
    //         console.log("YOu did not like the item");
    //     }
    // }

    const swiped = (direction) => {
        console.log('direction: ' + direction);
        if(direction==='right'){
            console.log('YAY You swiped RIGHT');
        }else if(direction==='left'){
            console.log('Did not like it!? You swiped LEFT');
        }

    }
      
    const onCardLeftScreen = (myIdentifier) => {
      console.log(myIdentifier + ' left the screen')
    }

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            {/* <Close className={classes.closeIcon} onClick={handleClose} /> */}
            <Grid item>
                <img src="/cancel.svg" alt="Close Icon" className={classes.closeIcon} onClick={handleClose} />
                <Typography className={classes.title}>Let's find your style of home</Typography>
            </Grid>
        
            <Grid item container className={classes.cardsWrapper}>
            {
                matchedHomes?.map((home, i) => (
                    <TinderCard key={i} className={classes.swipe} onSwipe={(dir) => swiped(dir)} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                        <Grid item>
                            <Paper elevation={0} style={{backgroundImage: `url(${home.image})`}} className={classes.CardContainer}>
                                <Typography className={classes.cardContentTxt}>{home.OriginatingSystemMediaKey}</Typography>
                            </Paper>
                        </Grid>
                    </TinderCard>
                ))
            }
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
