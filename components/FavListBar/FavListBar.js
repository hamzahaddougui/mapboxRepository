// Third party
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

// Components
import NeighborhoodCard from "../NbCard/NbCard";
import AddNeighborhoodCard from "../NbCard/AddNbCard";
import ScrollMenu from "../../common/scrollMenu/scrollMenu";

// Assets
import muiStyles from "./FavListBarStyles";

// Actions
import { setCurrentNB } from '../../services/actions/neighborhood.actions';

const useStyles = makeStyles(muiStyles);

const FavoriteListBar = ({ open, setOpen, onClick }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const favorites = useSelector(state => state.modules.neighborhood.favorites);

  const Items = [];

  const openCard = (e, option) => {
    e.preventDefault();
    dispatch(setCurrentNB(option));
    onClick();
    // console.log('Card Clicked: ', option.id );
  };

  const addNeighborhoodCard = (
    <div key={`addNb`}>
      <AddNeighborhoodCard
        onClick={() => {
          setOpen(!open);
        }}
        neighborhood={{ Neighborhood: "sbignzi", score: "150" }}
      />
    </div>
  );

  Items.push(addNeighborhoodCard);
  favorites.forEach((neighborhood, i) =>
    Items.push(
      <div key={`${neighborhood.score}${i}`}>
        <NeighborhoodCard onClick={(e) => {openCard(e, neighborhood)}} neighborhood={neighborhood}/>
      </div>,
    ),
  );

  return (
    <div className={classes.root}>
      <ScrollMenu Items={Items} />
    </div>
  );
};

export default FavoriteListBar;
