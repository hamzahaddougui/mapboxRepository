import Router from 'next/router';
import Link from 'next/link'

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadMatched } from './NeighborhoodService';

import styles from './Matcher.module.css';
import FilterView from './FilterView';

import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, CssBaseline } from '@material-ui/core'
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#9A9895",
        height: '100vh',
    },
    jumbo: {
        backgroundColor: "#9A9895",
        backgroundImage: 'url(/map.svg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        maxWidth: 'none',
    },
    matchButton: {
        border: "1px solid #979797",
        backgroundColor: "transparent",
        padding: "10px 40px",
        borderRadius: "22.5px",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "transparent"
          }
    }
}));

const Matcher = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(1);
    const [matcher, setMatcher] = useState(false);
    const [search, setSearch] = useState(true);
    const [twoD, setTwoD] = useState(true);
    const [threeD, setThreeD] = useState(false);
    const [menu, setMenu] = useState(false);

    const next = () => {
        setCurrent(current+1)
    }
    const previous = () => {
        setCurrent(current-1)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container className={classes.jumbo} fixed>

                <div className={styles.splitButtonView}>
                        <div className={ twoD ? styles.splitButtonItemActive : styles.splitButtonItem } onClick={() => {console.log('2D Clicked!'); setTwoD(!twoD); setThreeD(!threeD)}}>2D</div>
                        <div className={ threeD ? styles.splitButtonItemActive : styles.splitButtonItem } onClick={() => {console.log('3D Clicked!'); setThreeD(!threeD); setTwoD(!twoD)}}>3D</div>
                </div>

                <div className={styles.splitButton}>
                        <div style={{fontWeight: "600"}} className={ matcher ? styles.splitButtonItemActive : styles.splitButtonItem } onClick={() => {console.log('Matcher Clicked!'); setMatcher(!matcher); setSearch(!search)}}>Matcher</div>
                        <div className={ search ? styles.splitButtonItemActive : styles.splitButtonItem } onClick={() => {console.log('Search Clicked!'); setSearch(!search); setMatcher(!matcher)}}>Search</div>
                </div>

                <div className={styles.dropDown} onClick={() => {setMenu(!menu); console.log('Menu Clicked!!')}}>
                    <p className={styles.percentMatch}>Percent match</p>
                </div>

    {
        menu ? (
            <div className={styles.dropDownContent}>
                <p className={styles.dropDownItem}>Settlement</p>
                <ul>
                <li className={styles.dropDownItem}>Village</li>
                <li className={styles.dropDownItem}>Beach access</li>  
                <li className={styles.dropDownItem}>Below market homes</li>
                </ul> 
                <p className={styles.dropDownItem}>Zoning</p> 
                <ul>
                <li className={styles.dropDownItem}>Low crime rate</li>  
                <li className={styles.dropDownItem}>Clean air</li>  
                <li className={styles.dropDownItem}>Walkable</li>  
                <li className={styles.dropDownItem}>Quality top water</li>  
                <li className={styles.dropDownItem}>Medical facilities</li>
                <li className={styles.dropDownItem}>Young population</li>
                <li className={styles.dropDownItem}>Very conservative</li>  
                </ul>  
                <p className={styles.dropDownItem}>Housing</p> 
                <ul>
                <li className={styles.dropDownItem}>Below market homes</li>  
                <li className={styles.dropDownItem}>Below market rentals</li>  
                <li className={styles.dropDownItem}>High home ownership</li>  
                <li className={styles.dropDownItem}>Low vacancy rate</li>  
                <li className={styles.dropDownItem}>Newer housing</li>
                </ul>     
            </div>
        ) : ("")
    }

                <div className={styles.bottomBox}>
                    {/* <div className={styles.thunder}>
                        <img src="/thunder.svg" alt="thunder" />
                    </div> */}
                    
    
             
                    {/* { current===2 ? (<Button className={classes.matchButton}>Start the Matcher</Button>) : (<Button className={classes.matchButton} onClick = {() => {next()}}>Next</Button>) } */}
        { open 
            ? 
        (<div>
            { current === 2 ? (<div className={styles.navigation} onClick={()=>{dispatch(loadMatched())}}>Neighborhood Matcher</div>) : (<div className={styles.navigation} onClick={() => {next()}}> Next</div>) }
        </div>) 
            : 
        (<div>
            <div className={styles.thunder}> <img src="/thunder.svg" alt="thunder" />
            </div>
            <Button className={classes.matchButton} onClick={()=>{setOpen(!open); console.log(current)}}>Start the Matcher</Button>
        </div>
        ) }
                
                    <div style={{position: "absolute", right: "4%", display: "flex", alignItems: "center"}}>
                        <Typography style={{fontSize: "10px", color: "#323643", opacity: "57%"}}>Powered by</Typography>
                        <img className={styles.logo} src="/logo.svg" alt="logo" />
                    </div>
                </div>

                <FilterView open={open} setOpen={setOpen} current={current} next={next} previous={previous}/>

            </Container>
        </div>
    )
}

export default Matcher