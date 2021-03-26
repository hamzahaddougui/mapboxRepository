// Third party
import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import NeighborhoodCard from "../NbCard/NbCard";
import ScrollMenu from "../../common/scrollMenu/scrollMenu";

// Assets
import muiStyles from "./NbListBarStyles";

const useStyles = makeStyles(muiStyles);

const NeighborhoodListBar = ({ onClick }) => {
  const classes = useStyles();
  const neighborhoods = useSelector(state => state.modules.neighborhood.matched.data);

  const renderItems = () =>
    neighborhoods?.length &&
    neighborhoods.slice(0, 50).map((neighborhood, i) => (
      <div key={`${neighborhood.Neighborhood}${i}`}>
        <NeighborhoodCard onClick={onClick} neighborhood={neighborhood} />
      </div>
    ));

  return (
    <React.Fragment>
      <Grid className={classes.root} item>
        <ScrollMenu onSelect={onClick} Items={renderItems()} />
      </Grid>
    </React.Fragment>
  );
};

export default NeighborhoodListBar;
