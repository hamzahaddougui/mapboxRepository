// Third Party
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router'
import { makeStyles, Grid, List, ListItem, ListItemIcon, ListItemText, Drawer } from "@material-ui/core";

// Assets
import muiStyles from './SideBarStyles';

// Actions
import {setSelectedCategory} from '../../../services/actions/home.actions';

const useStyles = makeStyles(muiStyles);

const categories = [
    {
        key: 1,
        name: "journey"
    },
    {
        key: 2,
        name: "favorites"
    },
    {
        key: 3,
        name: "collabs"
    },
    {
        key: 4,
        name: "deals"
    },
]

const SideBar = ({openSideBar, setOpenSideBar}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // const router = useRouter();

    const [selectedIndex, setSelectedIndex] = useState(null);

    const selectedCatgory = useSelector(state => state.modules.home.selectedCategory);

    console.log(selectedCatgory);

    const handleSelectedIndex = (e, option) => {
        e.preventDefault();
        dispatch(setSelectedCategory(option));
        Router.push(`/matcher/home/${option}`);
    }

    return (
        // <Grid container direction="column" alignItems="center" className={classes.sideContainer}>
        //     <Grid item>
        //         <img src="/logoColored.svg" alt="Nomadville Logo" className={classes.logoIcon}/>
        //     </Grid>
        //     <Grid item className={classes.listContainer}>
        //         <List component="nav">
        //             <ListItem
        //                 button
        //                 selected={selectedIndex === 0}
        //                 onClick={()=>{setSelectedIndex(0)}}
        //                 className={classes.listIconContainer}
        //             >
        //                 <img src="/journey.svg" alt="Nomadville Journey" className={classes.listIcon} />
        //             </ListItem>
        //             <ListItem
        //                 button
        //                 selected={selectedIndex === 1}
        //                 onClick={()=>{setSelectedIndex(1)}}
        //                 className={classes.listIconContainer}
        //             >
        //                 <img src="/favorites.svg" alt="Nomadville Favorites" className={classes.listIcon} />
        //             </ListItem>
        //             <ListItem
        //                 button
        //                 selected={selectedIndex === 2}
        //                 onClick={()=>{setSelectedIndex(3)}}
        //                 className={classes.listIconContainer}
        //             >
        //                 <img src="/collaps.svg" alt="Nomadville Collaborations" className={classes.listIcon} />
        //             </ListItem>
        //             <ListItem
        //                 button
        //                 selected={selectedIndex === 3}
        //                 onClick={()=>{setSelectedIndex(3)}}
        //                 className={classes.listIconContainer}
        //             >
        //                 <img src="/deals.svg" alt="Nomadville Deals" className={classes.listIcon} />
        //             </ListItem>
                
        //         </List>

        //     </Grid>
            
        // </Grid>
        <Drawer
            variant="permanent"
            className={ openSideBar ? classes.sideContainerOpen : classes.sideContainerClosed }
            classes={{
                paper: openSideBar ? classes.sideContainerOpen : classes.sideContainerClosed,
            }}
            component="Grid"
            direction="column" 
            // alignItems="center"
        >
            <Grid item className={classes.logoContainer}>
                {
                    openSideBar 
                        ?
                    (<img src="/logoOpen.svg" alt="Nomadville Logo" className={classes.logoOpenIcon} onClick={setOpenSideBar}/>)
                        :
                    (<img src="/logoColored.svg" alt="Nomadville Logo" className={classes.logoIcon} onClick={setOpenSideBar}/>)
                }
                {/* <img src="/logoColored.svg" alt="Nomadville Logo" className={classes.logoIcon} onClick={setOpenSideBar}/> */}
            </Grid>
            {/* <Grid item className={classes.listContainer}> */}
                <List className={classes.listWrapper}>
                    {
                        categories.map((category, i) =>(
                            <ListItem
                                key={i}
                                button
                                selected={selectedCatgory === category.name}
                                onClick={(e)=>{handleSelectedIndex(e, category.name)}}
                                className={classes.listIconContainer}
                            >
                                <ListItemIcon className={classes.listIconWrapper}><img src={ selectedCatgory === category.name  ? `/${category.name}Selected.svg` : `/${category.name}.svg` } alt={`Nomadville ${category.name}`} className={classes.listIcon} /></ListItemIcon>
                                {openSideBar && <ListItemText className={classes.listTxt} primary={category.name} />}
                            </ListItem>
                        ))
                    }
                    {/* <ListItem
                        button
                        selected={selectedIndex === 0}
                        onClick={()=>{setSelectedIndex(0)}}
                        className={classes.listIconContainer}
                    >
                        <ListItemIcon><img src="/journey.svg" alt="Nomadville Journey" className={classes.listIcon} /></ListItemIcon>
                        <ListItemText primary="journey" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={()=>{setSelectedIndex(1)}}
                        className={classes.listIconContainer}
                    >
                       <ListItemIcon><img src={selectedIndex === 1 ? "/favoritesSelected.svg" : "/favorites.svg"} alt="Nomadville Favorites" className={classes.listIcon} /></ListItemIcon>
                       <ListItemText primary="favorites" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 2}
                        onClick={()=>{setSelectedIndex(2)}}
                        className={classes.listIconContainer}
                    >
                        <ListItemIcon><img src="/collabs.svg" alt="Nomadville Collaborations" className={classes.listIcon} /></ListItemIcon>
                        <ListItemText primary="collabs" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 3}
                        onClick={()=>{setSelectedIndex(3)}}
                        className={classes.listIconContainer}
                    >
                        <ListItemIcon><img src="/deals.svg" alt="Nomadville Deals" className={classes.listIcon} /></ListItemIcon>
                        <ListItemText primary="deals" />
                    </ListItem> */}
                
                </List>
            {/* </Grid> */}
      </Drawer>
    )
}

export default SideBar
