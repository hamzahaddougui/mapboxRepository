// Third party
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

// Components
import NeighborhoodCard from "../NbCard/NbCard";
import AddNeighborhoodCard from "../NbCard/AddNbCard";
import ScrollMenu from "../../common/scrollMenu/scrollMenu";

// Assets
import muiStyles from "./FavListBarStyles";

const useStyles = makeStyles(muiStyles);

const FavoriteListBar = ({ open, setOpen }) => {
  const classes = useStyles();
  const favorites = useSelector(state => state.modules.neighborhood.favorites);

  const Items = [];

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
        <NeighborhoodCard neighborhood={neighborhood} />
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
