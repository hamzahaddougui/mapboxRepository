// Third Party
import React from 'react'
import { makeStyles, withStyles, Grid, Slider, Typography } from "@material-ui/core";

// Assets
import muiStyles from './SliderFormStyles';

const useStyles = makeStyles(muiStyles);

const AirbnbSlider = withStyles({
    root: {
      color: '#323643',
      height: 3,
      padding: '13px 0',
    },
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid rgba(50, 54, 67, 0.5)',
      marginTop: -12,
      marginLeft: -13,
      boxShadow: 'rgba(0,0,0,0.12) 0 2px 2px',
      '&:focus, &:hover, &$active': {
        boxShadow: 'rgba(0,0,0,0.12) 0 2px 2px',
      },
      '& .bar': {
        // display: inline-block !important;
        height: 6,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 5,
    },
    rail: {
      color: '#d8d8d8',
      opacity: 1,
      height: 3,
    },
  })(Slider);
  
  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }

const SliderForm = ({icon, alt, title, value, setValue, max}) => {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid item container direction="column" justify="center" alignItems="center" className={classes.sliderFormContainer}>

            <img src={icon} alt={alt} className={classes.sliderFormIcon}/>

            <Typography className={classes.sliderFormTitle}>{title}</Typography>

            <Typography className={classes.sliderFormRange}><span>$</span>
                <span className={classes.sliderFormRangeValue}>{value[0]*10000}&nbsp;</span>
                     - $
                <span className={classes.sliderFormRangeValue}>{value[1]*10000}</span>
                {value[1] === max && <span className={classes.sliderFormRangeValue}>+</span>}
            </Typography>

            <AirbnbSlider
                max={max}
                step={0.5}
                value={value}
                onChange={handleChange}
                ThumbComponent={AirbnbThumbComponent}
                // getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                // defaultValue={[20, 40]} 
            />
        </Grid>
    )
}

export default SliderForm
