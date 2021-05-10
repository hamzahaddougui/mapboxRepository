import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "662px",
    paddingBottom: "80px",
  },
  itemContainer: {
    marginBottom: "1em",
  },
  priorityTxt: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 16.02,
    color: "#323643",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.down('415')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
    },
  },
  priorityButton: {
    borderRadius: "32px",
    width: "127px",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "300",
    color: "#323643",
    textTransform: "none",
    border: "1.2px solid #B2B3B4",
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
      minWidth: "5em",
    },
    [theme.breakpoints.down('xs')]: {
      width: "105px",
      fontSize: 11,
    },
    [theme.breakpoints.down('415')]: {
      width: "88px",
      fontSize: 10,
      padding: "2px",
    },
  },
  activePriorityButton: {
    border: "1.2px solid transparent",
    borderRadius: "32px",
    width: "127px",
    fontSize: 14,
    textTransform: "none",
    fontFamily: "Poppins",
    fontWeight: "300",
    backgroundColor: "#323643",
    color: "#FFF",
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
