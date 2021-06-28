// Third Party
import React from 'react';
import { makeStyles, Popper, Fade, Paper, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';

// Assets
import muiStyles from './UserDropMenuStyles';

const useStyles = makeStyles(muiStyles);

const UserDropMenu = ({open, anchorEl}) => {
    const classes = useStyles();

    return (
        <Popper className={classes.popper} open={open} anchorEl={anchorEl} placement='bottom-end' transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={200}>
            <Paper className={classes.root}>
              <List aria-label="UserArea Drop Down Menu" >

                <ListItem className={classes.UserAreaListItem} button>
                    <ListItemText className={classes.ListTxt} primary="User Name" secondary="useremail@mail.com" />
                </ListItem>

                <Divider className={classes.userDropDownDivider} />

                <ListItem className={classes.UserAreaListItem} button>
                    <ListItemText className={classes.ListTxt}  primary="Account settings" />
                </ListItem>

                <Divider className={classes.userDropDownDivider} />

                <ListItem className={classes.UserAreaListItem} button>
                    <ListItemText className={classes.ListTxt}  primary="Better Matcher" />
                </ListItem>

                <Divider className={classes.userDropDownDivider} />

                <ListItem className={classes.UserAreaListItem} button>
                    <ListItemText className={classes.ListTxt}  primary="Manage Collabs" />
                </ListItem>

                <Divider className={classes.userDropDownDivider} />

                <ListItem className={classes.UserAreaListItem} button>
                    <ListItemText className={classes.ListTxt}  primary="Calculators" />
                </ListItem>

                <Divider className={classes.userDropDownDivider} />

                <ListItem className={classes.UserAreaListItem} button>
                    <ListItemText className={classes.ListTxt}  primary="Sign out" />
                </ListItem>

              </List>
            </Paper>
          </Fade>
        )}
    </Popper>
    )
}

export default UserDropMenu
