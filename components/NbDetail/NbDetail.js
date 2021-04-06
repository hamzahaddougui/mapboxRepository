// Third party
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, GridList, Grid, IconButton } from "@material-ui/core";
import { Clear, Replay, Favorite } from "@material-ui/icons";

// Assets
import muiStyles from "./NbDetailStyles";
const image = "/NeighborhoodMiniCardImg.png";
const useStyles = makeStyles(muiStyles);

const NbDetail = () => {
  const classes = useStyles({ image });
  const [active, setActive] = useState("percent match");
  const filters = useSelector(state => state.modules.filter.filters);
  const current= useSelector(state=> state.modules.neighborhood.current);
  const {Neighborhood}= current;

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

  return (
    <div className={classes.root}>
      <Paper elevation={5} component={Grid} container className={classes.paper}>
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          className={classes.imgSlider}
        >
          <Grid item container justify="center">
            <div className={classes.title}>
              <Typography variant="h5" className={classes.titleTxt}>
                {Neighborhood}
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
          <Replay className={classes.smallIcon} />
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

export default NbDetail;
