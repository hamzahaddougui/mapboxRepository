import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Button, Typography } from '@material-ui/core';

import useStyles from "../../../common/PriorityButton/PriorityButtonStyle";

import { loadPriorities, checkPriorityMustHave, checkPriorityNiceToHave } from "./FilterService";

const PriorityForm = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const priorities = useSelector(state => state.modules.filter.priorities);

    useEffect(() => {
        dispatch(loadPriorities());
    }, []);

    const checkedValues = useSelector(state => state.modules.filter.checkedValues);

    const handleMustHaveClick = (option) => {
        //e.preventDefault;
        dispatch(checkPriorityMustHave(option));
    };

    const handleNiceToHaveClick = (option) => {
        //e.preventDefault;
        dispatch(checkPriorityNiceToHave(option));
    };

    return (
        <div>
            {priorities.map((option, i) => (
                <Grid
                key={`${i}`}
                container
                direction="row"
                alignItems="center"
                style={{ marginBottom: "1em" }}
                spacing={2}
              >
                  <Grid item xs style={{ marginRight: "20px" }}>
                  <Typography>{option.name}</Typography>
                  </Grid>
                  {/* <Grid item container xs> */}
                    <Grid item xs>
                        <Button
                            // onClick={e => option && onClick(e, option.name)}
                            //option={option}
                            onClick={()=>{handleMustHaveClick(option.name)}}
                            className={option.priority.mustHave ? classes.activePriorityButton : classes.priorityButton}
                        >
                            Must Have
                        </Button>
                        </Grid>
                        <Grid item xs>
                        <Button
                            onClick={()=>{handleNiceToHaveClick(option.name)}}
                            className={option.priority.niceToHave ? classes.activePriorityButton : classes.priorityButton}
                        >
                            Nice to Have
                        </Button>
                        </Grid>
                    {/* </Grid> */}
              </Grid>
            ))}
        </div>
    )
}

export default PriorityForm
