import { makeStyles } from "@material-ui/core/styles";
import Map from "components/Map";
import MapHeader from "components/MapHeader";
import MatcherFooter from "components/MatcherFooter";
import NeighborhoodListBar from "components/NeighborhoodListBar";

import styles from "./matcherStyles";

const useStyles = makeStyles(styles);

const Matcher = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <Map />
      <div className={classes.mapHeader}>
        <MapHeader />
      </div>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <NeighborhoodListBar />
      </div>
      <div className={classes.matcherFooter}>
        <MatcherFooter />
      </div>
    </div>
  );
};

export default Matcher;
