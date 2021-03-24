import Router from "next/router";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollMenu from "../../common/scrollMenu/scrollMenu";

import muiStyles from './FavoriteListBarStyles';

import { addFavorite } from "../Matcher/NeighborhoodService";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, SvgIcon } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Favorite, FavoriteBorderSharp } from "@material-ui/icons";
import NeighborhoodCard from "../NeighborhoodListBar/neighborhoodCard";
import AddNeighborhoodCard from "../NeighborhoodListBar/addNeighborhoodCard";

// import { ReactComponent as AddNbIcon } from "../../../../public/addNeighborhood.svg";
// const addNbIcon = "/addNeighborhood.svg";
{
  /* <SvgIcon component={StarIcon} viewBox="0 0 600 476.6" />; */
}

import { Typography } from "@material-ui/core";

// console.log(AddNbIcon);

const useStyles = makeStyles(muiStyles);

const FavoriteListBar = ({ open, setOpen }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  //const neighborhoods = useSelector(state => state.modules.neighborhood.matched);
  const favorites = useSelector(state => state.modules.neighborhood.favorites);

  const addNeighborhoodItem = (
    <AddNeighborhoodCard
      onClick={() => {
        setOpen(!open);
      }}
      neighborhood={{ Neighborhood: "sbignzi", score: "150" }}
    />
  );
  // const addNeighborhoodItem = (
  //   <Paper
  //     component={Grid}
  //     item
  //     container
  //     direction="column"
  //     className={classes.addNeighborhoodPaper}
  //   >
  //     <Typography className={classes.addNeighborhoodTxt} variant="body1">
  //       Add a neighborhood
  //     </Typography>{" "}
  //     {/* </Grid> */}
  //   </Paper>
  // );

  let Items = [];
  Items.push(addNeighborhoodItem);

  favorites.forEach((neighborhood, i) =>
    Items.push(
      <div key={`${neighborhood.score}${i}`}>
        <NeighborhoodCard neighborhood={neighborhood} />
      </div>,
    ),
  );

  return (
    <div className={classes.root}>
      {/* <GridList className={classes.gridList} cols={5.5}> */}
      <ScrollMenu Items={Items} />
      {/* </GridList> */}
    </div>
  );
};

export default FavoriteListBar;
