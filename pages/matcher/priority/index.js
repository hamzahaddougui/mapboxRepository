import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

import { loadMatched } from "components/Matcher/MatcherService";
import PriorityForm from "components/Priority/PriorityForm";
import PriorityFooter from "components/PriorityFooter";
import BackButton from "../../../common/BackButton/BackButton";
import muiStyles from "styles/priorityStyles";

const useStyles = makeStyles(muiStyles);

const Priority = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBack = () => {
    router.push("/matcher/start");
  };
  const handleMatch = () => {
    console.log("match");
    router.push("/matcher");
    dispatch(loadMatched());
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
        <PriorityForm />
      </div>
      <PriorityFooter onClick={handleMatch} />
    </div>
  );
};

export default Priority;
