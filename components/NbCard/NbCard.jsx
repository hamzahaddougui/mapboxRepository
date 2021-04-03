// Third party
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Favorite, FavoriteBorderSharp } from "@material-ui/icons";
import { Typography, Grid, IconButton, Paper } from "@material-ui/core";

// Actions
import { addFavorite } from "../../services/actions/neighborhood.actions";

// Assets
import muiStyles from "./NbCardStyles";
var image = "/NeighborhoodMiniCardImg.png";

const useStyles = makeStyles(muiStyles);

const NeighborhoodCard = ({ neighborhood, onClick }) => {
  
  image = neighborhood.City.replace(/ /g,"_");

  const classes = useStyles({ image });
  const [elevation, setElevation] = useState(2);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.modules.neighborhood.favorites);

  const handleMouseOver = () => setElevation(6);

  const handleMouseOut = () => setElevation(2);

  const handleAddToFavorites = e => {
    e.stopPropagation();
    dispatch(addFavorite(neighborhood));
  };

  console.log(neighborhood.City.replace(/ /g,"_"));

  return (
    <Paper
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      component={Grid}
      elevation={elevation}
      item
      container
      direction="column"
      className={classes.root}
      onClick={onClick}
    >
      <Grid item container justify="flex-end" alignItems="center">
        <IconButton
          className={classes.heartContainer}
          onClick={handleAddToFavorites}
          aria-label={`Heart ${neighborhood.Neighborhood}`}
        >
          {favorites.includes(neighborhood) ? (
            <Favorite style={{ color: "red" }} />
          ) : (
            <FavoriteBorderSharp className={classes.heart} />
          )}
        </IconButton>
      </Grid>
      <Grid item container justify="center" alignItems="center">
        <Typography
          // nowrap
          className={classes.title}
          align="center"
          variant="h6"
        >
          {neighborhood.Neighborhood}
        </Typography>
      </Grid>
      <Grid item container justify="flex-start" alignItems="center">
        <div
          className={
            favorites.includes(neighborhood) ? classes.scoreContainerFav : classes.scoreContainer
          }
        >
          <Typography align="center" className={classes.scoreValue} variant="body1">
            {Math.round(neighborhood.Score)}%
          </Typography>
        </div>
      </Grid>
    </Paper>
  );
};

export default NeighborhoodCard;
