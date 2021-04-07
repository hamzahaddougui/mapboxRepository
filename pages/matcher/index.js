import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
// import Map from "components/Map";
import MapHeader from "components/MapHeader/MapHeader";
import MatcherFooter from "components/MatcherFooter/MatcherFooter";
import NeighborhoodListBar from "components/NbListBar/NbListBar";
import MatcherRestart from "components/MatcherRestart/MatcherRestart";
import NeighborhoodDetail from "components/NbDetail/NbDetail";
import { Dialog } from "@material-ui/core";

import styles from "styles/matcherStyles";
import BackdropLoader from "../../common/BackdropLoader/BackdropLoader";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { loadFilters } from '../../services/actions/filter.actions';

const useStyles = makeStyles(styles);

const Matcher = ({ Map }) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const [openRestartMatcher, setOpenRestartMatcher] = useState(false);
  const [openNbDetails, setOpenNbDetails] = useState(false);
  const mapLoading = useSelector(state => state.modules.map.loading);
  const matched = useSelector(state => state.modules.neighborhood.matched);
  const favorites = useSelector(state => state.modules.neighborhood.favorites);
  // const filters = useSelector(state => state.modules.filter.filters);

  // console.log("Filters length is : ", filters.length);
  // !filters.length ? console.log("Filters is Full") : console.log("Filters is Empty");
  // if(!filters.length){
  //     dispatch(loadFilters());
  // }

  const handleStartMatcher = () => {
    router.push("/matcher/start");
  };

  const handleRestartMatcher = () => {
    setOpenRestartMatcher(!openRestartMatcher);
  };

  const handleHomeMatcher = () => {
    router.push("/matcher/favorite");
  };

  const handleNbClick = e => {
    console.log("click");
    setOpenNbDetails(true);
  };
  const handleCloseNbDetails = () => {
    setOpenNbDetails(false);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {openRestartMatcher && <MatcherRestart onClose={handleRestartMatcher} />}
      {/* <Map /> */}
      <div className={classes.mapHeader}>
        <MapHeader />
      </div>
      { (matched.data || favorites) && (
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <NeighborhoodListBar onClick={handleNbClick} />
      </div>
      )}
      <div className={classes.matcherFooter}>
        <MatcherFooter
          onStartMatcher={handleStartMatcher}
          onRestartMatcher={handleRestartMatcher}
          onHomeMatcher={handleHomeMatcher}
        />
      </div>
      <BackdropLoader open={mapLoading} />
      <Dialog
        fullWidth
        maxWidth='md'
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            height: "80vh",
            width: "75vw",
          },
        }}
        // style={{ width: "100vw", height: "100vh" }}
        onClose={handleCloseNbDetails}
        open={openNbDetails}
      >
        {openNbDetails && (<NeighborhoodDetail handleCloseNbDetails={handleCloseNbDetails} />)}
      </Dialog>
    </div>
  );
};

export default Matcher;
