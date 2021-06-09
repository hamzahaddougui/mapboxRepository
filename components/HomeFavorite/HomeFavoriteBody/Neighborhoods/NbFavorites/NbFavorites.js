// Third Party
import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Button, GridList } from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// Assets
import muiStyles from './NbFavoritesStyles';

const useStyles = makeStyles(muiStyles);

const NbFavorites = () => {
    const classes = useStyles();

    const [selectedElement, setSelectedElement] = useState(0);

    // console.log(document.getElementById('navigationArea').clientWidth);
    // console.log('Width: ', document.getElementById('navigationArea').scrollWidth);

    function LinearProgressWithLabel(props) {
        return (
          <div className={classes.progressContainer}>
            <div className={classes.progressBar} style={{ width: `${props.value}%` }}>
              
            </div>
            <Typography align="center" className={classes.progressTxt} variant="body2">{`${Math.round(
                props.value,
              )}%`}</Typography>
          </div>
          
        );
      };

    return (
        <Grid container direction="column" style={{overflow: "hidden"}}>
            <Typography className={classes.nbNumTxt}>
                <span>205</span> Neighborhoods found
            </Typography>

            <Grid item className={classes.navigationContainer} id="navigationArea" >
                <Button className={ selectedElement === 0 ? classes.navigationElementSelected : classes.navigationElement} onClick={() => {setSelectedElement(0)}}>All <FiberManualRecordIcon className={classes.dotIcon} /> 205</Button>
                <Button className={ selectedElement === 1 ? classes.navigationElementSelected : classes.navigationElement} onClick={() => {setSelectedElement(1)}}>Ranch <FiberManualRecordIcon className={classes.dotIcon} /> 50</Button>
                <Button className={ selectedElement === 2 ? classes.navigationElementSelected : classes.navigationElement} onClick={() => {setSelectedElement(2)}}>Gated community <FiberManualRecordIcon className={classes.dotIcon} /> 100</Button>
                <Button className={ selectedElement === 3 ? classes.navigationElementSelected : classes.navigationElement} onClick={() => {setSelectedElement(3)}}>Clean <FiberManualRecordIcon className={classes.dotIcon} /> 60</Button>
                <Button className={ selectedElement === 4 ? classes.navigationElementSelected : classes.navigationElement} onClick={() => {setSelectedElement(4)}}>All <FiberManualRecordIcon className={classes.dotIcon} /> 205</Button>
                <Button className={ selectedElement === 5 ? classes.navigationElementSelected : classes.navigationElement} onClick={() => {setSelectedElement(5)}}>Ranch <FiberManualRecordIcon className={classes.dotIcon} /> 50</Button>
                <Button className={ selectedElement === 6 ? classes.navigationElementSelected : classes.navigationElement} onClick={() => {setSelectedElement(6)}}>Gated community <FiberManualRecordIcon className={classes.dotIcon} /> 100</Button>
                <Button className={ selectedElement === 7 ? classes.navigationElementSelected : classes.navigationElement} onClick={() => {setSelectedElement(7)}}>Clean <FiberManualRecordIcon className={classes.dotIcon} /> 60</Button>
            </Grid>

            <Grid item container direction="row" className={classes.sortContainer}>
                <Typography className={classes.sortTxt}>Sort by : Match</Typography>
                <img src="/sortMatch.svg" alt="Sort by match icon" className={classes.sortIcon} />
            </Grid>

            <Grid item container spacing={1} style={{marginTop: "16px", overflowY: "scroll", overflowX: "hidden"}}>
                
                <Grid item container direction="column" className={classes.cardContainer} sm={6}>
                    <Grid item container direction="column" justify="space-between" className={classes.cardImage}>
                        <Grid item container justify="flex-end" alignItems="center">
                                <img 
                                className={classes.heartIcon}
                                src="/heartOn.svg"
                                />
                        </Grid>
                        <Grid item container justify="center" alignItems="center">
                            <Typography
                            className={classes.title}
                            align="center"
                            variant="h6"
                            >
                            Fort lauderdale
                            </Typography>
                        </Grid>
                        <Grid item container justify="flex-start" alignItems="center">
                            <div
                            className={classes.scoreContainerFav}
                            >
                            <Typography align="center" className={classes.scoreValue} variant="body1">
                                70%
                            </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item container justify="flex-start" style={{width: "100%"}}>
                    <Typography className={classes.homesNumTxt}>58 Homes</Typography>
                    </Grid>

                    <Grid item container >
                        <GridList cellHeight="auto" style={{width: "100%", height: "fit-content"}} >
                                <Grid
                                    className={classes.itemContainer}
                                    item
                                    container
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <span className={classes.filterName}>Ranch</span>
                                    <LinearProgressWithLabel value={85} />
                                </Grid>
                        </GridList>
                    </Grid>
                </Grid>

                <Grid item container direction="column" className={classes.cardContainer} sm={6}>
                    <Grid item container direction="column" justify="space-between" className={classes.cardImage}>
                        <Grid item container justify="flex-end" alignItems="center">
                                <img 
                                className={classes.heartIcon}
                                src="/heartOn.svg"
                                />
                        </Grid>
                        <Grid item container justify="center" alignItems="center">
                            <Typography
                            className={classes.title}
                            align="center"
                            variant="h6"
                            >
                            Fort lauderdale
                            </Typography>
                        </Grid>
                        <Grid item container justify="flex-start" alignItems="center">
                            <div
                            className={classes.scoreContainerFav}
                            >
                            <Typography align="center" className={classes.scoreValue} variant="body1">
                                70%
                            </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item container justify="flex-start" style={{width: "100%"}}>
                    <Typography className={classes.homesNumTxt}>58 Homes</Typography>
                    </Grid>

                    <Grid item container >
                        <GridList cellHeight="auto" style={{width: "100%", height: "fit-content"}} >
                                <Grid
                                    className={classes.itemContainer}
                                    item
                                    container
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <span className={classes.filterName}>Ranch</span>
                                    <LinearProgressWithLabel value={85} />
                                </Grid>
                        </GridList>
                    </Grid>
                </Grid>

                <Grid item container direction="column" className={classes.cardContainer} sm={6}>
                    <Grid item container direction="column" justify="space-between" className={classes.cardImage}>
                        <Grid item container justify="flex-end" alignItems="center">
                                <img 
                                className={classes.heartIcon}
                                src="/heartOn.svg"
                                />
                        </Grid>
                        <Grid item container justify="center" alignItems="center">
                            <Typography
                            className={classes.title}
                            align="center"
                            variant="h6"
                            >
                            Fort lauderdale
                            </Typography>
                        </Grid>
                        <Grid item container justify="flex-start" alignItems="center">
                            <div
                            className={classes.scoreContainerFav}
                            >
                            <Typography align="center" className={classes.scoreValue} variant="body1">
                                70%
                            </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item container justify="flex-start" style={{width: "100%"}}>
                    <Typography className={classes.homesNumTxt}>58 Homes</Typography>
                    </Grid>

                    <Grid item container >
                        <GridList cellHeight="auto" style={{width: "100%", height: "fit-content"}} >
                                <Grid
                                    className={classes.itemContainer}
                                    item
                                    container
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <span className={classes.filterName}>Ranch</span>
                                    <LinearProgressWithLabel value={85} />
                                </Grid>
                        </GridList>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default NbFavorites
