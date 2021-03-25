import Router from "next/router";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite } from "../Matcher/MatcherService";
import muiStyles from './NeighborhoodListStyles';

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ScrollMenu from "../../common/scrollMenu/scrollMenu";
import IconButton from "@material-ui/core/IconButton";
import { Favorite, FavoriteBorderSharp } from "@material-ui/icons";
import { Typography, Grid } from "@material-ui/core";
import NeighborhoodCard from "./neighborhoodCard";

const useStyles = makeStyles(muiStyles);

const NeighborhoodListBar = ({ onClick }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const neighborhoods = useSelector(state => state.modules.matcher.matched.data);
  // console.log(neighborhoods);
  const favorites = useSelector(state => state.modules.matcher.favorites);
  const Items =
    neighborhoods?.length &&
    neighborhoods.slice(0, 50).map((neighborhood, i) => (
      <div key={`${neighborhood.Neighborhood}${i}`}>
        <NeighborhoodCard onClick={onClick} neighborhood={neighborhood} />
      </div>
    ));

  return (
    <React.Fragment>
      <Grid
        className={classes.nList_root}
        item
        // container alignItems="center" justify="center"
      >
        <ScrollMenu onSelect={onClick} Items={Items} />
      </Grid>
    </React.Fragment>
  );
};

export default NeighborhoodListBar;
