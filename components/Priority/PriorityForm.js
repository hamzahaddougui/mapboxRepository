// Third party
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Typography } from "@material-ui/core";

// Actions
import {
  loadPriorities,
  checkPriority,
  checkPriorityNiceToHave,
} from "../../services/actions/filter.actions";

// Assets
import useStyles from "./PriorityFormStyles";

const PriorityForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const priorities = useSelector(state => state.modules.filter.priorities);

  useEffect(() => {
    dispatch(loadPriorities());
  }, []);

  const handlePriorityClick = (e, option) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const optionObject = {
      id: e.currentTarget.name,
      value: option,
    };
    dispatch(checkPriority(optionObject));
  };

  // const handleNiceToHaveClick = (e, option) => {
  //   e.preventDefault();
  //   console.log(e.target.id);
  //   dispatch(checkPriorityNiceToHave(option));
  // };

  return (
    <div className={classes.root}>
      {priorities.map((option, i) => (
        <Grid
          key={`${i}`}
          container
          justify="space-between"
          direction="row"
          alignItems="center"
          className={classes.itemContainer}
        >
          <Grid item container justify="flex-start" xs>
            <Typography className={classes.priorityTxt}>{option.name}</Typography>
          </Grid>
          <Grid item container justify="flex-end" spacing={1} xs>
            <Grid item>
              <Button
                // name="mustHave"
                // onClick={(e) => {
                //   handlePriorityClick(e, option.name);
                // }}
                name="mustHave" 
                onClick={(e) => {handlePriorityClick(e, option.name);}}
                className={
                  option.priority.mustHave ? classes.activePriorityButton : classes.priorityButton
                }
              >
                Must Have
              </Button>
            </Grid>
            <Grid item>
              <Button
                name="niceToHave"
                onClick={(e) => {
                  handlePriorityClick(e, option.name);
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
