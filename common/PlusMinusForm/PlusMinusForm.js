// Third Party
import React, { useState } from 'react';
import { makeStyles, Grid, Typography, IconButton } from "@material-ui/core";
import { Add, Remove } from '@material-ui/icons';

// Assets
import muiStyles from "./PlusMinusFormStyles";

const useStyles = makeStyles(muiStyles);

const PlusMinusForm = ({icon, alt, title, number, setNumber }) => {
    const classes = useStyles();

    const handleMinus = () => {
        number > 0 && setNumber(number - 1);
    };

    const handlePlus = () => {
        setNumber(number + 1);
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.numericElementContainer}>
            <img src={icon} alt={alt} className={classes.numericElementIcon}/>
            <Typography className={classes.numericElementTitle}>{title}</Typography>
            <Grid item container direction="row" justify="center" alignItems="center" className={classes.numericElementManage}>
                        <IconButton onClick={handleMinus} className={classes.numericElementPlus}>
                            <Remove />
                        </IconButton>
                        <div className={classes.numericElementNumberWrapper}>
                        <Typography className={classes.numericElementNumber}>{number}</Typography>
                        </div>
                        <IconButton onClick={handlePlus} className={classes.numericElementPlus}>
                            <Add />
                        </IconButton>
            </Grid>
        </Grid>
    )
}

export default PlusMinusForm
