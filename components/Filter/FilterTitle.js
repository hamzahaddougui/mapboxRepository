import React from "react";
import Router, { useRouter } from "next/router";
import { makeStyles, Typography } from "@material-ui/core";

import BackButton from "../../common/BackButton/BackButton";
import muiStyles from "./FilterTitleStyles";

const useStyles = makeStyles(muiStyles);

const FilterTitle = () => {
    const classes = useStyles();
    const router = useRouter();

    const handleBack = () => {
      router.push("/matcher");
    };

    return (
        <div className={classes.jumbo}>
        <BackButton onClick={handleBack} />
        <div className={classes.header}>
          <h2 className={classes.title}>Narrow down your Match</h2>
              <Typography className={classes.subtitle}>
              Choose as many filters as you like.
              <br />
              You can always change them later
              </Typography>
        </div>
        </div>
    );
};

export default FilterTitle;