import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./FavoriteListBar.module.css";

import { addFavorite } from "../../Matcher/NeighborhoodService";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Favorite, FavoriteBorderSharp } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
    height: "210px",
    padding: "4px 0",
    margin: "-48px 29px 0",
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
  addNeighborhood: {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    borderRadius: "24px",
    margin: "8px 4px",
  },
  addNeighborhoodImg: {
    width: "75px",
    height: "71px",
    marginTop: "24px",
  },
  addNeighborhoodTxt: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "lighter",
    textAlign: "center",
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addNeighborhoodWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
}));

const FavoriteListBar = ({open, setOpen}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  //const neighborhoods = useSelector(state => state.modules.neighborhood.matched);
  const favorites = useSelector(state => state.modules.neighborhood.favorites);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5.5}>
        <div className={classes.addNeighborhood}>

          <div className={classes.addNeighborhoodWrapper} onClick={() => {setOpen(!open)}}>
            <img
              className={classes.addNeighborhoodImg}
              src="/addNeighborhood.svg"
              alt="Add Neighborhood"
            />
            <Typography className={classes.addNeighborhoodTxt} variant="body1">
              <span style={{ fontSize: 22, fontWeight: "bold", marginRight: "6px" }}>+ </span> Add a
              neighborhood
            </Typography>
          </div>
        </div>

        {favorites.map(favorite => (
          <GridListTile className={classes.wrapper} key={favorite.Neighborhood}>
            {/* <img src={neighborhood.img} alt={neighborhood.title} /> */}
            {/* <div className={classes.wrapper}></div> */}
            {/* <GridListTileBar
              title={neighborhood.Neighborhood}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${neighborhoods.Neighborhood}`}>
                  <FavoriteBorderSharp className={classes.title} />
                </IconButton>
              }
            /> */}

            {/* { favorites.includes(neighborhood) ? (setFavorite(true)) : (setFavorite(false)) } */}

            <IconButton
              className={classes.HeartIconWrapper}
              onClick={() => {
                dispatch(addFavorite(favorite));
              }}
              aria-label={`Heart ${favorite.Neighborhood}`}
            >
              {favorites.includes(favorite) ? (
                <Favorite style={{ color: "red" }} />
              ) : (
                <FavoriteBorderSharp className={classes.heartIcon} />
              )}
              {/* <FavoriteBorderSharp className={classes.heartIcon}/> */}
            </IconButton>
            <Typography className={classes.title} variant="h6">
              {favorite.Neighborhood}
            </Typography>
            <div className={favorites.includes(favorite) ? styles.scoreFavorite : styles.score}>
              <Typography className={classes.score} variant="body1">
                {favorite.Score}%
              </Typography>
            </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default FavoriteListBar;
