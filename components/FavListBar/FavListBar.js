// Third party
import { useEffect, useState } from "react";
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
  const [items, setItems] = useState([]);
  const favorites = useSelector(state => state.modules.neighborhood.favorites);

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

  useEffect(() => {
    const items_ = [...items];
    console.log(items.length);
    if (!items.length) {
      items_.push(addNeighborhoodCard);
      favorites.forEach((neighborhood, i) =>
        items_.push(
          <div key={`${neighborhood.score}${i}`}>
            <NeighborhoodCard neighborhood={neighborhood} />
          </div>,
        ),
      );
      setItems(items_);
    }
  }, [items]);

  return (
    <div className={classes.root}>
      <ScrollMenu Items={items} />
    </div>
  );
};

export default FavoriteListBar;
