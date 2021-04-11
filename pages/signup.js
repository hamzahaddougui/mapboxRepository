// Third party
import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, GridList } from "@material-ui/core";
import { Box } from "@material-ui/core";

// components
import FavoriteListBar from "components/FavListBar/FavListBar";
import AddNeighborhood from "components/AddNb/AddNb";
import SignUpForm from "components/SignUpForm/SignUpForm";
import SignUpHeader from "components/SignUpHeader/SignUpHeader";
import SignUpFooter from "components/SignUpFooter/SignUpFooter";

// Actions
import { SignUpAction } from "../services/actions/signup.actions";

// Assets
import muiStyles from "styles/favoriteStyles";

const useStyles = makeStyles(muiStyles);

const Favorite = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ firstName: "", lastName: "", email: "", password: "" });

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async () => {
    if (data.email && data.firstName && data.lastName && data.password) {
      try {
        console.log(data);
        dispatch(SignUpAction(data));
        // const response = await instance.post("http://localhost:3001/api/users/signup", data);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid
        component={Box}
        visibility={!open ? "visible" : "hidden"}
        item
        container
        justify="center"
        alignItems="center"
      >
        <GridList className={classes.wrapper}>
          <SignUpForm data={data} handleChange={handleChange} />
        </GridList>
      </Grid>
      <SignUpFooter onClick={handleSubmit} />
      <AddNeighborhood open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default Favorite;
