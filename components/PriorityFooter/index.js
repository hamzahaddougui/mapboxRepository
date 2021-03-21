import React from "react";
import muiStyles from "./PriorityFooterStyles";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(muiStyles);

const PriorityFooter = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.bottomBox}>
      <div className={classes.clickWrapper} onClick={onClick}>
        <img className={classes.nMatcher} src="/N_Matcher.svg" alt="Neighborhood Matcher Icon" />
        <div className={classes.navigation}>Neighborhood Matcher</div>
      </div>

      <div style={{ position: "absolute", right: "4%", display: "flex", alignItems: "center" }}>
        <Typography style={{ fontSize: "10px", color: "#323643", opacity: "57%" }}>
          Powered by
        </Typography>
        <img className={classes.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default PriorityFooter;
