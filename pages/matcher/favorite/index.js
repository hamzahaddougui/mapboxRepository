// Third party
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, GridList, Modal } from "@material-ui/core";
import { Box } from "@material-ui/core";

// components
import FavoriteListBar from "components/FavListBar/FavListBar";
import AddNeighborhood from "components/AddNb/AddNb";
import SignUpForm from "components/SignUpForm/SignUpForm";
import SignUpHeader from "components/SignUpHeader/SignUpHeader";
import SignUpFooter from "components/SignUpFooter/SignUpFooter";
import NeighborhoodDetail from "components/NbDetail/NbDetail";

// Actions
import { SignUpAction } from "../../../services/actions/signup.actions";

// Assets
import muiStyles from "styles/favoriteStyles";

const useStyles = makeStyles(muiStyles);

const Favorite = () => {
  const classes = useStyles();

  const router = useRouter();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });
  const [openNbDetails, setOpenNbDetails] = useState(false);

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async () => {
    if (data.email && data.firstName && data.lastName) {
      try {
        console.log(data);
        router.push("/matcher/home");
        // dispatch(SignUpAction(data));
        // const response = await instance.post("http://localhost:3001/api/users/signup", data);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleNbClick = e => {
    console.log("click");
    setOpenNbDetails(true);
  };
  const handleCloseNbDetails = () => {
    setOpenNbDetails(false);
  };

  return (
    <>
    { open 
        ? 
          (<AddNeighborhood open={open} setOpen={setOpen} />) 
        : 
          (<Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item container direction="column" justify="center" alignItems="center" className={classes.contentContainer}>
            {/* 
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
              <SignUpFooter onClick={handleSubmit} />
            </Grid>
            <Grid
              component={Box}
              visibility={!open ? "visible" : "hidden"}
              id="jumboTag"
              container
              className={classes.jumbo}
            >
              <SignUpHeader />
              <FavoriteListBar open={open} setOpen={setOpen} />
            </Grid>
            <AddNeighborhood open={open} setOpen={setOpen} />
            */}


            {/* <Grid
              id="jumboTag"
              container
              item
              direction="column"
              className={classes.jumbo}
            >
              <SignUpHeader />
              <FavoriteListBar open={open} setOpen={setOpen} onClick={handleNbClick} />
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.signUpContent}
            >
              <GridList className={classes.wrapper}>
                <SignUpForm data={data} handleChange={handleChange} />
              </GridList>
              <SignUpFooter onClick={handleSubmit} />
            </Grid>
            <Modal
              open={openNbDetails}
              onClose={handleCloseNbDetails}
            >
              <>
              {openNbDetails && (<NeighborhoodDetail handleCloseNbDetails={handleCloseNbDetails} />)}
              </>
            </Modal> */}

            <Grid item container direction="column" justify="center" alignItems="center" className={classes.contentWrapper}>
              <Grid item className={classes.headerContainer}>
              <SignUpHeader />
              </Grid>
              <Grid item className={classes.listContainer}>
              <FavoriteListBar open={open} setOpen={setOpen} onClick={handleNbClick} />
              </Grid>
              <Grid item className={classes.formContainer}>
              <SignUpForm data={data} handleChange={handleChange} />
              </Grid>
            </Grid>
            </Grid>
            <SignUpFooter onClick={handleSubmit} />
            <Modal
              open={openNbDetails}
              onClose={handleCloseNbDetails}
            >
              <>
              {openNbDetails && (<NeighborhoodDetail handleCloseNbDetails={handleCloseNbDetails} />)}
              </>
            </Modal>
          </Grid>
          )
    }
  </>
  );
};

export default Favorite;
