import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { Button, makeStyles, Typography } from "@material-ui/core";
import styles from "./MatcherFooter.module.css";
import muiStyles from "./MatcherFooterStyle.js";

const useStyles = makeStyles(muiStyles);

const MatcherFooter = ({ onStartMatcher, onRestartMatcher, onHomeMatcher }) => {
  const classes = useStyles();
  const router = useRouter();

  const favorites = useSelector(state => state.modules.neighborhood.favorites);
  const matched = useSelector(state => state.modules.matcher.matched.data);
  favorites.length > 0 ? console.log("Favorites Full!!") : console.log("Favorites is Empty");
  const hm = Boolean(favorites.length > 0);
  // console.log(matched);

  const renderAfterMatching = () => (
    <div className={styles.bottomBox}>
      <div className={styles.bottomNavigationButtons}>
        <div className={styles.restartMatcher} onClick={onRestartMatcher}>
          {/* <img className={styles.restartMatcherThunder} src="/thunder.svg" alt="thunder" /> */}
          <img className={styles.nMatcher} src="/N_Matcher.svg" alt="Neighborhood Matcher Icon" />
          <Button className={classes.restartMatcherButton}>Restart the Matcher</Button>
        </div>
        <div
          className={hm ? styles.homeMatcherActive : styles.homeMatcher}
          onClick={onHomeMatcher}
        >
          <img
            className={hm ? styles.homeMatcherThunderActive : styles.homeMatcherThunder}
            src={hm ? "/Enabled.svg" : "/Disabled.svg"}
            alt={hm ? "Home Matcher enabled" : "Home Matcher disabled"}
          />
          <Button
            disabled={!hm}
            style={{ transition: "ease 0.5s" }}
            className={classes.restartMatcherButton}
          >
            Home Matcher
          </Button>
        </div>
      </div>

      <div style={{ position: "absolute", right: "4%", display: "flex", alignItems: "center" }}>
        <Typography style={{ fontSize: "10px", color: "#323643", opacity: "57%" }}>
          Powered by
        </Typography>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  );

  const renderBeforeMatching = () => (
    <div className={styles.bottomBox}>
      <div onClick={onStartMatcher} style={{ cursor: "pointer" }}>
        <div className={styles.thunder}>
          <img src="/thunder.svg" alt="thunder" />
        </div>
        <Button className={classes.matchButton}>Start the Matcher</Button>
      </div>

      <div style={{ position: "absolute", right: "4%", display: "flex", alignItems: "center" }}>
        <Typography style={{ fontSize: "10px", color: "#323643", opacity: "57%" }}>
          Powered by
        </Typography>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  );

  // return matched.length ? renderAfterMatching() : renderBeforeMatching();
  return matched?.length ? renderAfterMatching() : renderBeforeMatching();
};

export default MatcherFooter;
