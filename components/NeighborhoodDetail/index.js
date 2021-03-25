import React, { useState } from "react";
import Router from "next/router";

import { useSelector } from "react-redux";

// import ScrollArea from "../../common/scrollArea/scrollArea";
import styles from "./NeighborhoodDetail.module.css";
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

const useStyles = makeStyles(theme => ({
  root: {
    // width: "1000px",
    // height: "100vh",
  },
  jumboBackground: {
    backgroundColor: "#9A9895",
    backgroundImage: "url(/map_head.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "22%",
    position: "fixed",
  },
  backContainer: {
    position: "absolute",
    display: "inline-flex",
    margin: "30px 0 0 32px",
    cursor: "pointer",
  },
  backIcon: {
    width: "24px",
    height: "24px",
    display: "inline-flex",
    float: "left",
    alignItems: "center",
    marginRight: "4px",
  },
  backText: {
    display: "inline-flex",
    float: "left",
    alignItems: "center",
    margin: 0,
    fontFamily: "Poppins",
    fontSize: 12,
    color: "#323643",
  },
  paper: {
    // width: "730px",
    // height: "86%",
    // position: "absolute",
    // left: "50%",
    // transform: "translate(-50%)",
    // top: "2%",
    marginBottom: "2em",
    borderRadius: "24px",
    // boxShadow: "0 5px 18px 0 rgba(227,228,254,0.63)",
    // overflow: "auto",
    paddingBottom: "1em",
  },
  title: {
    width: "153px",
    height: "41px",
    backgroundColor: "#FFF",
    // position: "absolute",
    // left: "50%",
    // transform: "translate(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0 0 34px 34px",
  },
  titleTxt: {
    fontFamily: "Poppins",
    fontSize: 16.02,
    textAlign: "center",
    textTransform: "Capitalize",
  },
  imgSlider: {
    width: "100%",
    // height: "547px",
    height: "400px",
    // backgroundColor: "#575FF9",
    backgroundImage: `url(${NeighborhoodMiniCardImg})`,
    borderRadius: "24px 24px 0 0",
    position: "relative",
  },
  scoreBall: {
    width: "71px",
    height: "41px",
    backgroundColor: "#FFF",
    borderRadius: "20.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1em",
    // position: "absolute",
  },
  score: {
    fontFamily: "Poppins",
    fontSize: 16.02,
    color: "#575FF9",
    fontWeight: "bold",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: "60px",
    margin: 0,
  },
  progressBar: {
    // "& .MuiLinearProgress-root": {
    //   height: "22px",
    //   borderRadius: "8px",
    // },
    // borderRadius: "10px",
    height: "100%",
    backgroundColor: "#575FF9",
    position: "relative",
  },
  progressContainer: {
    margin: "0.5em 1em 0.5em 0em",
    height: "20px",
    width: "129px",
    backgroundColor: "#e7e7e7",
    borderRadius: "10px",
    overflow: "hidden",
    // right: "36px",
  },
  progressTxt: {
    // position: "absolute",
    // left: "50%",
    // transform: "translate(-50%)",
    // marginLeft: "3em",
    // marginTop: "-3px",
    color: "#FFF",
  },
  clearWrapper: {
    backgroundColor: "white",
    height: "68px",
    width: "68px",
    color: "#575FF9",
    boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
  },
  redoWrapper: {
    backgroundColor: "white",
    height: "48px",
    width: "48px",
    color: "#323643",
    boxShadow: "0 4px 8px 0 rgb(14 31 53 / 16%)",
  },
  favoriteWrapper: {
    backgroundColor: "white",
    height: "68px",
    width: "68px",
    color: "#FF0061",
    boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
  },
  bigIcon: {
    fontSize: "38px",
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
      height: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
}));

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

        <Grid container className={styles.navigation}>
          {/* <GridList className={classes.gridList} cols={5.5}>
                            {filters?.map((filter, i) => (
                                <span className={styles.navigationElement} key={i}>
                                    {filter.name}
                                </span>
                            ))}
                        </GridList> */}
          <div className={styles.container}>
            <div style={{ paddingLeft: "6px" }} className={styles.navigationElement}>
              <span
                className={active === "percent match" ? styles.categoryActive : styles.category}
                onClick={() => {
                  setActive("percent match");
                }}
              >
                Percent match
              </span>
            </div>
            {filters?.map((filter, i) => (
              <div className={styles.navigationElement} key={i}>
                <span
                  className={active === filter.name ? styles.categoryActive : styles.category}
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

        <GridList cellHeight="auto" className={styles.table}>
          {filters?.map(
            (filter, i) =>
              filter.name && (
                <Grid
                  className={styles.itemContainer}
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                  key={i}
                >
                  <span className={styles.filterName}>{filter.name}</span>
                  <LinearProgressWithLabel value={90} />
                </Grid>
              ),
          )}
        </GridList>
      </Paper>

      <Grid item container justify="center" className={styles.iconsContainer}>
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
