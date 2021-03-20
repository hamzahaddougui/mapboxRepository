import Router from "next/router";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box } from "@material-ui/core";
const addNbIcon = "/addNeighborhood.svg";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "white",
    backgroundImage: `url(${addNbIcon})`,
    backgroundRepeat: "no-repeat",
    // backgroundSize: "center",
    backgroundPosition: "50%  35%",
    borderRadius: "24px",
    margin: "0 4px",
    width: "257px",
    // height: "100%",
    cursor: "pointer",
    marginBottom: "1em",
    zIndex: 1500,
    position: "relative",
  },
  text: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "lighter",
    textAlign: "center",
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "6.7em",
    paddingBottom: "2em",
  },
}));

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
      className={classes.wrapper}
      onClick={onClick}
    >
      <Grid item container className={classes.text}>
        <span style={{ fontSize: 22, fontWeight: "bold", marginRight: "6px" }}>+ </span> Add a
        neighborhood
      </Grid>
    </Paper>
  );
};

export default AddNbCard;
