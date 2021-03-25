import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";

import { loadMatched, resetErrors } from "components/Matcher/MatcherService";
import PriorityForm from "components/Priority/PriorityForm";
import PriorityFooter from "components/PriorityFooter";
import BackButton from "../../../common/BackButton/BackButton";
import BackdropLoader from "../../../common/BackdropLoader/BackdropLoader";
import Alert from "../../../common/Alert/Alert";
import muiStyles from "styles/priorityStyles";

const useStyles = makeStyles(muiStyles);

const Priority = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const error = useSelector(state => state.modules.matcher.error);
  const matcherLoading = useSelector(state => state.modules.matcher.loading);

  const handleBack = () => {
    router.push("/matcher/start");
  };
  const handleMatch = () => {
    console.log("match");
    dispatch(loadMatched());
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(resetErrors());
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
        <BackdropLoader open={matcherLoading} />
      </div>
      <PriorityFooter onClick={handleMatch} />
      {error && (
        <Alert open={Boolean(error)} onClose={handleAlertClose} message={error.message || error} />
      )}
    </div>
  );
};

export default Priority;
