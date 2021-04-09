// Third party
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, GridList, Grid, IconButton } from "@material-ui/core";
import { Clear, Replay, Favorite } from "@material-ui/icons";
import _ from 'lodash';

// Actions
import { detailNeighborhood, addFavorite} from '../../services/actions/neighborhood.actions'; 

// Assets
import muiStyles from "./NbDetailStyles";
var image = "/NeighborhoodMiniCardImg.png";
const useStyles = makeStyles(muiStyles);

const NbDetail = ({handleCloseNbDetails}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailNeighborhood());
  }, []);

  const [active, setActive] = useState("percent match");
  const filters = useSelector(state => state.modules.filter.filters);
  const current= useSelector(state=> state.modules.neighborhood.current);
  const detailNb = useSelector(state => state.modules.neighborhood.detailNb);
  const currentNb = useSelector(state => state.modules.neighborhood.currentNb);

  var formattedFilters = [];
  detailNb && (
  Object.entries(detailNb?.filters)?.map((filter, i) =>{ 
    formattedFilters.push({"name" :  filter[0], "score" : parseInt(filter[1])})
  }));

  // const combined = _.unionBy((filters, formattedFilters), 'name');
  // var combined = _.map(filters, function(item){
  //   return _.extend(item, _.find(formattedFilters, { name: item.name }));
  // });
  const combined = formattedFilters.map(t1 => ({...t1, ...filters.find(t2 => t2.name === t1.name)}));

  // console.log("Combined : ", combined);

  var grouped = combined;

  active !== "percent match" ? (grouped = _.filter(combined, { 'group': active })) : (grouped = combined);

  // console.log("Grouped : ", grouped);

  const {Neighborhood}= current;

  detailNb && (image = detailNb.City.replace(/ /g,"_"));

  const classes = useStyles({ image });

  const groups = [];
  filters.map(filter => {
    if (groups.indexOf(filter.group) === -1) {
      groups.push(filter.group);
    }
  });

  const handleAddToFavorites = e => {
    e.preventDefault();
    const neighborhood = {
      "City": detailNb.City,
      "Neighborhood": detailNb.Neighborhood,
      "Score": currentNb.Score,
      "id": detailNb.id
    };
    console.log(neighborhood);
    dispatch(addFavorite(neighborhood));
    handleCloseNbDetails();
  };
  

  function LinearProgressWithLabel(props) {
    return (
      <div className={classes.progressContainer}>
        <div className={classes.progressBar} style={{ width: `${props.value}%` }}>
          <Typography align="center" className={classes.progressTxt} variant="body2">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Paper elevation={5} component={Grid} container className={classes.paper}>
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          className={classes.imgSlider}
        >
          <Grid item container justify="center">
            <div className={classes.title}>
              <Typography variant="h5" className={classes.titleTxt}>
                {detailNb && detailNb.Neighborhood}
              </Typography>
            </div>
          </Grid>

          <div className={classes.scoreBall}>
            <Typography variant="h5" className={classes.score}>
            {currentNb && currentNb.Score}%
            </Typography>
          </div>
        </Grid>

        <Grid container className={classes.navigation}>
          <div className={classes.container}>
            <div style={{ paddingLeft: "6px" }} className={classes.navigationElement}>
              <span
                className={active === "percent match" ? classes.categoryActive : classes.category}
                onClick={() => {
                  setActive("percent match");
                }}
              >
                Percent match
              </span>
            </div>
            {groups?.map((group, i) => (
              <div className={classes.navigationElement} key={i}>
                <span
                  className={active === group ? classes.categoryActive : classes.category}
                  onClick={() => {
                    setActive(group);
                  }}
                >
                  {group.toLowerCase()}
                </span>
              </div>
            ))}
          </div>
        </Grid>

        <GridList cellHeight="auto" className={classes.table}>
          {grouped?.map(
            (filter, i) =>
              filter.score && (
                <Grid
                  className={classes.itemContainer}
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                  key={i}
                >
                  <span className={classes.filterName}>{filter.name}</span>
                  <LinearProgressWithLabel value={filter.score} />
                </Grid>
              ),
          )}
        </GridList>
      </Paper>

      <Grid item container justify="center" className={classes.iconsContainer}>
        <IconButton
          className={classes.clearWrapper}
          arial-label="Clear"
          onClick={handleCloseNbDetails}
        >
          <Clear className={classes.bigIcon} />
        </IconButton>

        <IconButton
          style={{ margin: "0em 2em 0em 2em" }}
          className={classes.redoWrapper}
          arial-label="Redo"
          onClick={() => {
            console.log("Redo Action");
          }}
        >
          <Replay className={classes.smallIcon} />
        </IconButton>

        <IconButton
          className={classes.favoriteWrapper}
          arial-label="Favorite"
          onClick={handleAddToFavorites}
        >
          <Favorite className={classes.bigIcon} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default NbDetail;
