import React, { useState } from "react";
import Router from "next/router";

import { useSelector } from "react-redux";

// import ScrollArea from "../../common/scrollArea/scrollArea";
import muiStyles from './NeighborhoodDetailStyles';

import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Typography,
  Paper,
  GridList,
  Grid,
  Button,
  LinearProgress,
  Box,
  IconButton,
  Divider,
} from "@material-ui/core";
import { Clear, Replay, Favorite } from "@material-ui/icons";
const NeighborhoodMiniCardImg = "/NeighborhoodMiniCardImg.png";

const useStyles = makeStyles(muiStyles);

// LinearProgressWithLabel.propTypes = {
//     /**
//      * The value of the progress indicator for the determinate and buffer variants.
//      * Value between 0 and 100.
//      */
//     value: PropTypes.number.isRequired,
// };

const index = () => {
  const classes = useStyles();

  function LinearProgressWithLabel(props) {
    return (
      <div className={classes.progressContainer}>
        <div className={classes.progressBar} style={{ width: `${props.value}%` }}>
          <Typography align="center" className={classes.progressTxt} variant="body2">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </div>
      </div>
    );
  }

  const [active, setActive] = useState("percent match");

  const filters = useSelector(state => state.modules.filter.filters);
  // const formattedFilters = JSON.stringify(filters);
  // console.log(formattedFilters);

  //console.log(history);

  return (
    <div className={classes.root}>
      <Paper elevation={5} component={Grid} container className={classes.paper}>
        <Grid
          item
          container
          direction="column"
          // alignItems="center"
          justify="space-between"
          className={classes.imgSlider}
        >
          <Grid
            item
            container
            justify="center"
            // style={{ width: "100%" }}
          >
            <div className={classes.title}>
              <Typography variant="h5" className={classes.titleTxt}>
                South Beach
              </Typography>
            </div>
          </Grid>

          <div className={classes.scoreBall}>
            <Typography variant="h5" className={classes.score}>
              90%
            </Typography>
          </div>
        </Grid>

        <Grid container className={classes.navigation}>
          {/* <GridList className={classes.gridList} cols={5.5}>
                            {filters?.map((filter, i) => (
                                <span className={styles.navigationElement} key={i}>
                                    {filter.name}
                                </span>
                            ))}
                        </GridList> */}
          <div className={classes.container}>
            <div style={{ paddingLeft: "6px" }} className={classes.navigationElement}>
              <span
                className={active === "percent match" ? classes.categoryActive : classes.category}
                onClick={() => {
                  setActive("percent match");
                }}
              >
                Percent match
              </span>
            </div>
            {filters?.map((filter, i) => (
              <div className={classes.navigationElement} key={i}>
                <span
                  className={active === filter.name ? classes.categoryActive : classes.category}
                  onClick={() => {
                    setActive(filter.name);
                  }}
                >
                  {filter.name}
                </span>
              </div>
            ))}
          </div>

          {/* <hr className={styles.line} /> */}
        </Grid>

        <GridList cellHeight="auto" className={classes.table}>
          {filters?.map(
            (filter, i) =>
              filter.name && (
                <Grid
                  className={classes.itemContainer}
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                  key={i}
                >
                  <span className={classes.filterName}>{filter.name}</span>
                  <LinearProgressWithLabel value={90} />
                </Grid>
              ),
          )}
        </GridList>
      </Paper>

      <Grid item container justify="center" className={classes.iconsContainer}>
        <IconButton
          className={classes.clearWrapper}
          arial-label="Clear"
          onClick={() => {
            console.log("Clear Action");
          }}
        >
          <Clear className={classes.bigIcon} />
        </IconButton>

        <IconButton
          style={{ margin: "0em 2em 0em 2em" }}
          className={classes.redoWrapper}
          arial-label="Redo"
          onClick={() => {
            console.log("Redo Action");
          }}
        >
          <Replay />
        </IconButton>

        <IconButton
          className={classes.favoriteWrapper}
          arial-label="Favorite"
          onClick={() => {
            console.log("Favorite Action");
          }}
        >
          <Favorite className={classes.bigIcon} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default index;
