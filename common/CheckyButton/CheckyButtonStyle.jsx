import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "Bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  checkyButton: {
    borderRadius: "10em",
    minWidth: "10em",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "light",
    textTransform: "none",
    border: "0.5px solid #ABABAB",
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
      minWidth: "5em",
    },
  },
  activeCheckyButton: {
    border: "0.5px solid transparent",
    borderRadius: "10em",
    minWidth: "10em",
    fontSize: 14,
    textTransform: "none",
    fontFamily: "Poppins",
    backgroundColor: theme.palette.common.primary,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.common.primary,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      minWidth: "3em",
    },
  },
}));

export default useStyles;
