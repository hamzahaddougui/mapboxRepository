// Third Party
import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Tabs, Tab, Paper, Box } from '@material-ui/core';

// Assets
import muiStyles from './NeighborhoodsStyles';

// Components
import NbFavorites from './NbFavorites/NbFavorites';

const useStyles = makeStyles(muiStyles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
        //   <Box p={3}>
        <Grid style={{padding: "16px 10px"}}>
            <Typography>{children}</Typography>
        </Grid>
        //   </Box>
        )}
      </div>
    );
}

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Neighborhoods = () => {
    const classes = useStyles();

    const [chosenTab, setChosenTab] = useState(0);

    const handleChange = (event, newValue) => {
        setChosenTab(newValue);
      };
    
      const handleChangeIndex = (index) => {
        setChosenTab(index);
      };

    return (
        <Grid container direction="column">
            <Paper elevation={0} style={{borderBottom: "1px solid #979797", borderRadius: 0}}>
                <Tabs
                    value={chosenTab}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    centered
                    TabIndicatorProps={{ children: <span /> }}
                    classes={{ indicator: classes.nbTabsIndicator, flexContainer: classes.flexContainer }}
                    className={classes.NbTabs}
                >
                    <Tab className={classes.NbTab} label={`Favorites (${chosenTab})`} icon={<img src="/favorites.svg" className={classes.NbTabIcon} />} {...a11yProps(0)} />
                    <Tab className={classes.NbTab} label="Comparison tool" icon={<img src="/comparison.svg" className={classes.NbTabIcon} />} {...a11yProps(1)} />
                    <Tab className={classes.NbTab} label="Merger" icon={<img src="/merger.svg" className={classes.NbTabIcon} />} {...a11yProps(2)} />
                </Tabs>
            </Paper>
            <TabPanel value={chosenTab} index={0} style={{maxWidth: "100%"}} >
                <NbFavorites />
            </TabPanel>
            <TabPanel value={chosenTab} index={1} style={{maxWidth: "100%"}} >
                Item Two
            </TabPanel>
            <TabPanel value={chosenTab} index={2} style={{maxWidth: "100%"}} >
                Item Three
            </TabPanel>


        </Grid>
    )
}

export default Neighborhoods
