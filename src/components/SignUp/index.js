import Router from "next/router";

import { useState } from "react";

import FavoriteListBar from "./FavoriteListBar";
import AddNeighborhood from "./AddNeighorhood";

import styles from "./SignUp.module.css";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  jumbo: {
    backgroundColor: "#9A9895",
    backgroundImage: "url(/map_head.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "22%",
    margin: "0 auto",
    padding: "20px 20px 0 20px",
  },
  backContainer: {
    display: "inline-flex",
    margin: "8px",
    cursor: "pointer",
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
    position: "absolute",
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
    height: "8%",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 6px 10px 0 rgba(14,31,53,0.12), 0 12px 18px 0 rgba(14,31,53,0.20), 0 20px 40px -1px rgba(14,31,53,0.12)",
    position: "fixed",
    top: "92%",
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
  thunder: {
    height: "58px",
    width: "58px",
    position: "absolute",
    bottom: "80%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  navigation: {
    color: "#323643",
    fontSize: 16.02,
    textTransform: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.jumbo}>
        <div
          className={classes.backContainer}
          onClick={() => {
            Router.push("/neighborhood");
          }}
        >
          <img className={classes.backIcon} src="/back.svg" alt="backButton"></img>
          <div className={classes.backText}>Back</div>
        </div>

        <div className={classes.header}>
          <Typography variant="h2" className={classes.headerTitle}>
            Proceed to Home Matcher
          </Typography>
          <Typography variant="body1" className={classes.headerDesc}>
            The Home Matcher will match you with the homes in these neighborhood
          </Typography>
        </div>
      </div>

      <FavoriteListBar />

      <div className={classes.bottomBox}>
        <div
          className={styles.homeMatcher}
          onClick={() => {
            console.log("Home Matcher");
          }}
        >
          <img className={classes.thunder} src="/thunder.svg" alt="thunder" />
          <Button className={classes.navigation}>Home Matcher</Button>
        </div>

        <div className={classes.brand}>
          <Typography className={classes.poweredBy}>Powered by</Typography>
          <img className={classes.logo} src="/logo.svg" alt="logo" />
        </div>
      </div>

      <AddNeighborhood open={open} setOpen={setOpen} />
    </div>
  );
};

export default SignUp;
