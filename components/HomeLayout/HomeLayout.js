// Third Party
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, CssBaseline } from "@material-ui/core";

// Components
import SideBar from './SideBar/SideBar';
import BottomBar from './BottomBar/BottomBar';
import Main from './Main/Main';

// Assets
import muiStyles from "./HomeLayoutStyles";

// Actions
import { handleOpenSideBar } from '../../services/actions/home.actions';

const useStyles = makeStyles(muiStyles);

const HomeLayout = ({children, noPadding}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const openSideBar = useSelector(state => state.modules.home.openSideBar);
    // const [openSideBar, setOpenSideBar] = useState(false);

    const setOpenSideBar = () => {
        dispatch(handleOpenSideBar());
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* <BottomBar totalSteps={totalSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} /> */}
            <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
            <Main openSideBar={openSideBar} noPadding={noPadding}>
                {children}
            </Main>
            
        </div>
    )
}

export default HomeLayout
