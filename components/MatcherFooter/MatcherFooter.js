// Third party
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button, makeStyles, Typography } from "@material-ui/core";

// Assets
import muiStyles from "./MatcherFooterStyle";

const useStyles = makeStyles(muiStyles);

const MatcherFooter = ({ onStartMatcher, onRestartMatcher, onHomeMatcher }) => {
  const classes = useStyles();
  const favorites = useSelector(state => state.modules.neighborhood.favorites);
  const matched = useSelector(state => state.modules.neighborhood.matched.data);
  const hm = Boolean(favorites.length > 0);

  const renderAfterMatching = () => (
    <div className={classes.bottomBox}>
      <div className={classes.bottomNavigationButtons}>
        <div className={classes.restartMatcher} onClick={onRestartMatcher}>
          <img className={classes.nMatcher} src="/N_Matcher.svg" alt="Neighborhood Matcher Icon" />
          <Button className={classes.restartMatcherButton}>Restart the Matcher</Button>
        </div>
        <div
          className={hm ? classes.homeMatcherActive : classes.homeMatcher}
          onClick={onHomeMatcher}
        >
          <img
            className={hm ? classes.homeMatcherThunderActive : classes.homeMatcherThunder}
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
        <img className={classes.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  );

  const renderBeforeMatching = () => (
    <div className={classes.bottomBox}>
      <div onClick={onStartMatcher} style={{ cursor: "pointer" }}>
        <div className={classes.thunder}>
          <img src="/thunder.svg" alt="thunder" />
        </div>
        <Button className={classes.matchButton}>Start the Matcher</Button>
      </div>

      <div style={{ position: "absolute", right: "4%", display: "flex", alignItems: "center" }}>
        <Typography style={{ fontSize: "10px", color: "#323643", opacity: "57%" }}>
          Powered by
        </Typography>
        <img className={classes.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  );

  return matched?.length ? renderAfterMatching() : renderBeforeMatching();
};

export default MatcherFooter;
