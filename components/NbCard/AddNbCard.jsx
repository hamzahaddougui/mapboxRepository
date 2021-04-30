// Third party
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

// Assets
import muiStyles from "./AddNbCardStyles";

const useStyles = makeStyles(muiStyles);

const AddNbCard = ({ onClick }) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(3);
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
      justify="center"
      alignItems="center"
      className={classes.root}
      onClick={onClick}
    >
      <Grid item className={classes.imageContainer}>
        <img src="/addNeighborhood.svg" alt="Add Neighborhood" className={classes.addNbIcon}/>
      </Grid>
      <Grid item container className={classes.text}>
        <span className={classes.symbol}>+ </span> 
        <Typography className={classes.cardText}>Add a neighborhood</Typography>
      </Grid>
    </Paper>
  );
};

export default AddNbCard;
