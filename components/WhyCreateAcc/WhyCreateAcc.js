// Third Party
import React from 'react';
import { makeStyles, Dialog, Slide, Typography, Grid, Button } from '@material-ui/core';

// Assets
import muiStyles from './WhyCreateAccStyles';

const useStyles = makeStyles(muiStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const WhyCreateAcc = ({ openWhyCreateAcc, handleWhyCreateAcc }) => {
    const classes = useStyles();

    return (
        <Dialog fullScreen open={openWhyCreateAcc} onClose={handleWhyCreateAcc} TransitionComponent={Transition} >
            <Grid container direction="column" alignItems="center" className={classes.WhyCreateAccRoot}>
                <Grid item className={classes.closeIconWrapper}>
                    <img src="/cancel.svg" alt="Close icon" className={classes.closeIcon} onClick={handleWhyCreateAcc} />
                </Grid>
                <Grid item>
                    <Typography className={classes.title}>Why create an account ?</Typography>
                </Grid>
                <Grid item container direction="column" justify="center" alignItems="center">
                    <Grid item container direction="column" justify="center" alignItems="flex-start" className={classes.contentWrapper}>
                        <Typography className={classes.txt}>
                        These are the benefits of creating an account :<br/><br/>
                        <span>1.</span> Save your responses so you don’t start all over again!<br/><br/>
                        <span>2.</span> Share your favorite neighborhoods and favorite homes with your household members, and merge your results to find the best match for everyone!<br/><br/>
                        <span>3.</span> Invite family and friends to collaborate with you in finding your dream home.<br/><br/>
                        <span>4.</span> Unlock crucial information such as contingencies and other best practices to stay protected throughout your journey.<br/><br/>
                        <span>5.</span> Use our comparison tool to easily compare the pros and cons of neighborhoods and homes.<br/><br/>
                        <span>6.</span> Unlock more filters to learn more about Florida and your new neighborhood.<br/><br/>
                        <span>7.</span> Get access to trusted and verified local realtors, only at your request, with the option to contact them anonymously!<br/><br/>
                        <span>8.</span> Receive custom reports with information about homes for sale in neighborhoods that you get matched with.<br/><br/>
                        <span>9.</span> Get exclusive low mortgage rates from local lenders.<br/><br/>
                        and much more…<br/><br/>
                        </Typography>
                        <Typography className={classes.txtFooter}>
                        Oh yes! We won't ask for your credit card information. All is Free!
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button className={classes.WhyCreateAccButton} onClick={handleWhyCreateAcc}>Create my account</Button>
                </Grid>
                <Grid item className={classes.brandWrapper}>
                    <Typography className={classes.brand}>Powered by <span>Nomadville</span></Typography>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default WhyCreateAcc
