import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";

// Assets
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles, Typography } from '@material-ui/core';
import muiStyles from './AccordionStyles';

const Accordion = withStyles({
  root: {
    // border: '1px solid #979797',
    border: 'none',
    // borderRadius: "28px",
    marginBottom: "8px",
    boxShadow: 'none',
    '&:not(:last-child)': {
      // border: '1px solid #979797',
      border: 'none',
      marginBottom: "8px",
      borderRadius: "28px",
    },
    '&:last-child': {
        // border: '1px solid #979797',
        border: 'none',
        marginBottom: "8px",
        borderRadius: "28px",
      },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
      border: 'none'
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'transparent',
    borderRadius: "28px",
    border: "1px solid #979797",
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    // marginBottom: -1,
    minHeight: 42,
    padding: "0px 34px",
    '&$expanded': {
      minHeight: 42,
      border: "1px solid #979797",
      borderRadius: "28px",
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: "16px 0",
    display: "grid",
    alignItems: "center",
    marginLeft: "34px",
  },
}))(MuiAccordionDetails);

// Styles
const useStyles = makeStyles(muiStyles);

// Actions
import { selectFilter } from "../../services/actions/filter.actions"; 

const CustomizedAccordions = () => {
    
  const classes = useStyles();

  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState('panel1');
  const [chosen, setChosen] = useState(null);
  const [filter, setFilter] = useState(null);

  const checkedValues = useSelector(state => state.modules.filter.checkedValues);
  const filters = useSelector(state => state.modules.filter.filters);

  var groupedFilters = _.groupBy(filters, function(filter) {
    return filter.category;
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleCheckedValue = (e, value) => {
    console.log(value);
    setChosen(value);
    dispatch(selectFilter(value));
  };

  const handleFilter = (e, value) => {
    console.log(value);
    setFilter(value);
    dispatch(selectFilter(value));
  };

  return (
    <div style={{padding: "8px"}}>
        <Typography className={classes.percentMatch}>Percent Match</Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#979797"}} />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={classes.accordionTitle}>My filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {
                checkedValues.length > 0 
                        ? 
                    (<div>{checkedValues?.map((value, i) => (
                    <Typography 
                        className={ value===chosen ? classes.CheckedValueActive : classes.CheckedValue} 
                        variant="h6" 
                        key={i}
                        // onClick={()=>{console.log(value), setChosen(value)}}
                        onClick={(e)=>{handleCheckedValue(e, value)}}
                    >
                      {value}
                    </Typography>
                    ))}</div>) 
                        : 
                    (<Typography 
                        className={classes.CheckedValue} 
                        variant="h6" 
                        style={{paddingRight: "34px"}}
                        >
                        No Filters Selected Yet!
                    </Typography>)
            }
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#979797"}} />} aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={classes.accordionTitle}>More</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {Object.keys(groupedFilters)?.map((filterGroup, i) => (
                    <>
                        <Typography className={classes.filterGroupTitle} key={i}>{filterGroup}</Typography>
                        <div className={classes.filterGroupArray} key={filterGroup}>
                        {groupedFilters[filterGroup]?.map((filtersArray, i) => (
                            <Typography 
                            className={ filtersArray.name===filter ? classes.CheckedValueActive : classes.CheckedValue} 
                            variant="h6" 
                            key={i}
                            // onClick={()=>{console.log(filtersArray.name), setFilter(filtersArray.name)}}
                            onClick={(e)=>{handleFilter(e, filtersArray.name)}}
                            >
                            {filtersArray.name}
                            </Typography>
                        ))}
                        </div>
                    </>
            ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomizedAccordions;
