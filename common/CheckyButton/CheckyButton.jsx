import React from "react";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import muiStyles from "./CheckyButtonStyle";

const useStyles = makeStyles(muiStyles);

// Description:
// Params
// option = {active: true/false, label: "string"}
const CheckyButton = ({ active, option, onClick }) => {
  const classes = useStyles();
  option && (option.name === "" && console.log("Empty Field detected !!"));

  return (
    <React.Fragment>
      { option && (option.name !== "" && (
        <Button
          fullWidth
          onClick={e => option && onClick(e, option.name)}
          className={active ? classes.activeCheckyButton : classes.checkyButton}
        >
          {option.name}
        </Button>
      ))}
    </React.Fragment>
  );
};

export default CheckyButton;
