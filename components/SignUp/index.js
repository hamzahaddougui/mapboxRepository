import Router from "next/router";

import { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { SignUpAction } from "./SignUpService";

import FavoriteListBar from "./FavoriteListBar";
import AddNeighborhood from "./AddNeighorhood";
import SignUpForm from "./SignUpForm";

import muiStyles from './SignUpStyles';

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, GridList } from "@material-ui/core";

const useStyles = makeStyles(muiStyles);

const SignUp = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleClick = async () => {
    if (data.email && data.firstName && data.lastName) {
      try {
        console.log(data);
        // const response = await instance.post("http://localhost:3001/api/users/signup", data);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Grid container className={classes.root}>
      {/* <div className={classes.jumboBackground} /> */}
      <Grid item container justify="center" alignItems="center">
        <GridList className={classes.wrapper}>
          <SignUpForm data={data} handleChange={handleChange} />
        </GridList>
      </Grid>
      <Grid id="jumboTag" container className={classes.jumbo}>
        <div className={classes.jumboBackground} />
        <Grid
          item
          className={classes.backContainer}
          onClick={() => {
            Router.push("/neighborhood");
          }}
        >
          <img className={classes.backIcon} src="/back.svg" alt="backButton"></img>
          <div className={classes.backText}>Back</div>
        </Grid>

        <Grid item className={classes.header}>
          <Typography variant="h2" className={classes.headerTitle}>
            Proceed to Home Matcher
          </Typography>
          <Typography variant="body1" className={classes.headerDesc}>
            The Home Matcher will match you with the homes in these neighborhood
          </Typography>
        </Grid>
        <FavoriteListBar open={open} setOpen={setOpen} />
      </Grid>

      <div className={classes.bottomBox}>
        <div
          className={classes.homeMatcher}
          onClick={
            // () => {dispatch(SignUpAction(data))}
            handleClick
          }
        >
          <img className={classes.homeMatcherIcon} src="/Enabled.svg" alt="Home Matcher" />
          <Button className={classes.navigation}>Home Matcher</Button>
          {/* <div className={styles.navigation} >Home Matcher</div> */}
        </div>

        <div className={classes.brand}>
          <Typography className={classes.poweredBy}>Powered by</Typography>
          <img className={classes.logo} src="/logo.svg" alt="logo" />
        </div>
      </div>

      <AddNeighborhood open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default SignUp;
