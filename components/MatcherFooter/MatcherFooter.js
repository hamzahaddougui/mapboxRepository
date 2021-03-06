// Third party
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Button, makeStyles, Typography, Hidden } from "@material-ui/core";
import ReplayIcon from '@material-ui/icons/Replay';

// Assets
import muiStyles from "./MatcherFooterStyle";

// Services
import { loadFilters, loadFiltersData } from "../../services/actions/filter.actions";

const useStyles = makeStyles(muiStyles);

const MatcherFooter = ({ onStartMatcher, onRestartMatcher, onHomeMatcher, handleOpenSignIn }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  
  const favorites = useSelector(state => state.modules.neighborhood.favorites);
  const matched = useSelector(state => state.modules.neighborhood.matched.data);
  const hm = Boolean(favorites.length > 0);
  const filters = useSelector(state => state.modules.filter.filters);
  const filtersData = useSelector(state => state.modules.filter.filtersData);

  // if(filters.length === 0){
  //   dispatch(loadFilters());
  // }

  // if(filtersData.length === 0){
  //   dispatch(loadFiltersData());
  // }
  useEffect(() => {
    dispatch(loadFiltersData());
    dispatch(loadFilters());
  }, []);

  const handleHomeMatcher = e => {
    hm && onHomeMatcher(e);
  };

  const renderAfterMatching = () => (
    <div className={classes.bottomBox}>

      <Typography 
        className={classes.exitMatcher}
        onClick={() => {console.log("Exit the matcher")}}
      >
        Exit the Matcher
      </Typography>

      <div className={classes.bottomNavigationButtons}>

        {/* Neighborhood Matcher */}
        <div className={classes.restartMatcher} onClick={onRestartMatcher}>
          <img className={classes.nMatcher} src="/N_Matcher.svg" alt="Neighborhood Matcher Icon" />
          <Button className={classes.restartMatcherButton}>
            {/* <img src="/Restart.svg" alt="Restart Icon" className={classes.rMatcherButtonIcon} /> */}
            Neighborhood Matcher
          </Button>
        </div>

        <div className={ hm ? classes.line : classes.lineDisabled }>

        </div>

        {/* Home Matcher */}
        <div
          className={hm ? classes.homeMatcherActive : classes.homeMatcher}
          style={{ transition: "ease 1.5s" }}
          onClick={handleHomeMatcher}
        >
          <img
            className={hm ? classes.homeMatcherThunderActive : classes.homeMatcherThunder}
            src={hm ? "/Enabled.svg" : "/Disabled.svg"}
            alt={hm ? "Home Matcher enabled" : "Home Matcher disabled"}
          />
          <Button
            disabled={!hm}
            style={{ transition: "ease 1.5s" }}
            className={classes.restartMatcherButton}
          >
            Home Matcher
          </Button>
        </div>
      </div>
      <Hidden xsDown>
      <div style={{ position: "absolute", right: "21px", display: "flex", alignItems: "center", bottom: "16px" }}>
        <Typography className={classes.poweredBy}>
          Powered by
        </Typography>
        <Typography className={classes.brandName}>
          Nomadville
        </Typography>
        {/* <img className={classes.logo} src="/logo.svg" alt="logo" /> */}
      </div>
      </Hidden>
    </div>
  );

  const renderBeforeMatching = () => (
    <>
    <Button className={classes.signInButton} onClick={handleOpenSignIn}>
      Already have an account? Sign in
    </Button>
    <div className={classes.bottomBox}>
      <div onClick={onStartMatcher} style={{ cursor: "pointer" }}>
        {/* <div className={classes.thunder}> */}
          <img src="/thunder.svg" alt="thunder" className={classes.thunder} />
        {/* </div> */}
        <Button className={classes.matchButton}>
          <Typography className={classes.matchButtonTxt}>Start the Matcher</Typography>
        </Button>
      </div>

      <div style={{ position: "absolute", right: "21px", display: "flex", alignItems: "center" }}>
        <Typography className={classes.poweredBy}>
          Powered by
        </Typography>
        <Typography className={classes.brandName}>
          Nomadville
        </Typography>
        {/* <img className={classes.logo} src="/logo.svg" alt="logo" /> */}
      </div>
    </div>
    </>
  );

  return matched?.length ? renderAfterMatching() : renderBeforeMatching();
};

export default MatcherFooter;
