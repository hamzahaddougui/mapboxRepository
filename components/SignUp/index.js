import Router from "next/router";

import { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { SignUpAction } from "./SignUpService";

import FavoriteListBar from "./FavoriteListBar";
import AddNeighborhood from "./AddNeighorhood";
import SignUpForm from "./SignUpForm";

import styles from "./SignUp.module.css";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, GridList } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    // height: "100vh",
    // paddingBottom: "24px"
  },
  jumbo: {
    width: "100%",
    height: "0px",
    margin: "0 auto",
    // padding: "20px 20px 0 20px",
    position: "fixed",
    backgroundColor: "#fff",
  },
  jumboBackground: {
    backgroundColor: "#fff",
    backgroundImage: "url(/map_head.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    // height: "22%",
    height: "22%",
    position: "fixed",
    zIndex: -1,
    top: 0,
  },
  backContainer: {
    position: "absolute",
    display: "inline-flex",
    margin: "8px",
    cursor: "pointer",
    padding: "1em",
  },
  backIcon: {
    width: "24px",
    height: "24px",
    display: "inline-flex",
    float: "left",
    alignItems: "center",
    marginRight: "4px",
  },
  backText: {
    display: "inline-flex",
    float: "left",
    alignItems: "center",
    margin: 0,
    fontFamily: "Poppins",
    fontSize: 12,
    color: "#323643",
  },
  header: {
    position: "relative",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  headerTitle: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 25,
    fontWeight: "Bold",
    margin: "29px 0 6px 0",
  },
  headerDesc: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "lighter",
    margin: "8px 0 16px 0",
    //letterSpacing: "0.01071em"
  },
  bottomBox: {
    height: "74px",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 6px 10px 0 rgba(14,31,53,0.12), 0 12px 18px 0 rgba(14,31,53,0.20), 0 20px 40px -1px rgba(14,31,53,0.12)",
    position: "fixed",
    //top: "92%",
    bottom: "0%",
    right: "0%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  poweredBy: {
    fontSize: "10px",
    color: "#323643",
    opacity: "57%",
  },
  logo: {
    marginLeft: "12px",
  },
  brand: {
    position: "absolute",
    right: "4%",
    display: "flex",
    alignItems: "center",
  },
  // thunder: {
  //   height: "58px",
  //   width: "58px",
  //   position: "absolute",
  //   bottom: "80%",
  //   left: "50%",
  //   transform: "translateX(-50%)",
  // },
  navigation: {
    color: "#323643",
    fontSize: 16.02,
    textTransform: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  wrapper: {
    // height: "100vh",
    paddingTop: "24em",
    paddingBottom: "11em",
    width: "100%",
    // overflowY: "auto",
  },
}));

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
          className={styles.homeMatcher}
          onClick={
            // () => {dispatch(SignUpAction(data))}
            handleClick
          }
        >
          <img className={styles.homeMatcherIcon} src="/Enabled.svg" alt="Home Matcher" />
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
