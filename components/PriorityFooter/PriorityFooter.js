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
      <Typography 
        className={classes.exitMatcher}
        onClick={() => {console.log("Exit the matcher")}}
      >
        Exit the Matcher
      </Typography>
      
      <div className={classes.clickWrapper} onClick={onClick}>
        <img
          className={classes.nMatcherIcon}
          src="/N_Matcher.svg"
          alt="Neighborhood Matcher Icon"
        />
        <Typography className={classes.navigation}>Neighborhood Matcher</Typography>
      </div>

      <div className={classes.poweredByWrapper}>
        <Typography className={classes.poweredBy}>
          Powered by
        </Typography>
        <Typography className={classes.brandName}>
          Nomadville
        </Typography>
        {/* <img className={classes.logo} src="/logo.svg" alt="logo" /> */}
      </div>
    </div>
  );
};

export default PriorityFooter;
