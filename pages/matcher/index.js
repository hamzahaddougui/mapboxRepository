import { makeStyles } from "@material-ui/core/styles";
import Map from "components/Map";
import MapHeader from "components/MapHeader";
import MatcherFooter from "components/MatcherFooter";

import styles from "./matcherStyle";

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
      <div className={classes.matcherFooter}>
        <MatcherFooter />
      </div>
    </div>
  );
};

export default Matcher;
