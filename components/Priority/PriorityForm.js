import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Button, Typography } from "@material-ui/core";

import useStyles from "../../common/PriorityButton/PriorityButtonStyle";
import styles from "./PriorityForm.module.css";

import { loadPriorities, checkPriorityMustHave, checkPriorityNiceToHave } from "./PriorityService";

const PriorityForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const priorities = useSelector(state => state.modules.filter.priorities);

  useEffect(() => {
    dispatch(loadPriorities());
  }, []);

  const checkedValues = useSelector(state => state.modules.filter.checkedValues);

  const handleMustHaveClick = option => {
    //e.preventDefault;
    dispatch(checkPriorityMustHave(option));
  };

  const handleNiceToHaveClick = option => {
    //e.preventDefault;
    dispatch(checkPriorityNiceToHave(option));
  };

  return (
    <div className={styles.container}>
      {priorities.map((option, i) => (
        <Grid
          key={`${i}`}
          container
          justify="space-between"
          direction="row"
          alignItems="center"
          style={{ marginBottom: "1em" }}
          // spacing={2}
        >
          <Grid item container justify="flex-start" xs>
            <Typography>{option.name}</Typography>
          </Grid>
          <Grid item container justify="flex-end" spacing={1} xs>
            <Grid item>
              <Button
                // onClick={e => option && onClick(e, option.name)}
                //option={option}
                onClick={() => {
                  handleMustHaveClick(option.name);
                }}
                className={
                  option.priority.mustHave ? classes.activePriorityButton : classes.priorityButton
                }
              >
                Must Have
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  handleNiceToHaveClick(option.name);
                }}
                className={
                  option.priority.niceToHave ? classes.activePriorityButton : classes.priorityButton
                }
              >
                Nice to Have
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default PriorityForm;
