import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = ({ open, onClose, message, type = "error", duration = 6000 }) => {
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
      <MuiAlert severity={type} onClose={onClose}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
