import Router from "next/router";

import { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./DetailNeighborhood.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Typography,
  Paper,
  GridList,
  Button,
  LinearProgress,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
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
    // width: "827px",
    width: "55%",
    height: "85%",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    top: "2%",
    borderRadius: "24px",
    boxShadow: "0 5px 18px 0 rgba(227,228,254,0.63)",
    overflow: "auto",
  },
  title: {
    width: "153px",
    height: "41px",
    backgroundColor: "#FFF",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
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
    height: "65%",
    backgroundColor: "#575FF9",
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
    position: "absolute",
    bottom: "26px",
    left: "22px",
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
    "& .MuiLinearProgress-root": {
      height: "22px",
      borderRadius: "8px",
    },
  },
  progressContainer: {
    width: "129px",
    position: "absolute",
    right: "36px",
  },
  progressTxt: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    color: "#FFF",
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
      <Box className={classes.progressContainer} display="flex" alignItems="center">
        <Box className={classes.progressBar} width="129px" mr={2}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box className={classes.progressTxt} minWidth={35}>
          <Typography variant="body2">{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const [active, setActive] = useState("percent match");

  const filters = useSelector(state => state.modules.filter.filters);
  // const formattedFilters = JSON.stringify(filters);
  // console.log(formattedFilters);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.jumboBackground}>
        <div
          className={classes.backContainer}
          onClick={() => {
            Router.push("/neighborhood");
          }}
        >
          <img className={classes.backIcon} src="/back.svg" alt="backButton"></img>
          <div className={classes.backText}>Map View</div>
        </div>
      </div>

      <Paper className={classes.paper}>
        <div className={classes.imgSlider}>
          <div className={classes.title}>
            <Typography variant="h5" className={classes.titleTxt}>
              south beach
            </Typography>
          </div>

          <div className={classes.scoreBall}>
            <Typography variant="h5" className={classes.score}>
              90%
            </Typography>
          </div>
        </div>

        <div className={styles.navigation}>
          {/* <GridList className={classes.gridList} cols={5.5}>
                            {filters?.map((filter, i) => (
                                <span className={styles.navigationElement} key={i}>
                                    {filter.name}
                                </span>
                            ))}
                        </GridList> */}
          <div className={styles.container}>
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
        </div>

        <div className={styles.table}>
          {filters?.map((filter, i) => (
            <div className={styles.tableElement} key={i}>
              <span className={styles.filterName}>{filter.name}</span>
              <LinearProgressWithLabel value={90} />
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default index;
