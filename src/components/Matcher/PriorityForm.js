import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Button, Typography } from '@material-ui/core';

import useStyles from "../../../common/CheckyButton/CheckyButtonStyle";

import { loadPriorities, checkPriorityMustHave, checkPriorityNiceToHave } from "./FilterService";

const PriorityForm = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPriorities());
    }, [])

    const checkedValues = useSelector(state => state.modules.filter.checkedValues);

    const priorities = useSelector(state => state.modules.filter.priorities);
    console.log(priorities);

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
                  <Grid item xs>
                  <Typography>{option.name}</Typography>
                  </Grid>
                  {/* <Grid item container xs> */}
                  {console.log("----"+ option.name)}
                    <Grid item xs>
                        <Button
                            // onClick={e => option && onClick(e, option.name)}
                            //option={option}
                            onClick={()=>{handleMustHaveClick(option.name)}}
                            className={option.priority.mustHave ? classes.activeCheckyButton : classes.checkyButton}
                        >
                            Must Have
                        </Button>
                        </Grid>
                        <Grid item xs>
                        <Button
                            onClick={()=>{handleNiceToHaveClick(option.name)}}
                            className={option.priority.niceToHave ? classes.activeCheckyButton : classes.checkyButton}
                        >
                            Nice to Have
                        </Button>
                        </Grid>
                    {/* </Grid> */}
                {/* <CheckyButtonContainer
                  title={option[0][1]}
                  options={option[1][1]}
                  checkedValues={checkedValues}
                  onClick={handleClick}
                /> */}
                {console.log(" option is " + option.name)}
              </Grid>
            ))}
        </div>
    )
}

export default PriorityForm
