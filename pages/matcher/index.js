import React, { useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Map from "components/Map";
import MapHeader from "components/MapHeader";
import MatcherFooter from "components/MatcherFooter";
import NeighborhoodListBar from "components/NeighborhoodListBar";
import MatcherRestart from "components/MatcherRestart";

import styles from "styles/matcherStyles";
import BackdropLoader from "../../common/BacdropLoader/BackdropLoader";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

const Matcher = () => {
  const classes = useStyles();
  const router = useRouter();
  const [openRestartMatcher, setOpenRestartMatcher] = useState(false);
  const matcherLoading = useSelector(state => state.modules.matcher.loading);
  const mapLoading = useSelector(state => state.modules.map.loading);

  const handleStartMatcher = () => {
    router.push("/matcher/start");
  };

  const handleRestartMatcher = () => {
    setOpenRestartMatcher(!openRestartMatcher);
  };

  const handleHomeMatcher = () => {
    router.push("/matcher/favorite");
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {openRestartMatcher && <MatcherRestart onClose={handleRestartMatcher} />}
      <Map />
      <div className={classes.mapHeader}>
        <MapHeader />
      </div>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <NeighborhoodListBar />
      </div>
      <div className={classes.matcherFooter}>
        <MatcherFooter
          onStartMatcher={handleStartMatcher}
          onRestartMatcher={handleRestartMatcher}
          onHomeMatcher={handleHomeMatcher}
        />
      </div>
      <BackdropLoader open={matcherLoading || mapLoading} />
    </div>
  );
};

export default Matcher;
