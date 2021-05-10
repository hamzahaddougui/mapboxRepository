// Third party
import React from "react";
import Router from "next/router";
import { makeStyles, Grid, Typography } from "@material-ui/core";

// Assets
import muiStyles from "./SignUpHeaderStyles";

const useStyles = makeStyles(muiStyles);

const SignUpHeader = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.background} />
      <Grid
        item
        className={classes.backContainer}
        onClick={() => {
          Router.push("/matcher");
          console.log('Back');
        }}
      >
        <img className={classes.backIcon} src="/back.svg" alt="backButton"></img>
        <div className={classes.backText}>Back</div>
      </Grid>
      <Grid item className={classes.header}>
        <Typography variant="h2" className={classes.headerTitle}>
          Proceed to Home Matcher
        </Typography>
        <Typography variant="body1" className={classes.headerDesc}>
          The Home Matcher will match you with the homes in these neighborhood
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default SignUpHeader;
