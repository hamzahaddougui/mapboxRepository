// Third party
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Typography, Slide } from "@material-ui/core";

// Assets
import muiStyles from "./FilterFooterStyles";

const useStyles = makeStyles(muiStyles);

const FilterFooter = ({ onClick }) => {
  const classes = useStyles();
  const checked = useSelector(state => state.modules.filter.checkedValues);

  return checked.length > 0 ? (
    <Slide direction="up" in={checked.length > 0 ? true : false} mountOnEnter unmountOnExit>
    <div className={classes.bottomBox}>
      <div className={classes.navigation} onClick={onClick}>
        Next
      </div>

      <div style={{ position: "absolute", right: "21px", display: "flex", alignItems: "center" }}>
        <Typography className={classes.poweredBy}>
          Powered by
        </Typography>
        <Typography className={classes.brandName}>
          Nomadville
        </Typography>
        {/* <img className={classes.logo} src="/logo.svg" alt="logo" /> */}
      </div>
    </div>
    </Slide>
  ) : (
    <div className={classes.invisibleBottomBox}></div>
  );
};

export default FilterFooter;
