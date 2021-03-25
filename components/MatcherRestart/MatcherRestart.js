// Third party
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import { Close, Favorite } from "@material-ui/icons";

// Actions
import { resetNeighborhood } from "../Neighborhood/NbService";
import { resetFilter } from "../Filter/FilterService";

// Assets
import muiStyles from "./MatcherRestartStyles";

const useStyles = makeStyles(muiStyles);

const RestartMatcher = ({ onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <div className={classes.backContainer} onClick={onClose}>
        <img className={classes.backIcon} src="/back.svg" alt="backButton"></img>
        <div className={classes.backText}>Back</div>
      </div>
      <Close className={classes.close} onClick={onClose} />
      <div className={classes.restartMatcherWrapper}>
        <img className={classes.restartIcon} src="/Restart.svg" alt="RestartIcon"></img>
        <Typography className={classes.title} variant="h2">
          You will restart the neighborhood matcher
          <br />
          Don't worry, we will keep your favorites
          <Favorite className={classes.favoriteIcon} />!
        </Typography>
        <Typography className={classes.desc} variant="h5">
          Are you sure you want to restart the Matcher?
        </Typography>
        <Grid container spacing={2} className={classes.buttonsWrapper}>
          <Grid item xs={12} sm={6}>
            <Button
              className={classes.customButton}
              onClick={() => {
                onClose();
                dispatch(resetNeighborhood()), dispatch(resetFilter());
              }}
            >
              Yes, I am sure
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button className={classes.customButton} onClick={onClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RestartMatcher;
