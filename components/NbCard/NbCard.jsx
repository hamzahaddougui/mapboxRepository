// Third party
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Favorite, FavoriteBorderSharp } from "@material-ui/icons";
import { Typography, Grid, IconButton, Paper } from "@material-ui/core";

import ReactCardFlip from 'react-card-flip';

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
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.modules.neighborhood.favorites);

  const handleMouseOver = () => setElevation(6);

  const handleMouseOut = () => setElevation(2);

  const handleAddToFavorites = e => {
    e.stopPropagation();
    dispatch(addFavorite(neighborhood));
  };

  const handleDetails = e => {
    e.stopPropagation();
    onClick(e);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

    <Paper
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      component={Grid}
      elevation={elevation}
      item
      container
      direction="column"
      className={classes.root}
      // onClick={onClick}
      onClick={() => {setIsFlipped(!isFlipped)}}
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

    <Paper
      className={classes.backSideRoot}
      onClick={() => {setIsFlipped(!isFlipped)}}
      component={Grid}
      item
      container
      direction="column"
      spacing={0}
    >
      {favorites.includes(neighborhood) ? (
            <img 
              className={classes.backSideHeart}
              src="/heartOn.svg"
              onClick={handleAddToFavorites}
            />
          ) : (
            <img 
              className={classes.backSideHeart}
              src="/heartOff.svg" 
              onMouseOver={e => (e.currentTarget.src = "/heartHover.svg")}
              onMouseOut={e => (e.currentTarget.src = "/heartOff.svg")}
              onClick={handleAddToFavorites}
            />
          )
      }
      <Typography className={classes.backSideTitle} variant="h6">Add to favorites</Typography>
      <Typography className={classes.backSideDesc}>To find homes in this neighborhood</Typography>
      <Typography className={classes.backSideDetail} onClick={handleDetails}>About this neighborhood</Typography>
    </Paper>

  </ReactCardFlip>
  );
};

export default NeighborhoodCard;
