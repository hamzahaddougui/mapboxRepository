// Third party
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// components
import NeighborhoodCard from "../NbCard/NbCard";
import SeeMoreCard from '../NbCard/SeeMoreCard';
import ScrollMenu from "../../common/scrollMenu/scrollMenu";
import GridView from '../GridView/GridView';

// Actions
import {setCurrentNB} from '../../services/actions/neighborhood.actions';

// Assets
import muiStyles from "./NbListBarStyles";

const useStyles = makeStyles(muiStyles);

const NeighborhoodListBar = ({ onClick, handleShowConfirm }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const neighborhoods = useSelector(state => state.modules.neighborhood.matched.data);
  const favorites = useSelector(state => state.modules.neighborhood.favorites);
  const DynamicNb = useSelector(state => state.modules.neighborhood.NbList);
  // const NbList = [];

  // if(DynamicNb){
  //   typeof DynamicNb === 'object'
  //     ?
  //     NbList.push(DynamicNb)
  //     :
  //     NbList = DynamicNb;
  // }

  console.log(DynamicNb);

  const handleOpen = () => {
    setOpen(!open);
  };

  const openCard = (e, option) => {
    e.preventDefault();
    dispatch(setCurrentNB(option));
    onClick();
    // console.log('Card Clicked: ', option.id );
  };

  const renderFavorites = () =>
    favorites.length > 0 &&
    favorites.slice(0, 50).map((favorite, i) => (
      <div key={`${favorite.Neighborhood}${i}`}>
        <NeighborhoodCard onClick={(e) => {openCard(e, favorite)}} neighborhood={favorite} handleShowConfirm={handleShowConfirm} />
      </div>
    ));

  const renderItems = () =>
    neighborhoods?.length &&
    neighborhoods.slice(0, 50).map((neighborhood, i) => (
      <div key={`${neighborhood.Neighborhood}${i}`}>
        <NeighborhoodCard onClick={(e) => {openCard(e, neighborhood)}} neighborhood={neighborhood} />
      </div>
    ));
  
    // const renderItems = () =>
    // DynamicNb?.length > 0 ?
    // (DynamicNb.map((neighborhood, i) => (
    //   <div key={`${neighborhood.Neighborhood}${i}`}>
    //     <NeighborhoodCard onClick={(e) => {openCard(e, neighborhood)}} neighborhood={neighborhood} handleShowConfirm={handleShowConfirm} />
    //   </div>
    // )))
    // :
    // (
    //   neighborhoods?.length &&
    //   (neighborhoods.slice(0, 50).map((neighborhood, i) => (
    //     <div key={`${neighborhood.Neighborhood}${i}`}>
    //       <NeighborhoodCard onClick={(e) => {openCard(e, neighborhood)}} neighborhood={neighborhood} handleShowConfirm={handleShowConfirm} />
    //     </div>
    //   )))
    // );

  const renderSeeMore = () =>
      <div key={`SeeMore`}>
        <SeeMoreCard
          onClick={handleOpen}
          // neighborhood={{ Neighborhood: "sbignzi", score: "150" }}
        />
      </div>
  ;

  return (
    <React.Fragment>
      <Grid className={classes.root} item>
        <ScrollMenu onSelect={onClick} Items={renderItems()} Favorites={renderFavorites()} SeeMore={renderSeeMore()} />
      </Grid>
      {open && (<GridView open={open} handleOpen={handleOpen} handleCard={onClick} />)}
    </React.Fragment>
  );
};

export default NeighborhoodListBar;
