// Third Party
import React, { useState } from 'react';
import { makeStyles, Grid, List, ListItem } from "@material-ui/core";

// Assets
import muiStyles from './SideBarStyles';

const useStyles = makeStyles(muiStyles);

const SideBar = () => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = useState(null)

    return (
        <Grid container direction="column" alignItems="center" className={classes.sideContainer}>
            <Grid item>
                <img src="/logoColored.svg" alt="Nomadville Logo" className={classes.logoIcon}/>
            </Grid>
            <Grid item className={classes.listContainer}>
                <List component="nav">
                    <ListItem
                        button
                        selected={selectedIndex === 0}
                        onClick={()=>{setSelectedIndex(0)}}
                        className={classes.listIconContainer}
                    >
                        <img src="/journey.svg" alt="Nomadville Journey" className={classes.listIcon} />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={()=>{setSelectedIndex(1)}}
                        className={classes.listIconContainer}
                    >
                        <img src="/favorites.svg" alt="Nomadville Favorites" className={classes.listIcon} />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 2}
                        onClick={()=>{setSelectedIndex(3)}}
                        className={classes.listIconContainer}
                    >
                        <img src="/collaps.svg" alt="Nomadville Collaborations" className={classes.listIcon} />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 3}
                        onClick={()=>{setSelectedIndex(3)}}
                        className={classes.listIconContainer}
                    >
                        <img src="/deals.svg" alt="Nomadville Deals" className={classes.listIcon} />
                    </ListItem>
                
                </List>

            </Grid>
            
        </Grid>
    )
}

export default SideBar
