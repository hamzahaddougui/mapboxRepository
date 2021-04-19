import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from "./DropDownButton.module.css";

const DropDownButton = ({ onClick }) => {
  return (
    <Grid container justify="space-between" className={styles.dropDown} onClick={onClick}>
    {/* <div className={styles.dropDown} onClick={onClick}> */}
    <Grid item>
      <Typography style={{color: "#FFF", fontSize : 14.2, marginRight: "32px"}}>Percent match</Typography>
    </Grid>
    <Grid item>
      <img 
              className={styles.arrowIcon}
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
