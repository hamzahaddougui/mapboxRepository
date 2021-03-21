import React from "react";
import Router, { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core";

import FilterForm from "components/Filter/FilterForm";
import FilterFooter from "components/FilterFooter";
import BackButton from "../../../common/BackButton/BackButton";
import muiStyles from "./startStyles";

const useStyles = makeStyles(muiStyles);

const Start = () => {
  const classes = useStyles();
  const router = useRouter();
  const handleBack = () => {
    router.push("/matcher");
  };
  const handleNext = () => {
    router.push("/matcher/priority");
  };

  return (
    <div className={classes.root} open={true}>
      <div className={classes.jumbo}>
        <BackButton onClick={handleBack} />
        <div className={classes.header}>
          <h2 className={classes.title}>Narrow down your Match</h2>
          <div className={classes.subtitle}>
            <div>
              Choose as many filters as you like.
              <br />
              You can always change them later
            </div>
          </div>
        </div>
      </div>

      <div className={classes.form}>
        <FilterForm />
      </div>
      <FilterFooter onClick={handleNext} />
    </div>
  );
};

export default Start;
