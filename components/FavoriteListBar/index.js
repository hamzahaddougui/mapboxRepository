import Router from "next/router";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollMenu from "../../common/scrollMenu/scrollMenu";

import styles from "./FavoriteListBar.module.css";

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
const addNbIcon = "/addNeighborhood.svg";
{
  /* <SvgIcon component={StarIcon} viewBox="0 0 600 476.6" />; */
}

import { Typography } from "@material-ui/core";

// console.log(AddNbIcon);

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
    // height: "210px",
    width: "100vw",
    // padding: "4px 0",
    // height: "150px",
    // margin: "0px 29px 0",
    "& .menu-item-wrapper": {
      verticalAlign: "top",
      marginTop: "1em",
    },
    "& .menu-wrapper": {
      width: "100%",
    },
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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
    margin: "8px 4px",
    //width: '257px',
  },
  addNeighborhoodPaper: {
    backgroundColor: "#ffffff",
    backgroundImage: `url(${addNbIcon})`,
    backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    backgroundPosition: "center",
    // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    width: "257px",
    height: "175px",
    borderRadius: "24px",
    // padding: "1em 2em 2em 2em",
    marginRight: "0.6em",
    cursor: "pointer",
  },
  addNeighborhoodImg: {
    // width: "75px",
    // height: "71px",
    // marginTop: "24px",
  },
  addNeighborhoodTxt: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "lighter",
    // height: "100%",
    // bottom: 0,
    // textAlign: "center",
    // marginTop: "8px",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
  addNeighborhoodWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
}));

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
