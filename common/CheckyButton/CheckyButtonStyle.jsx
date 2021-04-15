const styles = theme => ({
  title: {
    fontFamily: "Poppins",
    fontSize: 14.2,
    fontWeight: "300",
    color: "#323643",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  checkyButton: {
    borderRadius: "32px",
    width: "216px",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "300",
    color: "#323643",
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
    fontSize: 16,
    textTransform: "none",
    fontFamily: "Poppins",
    backgroundColor: "#323643",
    color: "white",
    fontWeight: "500",
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
