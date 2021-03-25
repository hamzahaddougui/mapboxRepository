// Third party
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

// Assets
import muiStyles from "./PriorityFooterStyles";

const useStyles = makeStyles(muiStyles);

const PriorityFooter = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.clickWrapper} onClick={onClick}>
        <img
          className={classes.nMatcherIcon}
          src="/N_Matcher.svg"
          alt="Neighborhood Matcher Icon"
        />
        <div className={classes.navigation}>Neighborhood Matcher</div>
      </div>

      <div className={classes.poweredByWrapper}>
        <Typography className={classes.poweredByTxt}>Powered by</Typography>
        <img className={classes.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default PriorityFooter;
