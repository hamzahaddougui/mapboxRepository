// Third Party
import React from 'react';
import { makeStyles, Grid, Typography } from "@material-ui/core";

// Assets
import muiStyles from './MultiChoiceFormStyles';

const useStyles = makeStyles(muiStyles);

const MultiChoiceForm = ({icon, alt, title, selectedProperty, setSelectedProperty, propertyTypes}) => {
    const classes = useStyles();

    const selectProperty = (e, option) => {
        e.preventDefault();
        option === selectedProperty ? setSelectedProperty(null) : setSelectedProperty(option);
    }

    return (
        <Grid item container direction="column" justify="center" alignItems="center" className={classes.multiChoiceFormContainer}>
            <img src={icon} alt={alt} className={classes.multiChoiceFormIcon}/>
            <Typography className={classes.multiChoiceFormTitle}>{title}</Typography>
            <Grid item container direction="row" alignItems="center" justify="center" className={classes.multiChoiceFormElementContainer}>
                {propertyTypes.map((propertyType, i) => (
                    <Grid item onClick={(e)=>{selectProperty(e, propertyType.key)}} className={classes.multiChoiceFormElement} key={i}>
                        <img 
                            src={propertyType.icon} 
                            alt={`${propertyType.name} icon`} 
                            className={classes.multiChoiceFormElementIcon}
                        />
                        <Typography 
                            className={ propertyType.key === selectedProperty 
                                ? classes.multiChoiceFormElementTxtActive 
                                : classes.multiChoiceFormElementTxt
                            }
                        >
                            {propertyType.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

        </Grid>
    )
}

export default MultiChoiceForm
