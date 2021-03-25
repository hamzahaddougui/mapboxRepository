import Router from "next/router";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import muiStyles from './NeighborhoodListStyles';

import { addFavorite } from "../Matcher/NeighborhoodService";
import { Favorite, FavoriteBorderSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton, Paper } from "@material-ui/core";

const useStyles = makeStyles(muiStyles);

const NeighborhoodCard = ({ neighborhood, onClick }) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(2);

  const dispatch = useDispatch();

  const neighborhoods = useSelector(state => state.modules.neighborhood.matched);
  const favorites = useSelector(state => state.modules.neighborhood.favorites);

  const onMouseOver = () => setElevation(6);
  const onMouseOut = () => setElevation(2);

  const handleAddToFavorites = e => {
    e.stopPropagation();
    dispatch(addFavorite(neighborhood));
  };

  //console.log(neighborhood);
  // favorites.includes(neighborhood) ? console.log(neighborhood) : null;

  return (
    <Paper
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      component={Grid}
      elevation={elevation}
      item
      container
      direction="column"
      className={classes.nCard_wrapper}
      onClick={onClick}
    >
      <Grid item container justify="flex-end" alignItems="center">
        <IconButton
          className={classes.nCard_HeartIconWrapper}
          onClick={handleAddToFavorites}
          aria-label={`Heart ${neighborhood.Neighborhood}`}
        >
          {favorites.includes(neighborhood) ? (
            <Favorite style={{ color: "red" }} />
          ) : (
            <FavoriteBorderSharp className={classes.nCard_heartIcon} />
          )}
        </IconButton>
      </Grid>
      <Grid item container justify="center" alignItems="center">
        <Typography
          // nowrap
          style={{ padding: "1em", textOverflow: "ellipsis", overflow: "hidden" }}
          className={classes.nCard_title}
          align="center"
          variant="h6"
        >
          {neighborhood.Neighborhood}
        </Typography>
      </Grid>
      <Grid item container justify="flex-start" alignItems="center">
        <div className={favorites.includes(neighborhood) ? classes.scoreFavorite : classes.score}>
          <Typography align="center" className={classes.nCard_score} variant="body1">
            {Math.round(neighborhood.Score)}%
          </Typography>
        </div>
      </Grid>
    </Paper>
  );
};

export default NeighborhoodCard;
