const styles = theme => ({
  title: {
    fontFamily: "Poppins",
    fontSize: 14.24,
    fontWeight: "Light",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  checkyButton: {
    borderRadius: "32px",
    width: "216px",
    fontSize: 16.02,
    fontFamily: "Poppins",
    fontWeight: "lighter",
    textTransform: "none",
    border: "1.2px solid #B2B3B4",
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
      minWidth: "5em",
    },
  },
  activeCheckyButton: {
    border: "1.2px solid transparent",
    borderRadius: "32px",
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
});

export default styles;
