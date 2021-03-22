// Next Importations
import Router from "next/router";

// React Redux Importations
import { useDispatch } from "react-redux";

// Actions importation
import { resetNeighborhood } from "../Matcher/NeighborhoodService";
import { resetFilter } from "../Filter/FilterService";

// CSS modules importation
import styles from "./RestartMatcher.module.css";

// Material UI CSS importation
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import { Close, Favorite } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    overflow: "hidden",
    zIndex: 3,
    // display: props => (props.open ? "block" : "none"),
  },
  close: {
    width: "27px",
    height: "27px",
    position: "absolute",
    right: "30px",
    top: "33px",
    cursor: "pointer",
  },
  title: {
    fontSize: 25,
    marginTop: "36px",
    textAlign: "center",
    fontWeight: "bold",
  },
  favoriteIcon: {
    color: "#FF0061",
    position: "relative",
    top: "3px",
  },
  desc: {
    fontSize: 18.02,
    marginTop: "23px",
    textAlign: "center",
    fontWeight: "lighter",
  },
  buttonsWrapper: {
    width: "440px",
    marginTop: "33px",
  },
  customButton: {
    width: "216px",
    height: "40px",
    backgroundColor: "white",
    border: "1px solid rgba(50,54,67,0.24)",
    borderRadius: "21px",
    textTransform: "none",
  },
}));

const RestartMatcher = ({ onClose }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <div className={styles.backContainer} onClick={onClose}>
        <img className={styles.backIcon} src="/back.svg" alt="backButton"></img>
        <div className={styles.backText}>Back</div>
      </div>

      <Close className={classes.close} onClick={onClose} />

      <div className={styles.restartMatcherWrapper}>
        <img className={styles.restartIcon} src="/Restart.svg" alt="RestartIcon"></img>
        <Typography className={classes.title} variant="h2">
          You will restart the neighborhood matcher
          <br />
          Don't worry, we will keep your favorites
          <Favorite className={classes.favoriteIcon} />!
        </Typography>
        <Typography className={classes.desc} variant="h5">
          Are you sure you want to restart the Matcher?
        </Typography>
        <Grid container spacing={2} className={classes.buttonsWrapper}>
          <Grid item xs={12} sm={6}>
            <Button
              className={classes.customButton}
              onClick={() => {
                onClose();
                dispatch(resetNeighborhood()), dispatch(resetFilter());
              }}
            >
              Yes, I am sure
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button className={classes.customButton} onClick={onClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RestartMatcher;
