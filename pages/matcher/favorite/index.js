// Third party
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, GridList } from "@material-ui/core";
import { Box } from "@material-ui/core";

// components
import FavoriteListBar from "components/FavListBar/FavListBar";
import AddNeighborhood from "components/AddNb/AddNb";
import SignUpForm from "components/SignUpForm/SignUpForm";
import SignUpHeader from "components/SignUpHeader/SignUpHeader";
import SignUpFooter from "components/SignUpFooter/SignUpFooter";
import Accordion from "components/Accordion/Accordion";

// Assets
import muiStyles from "styles/favoriteStyles";

const useStyles = makeStyles(muiStyles);

const Favorite = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async () => {
    if (data.email && data.firstName && data.lastName) {
      try {
        console.log(data);
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
      <Grid id="jumboTag" container className={classes.jumbo}>
        <SignUpHeader />
        <FavoriteListBar open={open} setOpen={setOpen} />
      </Grid>
      <SignUpFooter onClick={handleSubmit} />
      <AddNeighborhood open={open} setOpen={setOpen} />
      <Accordion />
    </Grid>
  );
};

export default Favorite;
