import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import styles from "./DropDownButton.module.css";
import muiStyles from './DropDownButtonStyles';

const useStyles = makeStyles(muiStyles);

const DropDownButton = ({ onClick }) => {

  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.dropDown} onClick={onClick}>
    {/* <div className={styles.dropDown} onClick={onClick}> */}
    <Grid item>
      <Typography className={classes.percentMatchTxt}>Percent match</Typography>
    </Grid>
    <Grid item>
      <img 
              className={classes.arrowIcon}
              src="/downArrow.svg"
              alt= "Down Arrow"
              // onClick={handleAddToFavorites}
      />
      {/* <ExpandMoreIcon style={{color: "#FFF"}} /> */}
    </Grid>
      {/* <p className={styles.contentButton}>Percent match</p> */}
    {/* </div> */}
    </Grid>
  );
};

export default DropDownButton;
