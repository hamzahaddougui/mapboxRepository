import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Button, Typography } from '@material-ui/core';

import useStyles from "../../../common/CheckyButton/CheckyButtonStyle";

import { loadPriorities, checkPriorityAction } from "./FilterService";

const PriorityForm = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPriorities());
    }, [])

    const checkedValues = useSelector(state => state.modules.filter.checkedValues);

    const handleClick = (e, option) => {
        e.preventDefault;
        // console.log("OPTION IS +++ "+ e.target.option)
        // dispatch(checkPriorityAction(option));
        console.log("target is : " + option)
    };

    return (
        <div>
            {checkedValues.map((option, i) => (
                <Grid
                key={`${i}`}
                container
                direction="row"
                alignItems="center"
                style={{ marginBottom: "1em" }}
                spacing={2}
              >
                  <Grid item xs>
                  <Typography>{option}</Typography>
                  </Grid>
                  {/* <Grid item container xs> */}
                  {console.log("----"+ option)}
                    <Grid item xs>
                        <Button
                            // onClick={e => option && onClick(e, option.name)}
                            onClick={handleClick}
                            className={classes.checkyButton}
                        >
                            Must Have
                        </Button>
                        </Grid>
                        <Grid item xs>
                        <Button
                            onClick={e => option && onClick(e, option.name)}
                            className={classes.checkyButton}
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
                {console.log(" option is " + option)}
              </Grid>
            ))}
        </div>
    )
}

export default PriorityForm
