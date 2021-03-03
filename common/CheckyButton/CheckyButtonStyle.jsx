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
    borderRadius: "20px",
    width: "216px",
    fontSize: 16.02,
    fontFamily: "Poppins",
    fontWeight: "light",
    textTransform: "none",
    border: "1.2px solid #B2B3B4",
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
      minWidth: "5em",
    },
  },
  activeCheckyButton: {
    border: "1.2px solid transparent",
    borderRadius: "20px",
    width: "216px",
    fontSize: 16.02,
    textTransform: "none",
    fontFamily: "Poppins",
    backgroundColor: "#323643",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#323643",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      minWidth: "3em",
    },
  },
}));

export default useStyles;
