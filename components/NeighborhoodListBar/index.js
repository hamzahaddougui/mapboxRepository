import Router from "next/router";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite } from "../Matcher/MatcherService";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ScrollMenu from "../../common/scrollMenu/scrollMenu";
import IconButton from "@material-ui/core/IconButton";
import { Favorite, FavoriteBorderSharp } from "@material-ui/icons";
import { Typography, Grid } from "@material-ui/core";
import NeighborhoodCard from "./neighborhoodCard";

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
    // height: "210px",
    padding: "4px 0",
    position: "fixed",
    bottom: 0,
    // height: "25%",
    width: "100%",
    zIndex: "2",
    paddingBottom: "100px",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    //marginTop: 'calc(100vh - 33%)',
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins",
    fontWeight: "Bold",
    textAlign: "center",
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    cursor: "pointer",
  },
  score: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "Bold",
  },
  heartIcon: {
    color: "white",
  },
  HeartIconWrapper: {
    position: "absolute",
    top: "18px",
    right: "21px",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  wrapper: {
    backgroundColor: "#323643",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 50)",
    borderRadius: "24px",
    margin: "0 4px",
    width: "257px",
    height: "100%",
    //cursor: "pointer",
  },
}));

const NeighborhoodListBar = ({ onClick }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const neighborhoods = useSelector(state => state.modules.matcher.matched.data);
  const favorites = useSelector(state => state.modules.matcher.favorites);
  const Items =
    neighborhoods?.length &&
    neighborhoods.slice(0, 50).map((neighborhood, i) => (
      <div key={`${neighborhood.Neighborhood}`}>
        <NeighborhoodCard neighborhood={neighborhood} />
      </div>
    ));

  return (
    <React.Fragment>
      <Grid
        className={classes.root}
        item
        // container alignItems="center" justify="center"
      >
        <ScrollMenu onSelect={onClick} Items={Items} />
      </Grid>
    </React.Fragment>
  );
};

export default NeighborhoodListBar;
