import React from "react";
import _ from "lodash";
// import useStyles from "./CheckyButtonStyle";

import { Grid, Container, Typography } from "@material-ui/core";

import CheckyButton from "./CheckyButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Poppins",
    fontSize: 14.24,
    fontWeight: "Light",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  checkyButton: {
    borderRadius: "32px",
    width: "216px",
    fontSize: 16.02,
    fontFamily: "Poppins",
    fontWeight: "lighter",
    textTransform: "none",
    border: "1.2px solid #B2B3B4",
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
      minWidth: "5em",
    },
  },
  activeCheckyButton: {
    border: "1.2px solid transparent",
    borderRadius: "32px",
    width: "216px",
    fontSize: 16.02,
    textTransform: "none",
    fontFamily: "Poppins",
    backgroundColor: "#323643",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#323643",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      minWidth: "3em",
    },
  },
}));

const CheckyButtonContainer = ({ title, options, checkedValues, onClick, maxWidth }) => {
  const classes = useStyles();
  return (
    <Container style={{ maxWidth: maxWidth || "60em" }}>
      <Grid
        container
        justify="center"
        style={{
          display: "flex",
          justifyItems: "center",
        }}
      >
        <Grid item container justify="center">
          <Typography className={classes.title}>{title}</Typography>
        </Grid>
        {!_.isEmpty(options) &&
          options.map((option, i) => (
            <Grid key={`${option.title}${i}`} item style={{ margin: "1em" }}>
              <CheckyButton
                active={checkedValues && checkedValues.includes(option.name)}
                option={option}
                onClick={onClick}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CheckyButtonContainer;
