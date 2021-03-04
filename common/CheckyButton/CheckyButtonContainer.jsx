import React from "react";
import _ from "lodash";
import useStyles from "./CheckyButtonStyle";

import { Grid, Container, Typography } from "@material-ui/core";

import CheckyButton from "./CheckyButton";

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
