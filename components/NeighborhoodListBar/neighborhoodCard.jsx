import Router from "next/router";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./NeighborhoodListBar.module.css";

import { addFavorite } from "../Matcher/MatcherService";
import { Favorite, FavoriteBorderSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton, Paper } from "@material-ui/core";

const NeighborhoodMiniCardImg = "/NeighborhoodMiniCardImg.png";

const useStyles = makeStyles(theme => ({
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins",
    fontWeight: "Bold",
    textAlign: "center",
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
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  wrapper: {
    backgroundColor: "#ffffff",
    backgroundImage: `url(${NeighborhoodMiniCardImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "24px",
    margin: "0 4px",
    width: "257px",
    cursor: "pointer",
    marginBottom: "1em",
  },
}));

const NeighborhoodCard = ({ neighborhood, onClick }) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(2);

  const dispatch = useDispatch();

  const neighborhoods = useSelector(state => state.modules.neighborhood.matched);
  const favorites = useSelector(state => state.modules.neighborhood.favorites);

  const onMouseOver = () => setElevation(6);
  const onMouseOut = () => setElevation(2);

  return (
    <Paper
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      component={Grid}
      elevation={elevation}
      item
      container
      direction="column"
      className={classes.wrapper}
    >
      <Grid item container justify="flex-end" alignItems="center">
        <IconButton
          className={classes.HeartIconWrapper}
          onClick={() => {
            dispatch(addFavorite(neighborhood));
          }}
          aria-label={`Heart ${neighborhood.Neighborhood}`}
        >
          {favorites.includes(neighborhood) ? (
            <Favorite style={{ color: "red" }} />
          ) : (
            <FavoriteBorderSharp className={classes.heartIcon} />
          )}
        </IconButton>
      </Grid>
      <Grid item container justify="center" alignItems="center">
        <Typography
          // nowrap
          style={{ padding: "1em", textOverflow: "ellipsis", overflow: "hidden" }}
          className={classes.title}
          align="center"
          variant="h6"
        >
          {neighborhood.Neighborhood}
        </Typography>
      </Grid>
      <Grid item container justify="flex-start" alignItems="center">
        <div className={favorites.includes(neighborhood) ? styles.scoreFavorite : styles.score}>
          <Typography align="center" className={classes.score} variant="body1">
            {neighborhood.Score}%
          </Typography>
        </div>
      </Grid>
    </Paper>
  );
};

export default NeighborhoodCard;
