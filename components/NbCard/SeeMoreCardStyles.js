
const styles = theme => ({
  // Add Neighborhood Card Styles
  root: {
    backgroundColor: "#323643",
    opacity: 0.9,
    borderRadius: "24px",
    margin: "0 4px",
    width: "225px",
    height: "150px",
    cursor: "pointer",
    marginBottom: "1em",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      width: "185px",
      height: "126px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('md')]: {
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('lg')]: {
      // width: "257px",
      // height: "171px",
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "325px",
      height: "200px",
    },

  },

  text: {
    fontFamily: "Poppins",
    color: "#FFF",
    fontSize: 14.2,
    fontWeight: "600",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('lg')]: {
      // fontSize: 16.02,
      fontSize: 14.2,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
    },
  },
 
});

export default styles;
