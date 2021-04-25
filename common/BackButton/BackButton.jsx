import React from "react";
import { makeStyles } from '@material-ui/core';

import styles from "./BackButton.module.css";
import muiStyles from './BackButtonStyles';

const useStyles = makeStyles(muiStyles);

const BackButton = ({ onClick }) => {

  const classes = useStyles();

  return (
    <div className={classes.backContainer} onClick={onClick}>
      <img className={classes.backIcon} src="/back.svg" alt="backButton"></img>
      <div className={classes.backText}>Back</div>
    </div>
  );
};

export default BackButton;
