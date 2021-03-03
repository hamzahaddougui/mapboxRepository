import React from "react";

import useStyles from "./CheckyButtonStyle";
import { Button } from "@material-ui/core";

// Description:
// Params
// option = {active: true/false, label: "string"}
const CheckyButton = ({ active, option, onClick }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        onClick={e => option && onClick(e, option.value)}
        className={active ? classes.activeCheckyButton : classes.checkyButton}
      >
        {option && option.label}
      </Button>
    </React.Fragment>
  );
};

export default CheckyButton;