// Third Party
import React from 'react';
import { makeStyles, CssBaseline } from "@material-ui/core";

// Components
import SideBar from './SideBar/SideBar';
import BottomBar from './BottomBar/BottomBar';
import Main from './Main/Main';

// Assets
import muiStyles from "./HomeLayoutStyles";

const useStyles = makeStyles(muiStyles);

const HomeLayout = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* <BottomBar totalSteps={totalSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} /> */}
            <SideBar />
            <Main>
                {children}
            </Main>
            
        </div>
    )
}

export default HomeLayout
