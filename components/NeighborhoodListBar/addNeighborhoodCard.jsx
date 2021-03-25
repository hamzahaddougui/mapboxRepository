import Router from "next/router";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import muiStyles from './NeighborhoodListStyles';

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box } from "@material-ui/core";

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
      className={classes.addNghbr_wrapper}
      onClick={onClick}
    >
      <Grid item container className={classes.addNghbr_text}>
        <span style={{ fontSize: 22, fontWeight: "bold", marginRight: "6px" }}>+ </span> Add a
        neighborhood
      </Grid>
    </Paper>
  );
};

export default AddNbCard;
