// Third parts
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

// Assets
import muiStyles from "./SignUpFooterStyles";

const useStyles = makeStyles(muiStyles);

const Favorite = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.homeMatcher} onClick={onClick}>
        <img className={classes.homeMatcherIcon} src="/Enabled.svg" alt="Home Matcher" />
        <Button className={classes.navigation}>Home Matcher</Button>
      </div>

      <div className={classes.brand}>
        <Typography className={classes.poweredBy}>Powered by</Typography>
        <img className={classes.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Favorite;
