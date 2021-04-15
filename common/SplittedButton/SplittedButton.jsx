import React from "react";

// Styles
import { makeStyles, Typography } from '@material-ui/core';
import muiStyles from './SplittedButtonStyles';

const useStyles = makeStyles(muiStyles);


const SplittedButton = ({ active1, active2, label1, label2, iconEnabled1, iconDisabled1, iconEnabled2, iconDisabled2, onClick1, onClick2 }) => {
  const classes = useStyles();

  return (
    <div className={classes.splittedButtonView}>
      <div
        className={active1 ? classes.splittedButtonItemActive : classes.splittedButtonItem}
        onClick={onClick1}
      >
        {iconEnabled1 && <img className={classes.icon} src={active1 ? iconEnabled1 : iconDisabled1} alt="First Icon" />}
        <Typography className={classes.contentTxt}>{label1}</Typography>
      </div>
      <div
        className={active2 ? classes.splittedButtonItemActive : classes.splittedButtonItem}
        onClick={onClick2}
      >
        {iconEnabled2 && <img className={classes.icon} src={active2 ? iconEnabled2 : iconDisabled2} alt="Second Icon" />}
        <Typography className={classes.contentTxt}>{label2}</Typography>
      </div>
    </div>
  );
};

export default SplittedButton;
