// Third party
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

// Assets
import muiStyles from "./SeeMoreCardStyles";

const useStyles = makeStyles(muiStyles);

const SeeMoreCard = ({ onClick }) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(2);
  const onMouseOver = () => setElevation(6);
  const onMouseOut = () => setElevation(2);

  return (
    <Paper
      component={Grid}
      elevation={elevation}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      item
      container
      direction="column"
      className={classes.root}
      onClick={onClick}
    >
      <Grid item container className={classes.text}>
        See More...
      </Grid>
    </Paper>
  );
};

export default SeeMoreCard;