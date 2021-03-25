// Third party
import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";

// components
import SplittedButton from "../../common/SplittedButton/SplittedButton";
import DropDownButton from "../../common/DropDownButton/DropDownButton";
import DropDownMenu from "../../common/DropDownMenu/DropDownMenu";

// Assets
import muiStyles from "./MapHeaderStyles";

const useStyles = makeStyles(muiStyles);

const MapHeader = () => {
  const classes = useStyles();
  const [twoD, setTwoD] = useState(true);
  const [threeD, setThreeD] = useState(false);
  const [matcher, setMatcher] = useState(true);
  const [search, setSearch] = useState(false);
  const [percentMatch, setPercentMatch] = useState(false);

  const handleClick2D = () => {
    console.log("2D Clicked!");
    setTwoD(!twoD);
    setThreeD(!threeD);
  };

  const handleClick3D = () => {
    console.log("3D Clicked!");
    setThreeD(!threeD);
    setTwoD(!twoD);
  };

  const handleClickMatcher = () => {
    console.log("Matcher Clicked!");
    setSearch(!search);
    setMatcher(!matcher);
  };
  const handleClickSearch = () => {
    console.log("Search Clicked!");
    setSearch(!search);
    setMatcher(!matcher);
  };

  const handleClickPercentMatch = () => {
    setPercentMatch(!percentMatch);
    console.log("Menu Clicked!!");
  };

  return (
    <Grid container justify="space-between" className={classes.headerContainer}>
      <SplittedButton
        active1={twoD}
        active2={threeD}
        label1="2D"
        label2="3D"
        onClick1={handleClick2D}
        onClick2={handleClick3D}
      />
      <SplittedButton
        active1={matcher}
        active2={search}
        label1="Matcher"
        label2="Search"
        onClick1={handleClickMatcher}
        onClick2={handleClickSearch}
      />
      <DropDownButton onClick={handleClickPercentMatch} />
      <DropDownMenu open={percentMatch} />
    </Grid>
  );
};

export default MapHeader;
