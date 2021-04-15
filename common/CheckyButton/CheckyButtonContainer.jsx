import React from "react";
import _ from "lodash";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CheckyButton from "./CheckyButton";
import muiStyles from "./CheckyButtonStyle";

const useStyles = makeStyles(muiStyles);

const CheckyButtonContainer = ({ title, options, checkedValues, onClick, maxWidth }) => {
  const classes = useStyles();
  var formattedOptions = _.reject(options, ['name', ""]);

  return (
    <Container style={{ maxWidth: maxWidth || "60em" }}>
      {!_.isEmpty(formattedOptions) && (
      <Grid
        container
        justify="center"
        style={{
          display: "flex",
          justifyItems: "center",
          marginBottom: "1em",
        }}
      >
        <Grid item container justify="center">
          <Typography className={classes.title}>{title}</Typography>
        </Grid>
        {!_.isEmpty(formattedOptions) &&
          formattedOptions.map((option, i) => (
            <Grid key={`${option.title}${i}`} item style={{ margin: "0.6em 4px 0em 4px" }}>
              <CheckyButton
                active={checkedValues && checkedValues.includes(option.name)}
                option={option}
                onClick={onClick}
              />
            </Grid>
          ))}
      </Grid>
      )}
    </Container>
  );
};

export default CheckyButtonContainer;
