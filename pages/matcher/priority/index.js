import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";

import { loadMatched, resetErrors } from "services/actions/neighborhood.actions";
import PriorityForm from "components/Priority/PriorityForm";
import PriorityFooter from "components/PriorityFooter/PriorityFooter";
import BackButton from "../../../common/BackButton/BackButton";
import BackdropLoader from "../../../common/BackdropLoader/BackdropLoader";
import Alert from "../../../common/Alert/Alert";
import muiStyles from "styles/priorityStyles";

const useStyles = makeStyles(muiStyles);

const Priority = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const error = useSelector(state => state.modules.neighborhood.error);
  const matcherLoading = useSelector(state => state.modules.neighborhood.loading);

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
          <Typography variant="h2" className={classes.upperTitle}>One last step!</Typography>
          <Typography variant="h3" className={classes.title}>Select your priorities</Typography>
          <Typography variant="h5" className={classes.subtitle}>Make your result more accurate</Typography>
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
