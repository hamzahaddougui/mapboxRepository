const addNbIcon = "/addNeighborhood.svg";

const styles = theme => ({
  // Add Neighborhood Card Styles
  root: {
    backgroundColor: "white",
    // backgroundImage: `url(${addNbIcon})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "50%  35%",
    borderRadius: "24px",
    margin: "0 4px",
    // minWidth: "257px",
    width: "257px",
    height: "171px",
    cursor: "pointer",
    marginBottom: "1em",
    zIndex: 1500,
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      width: "185px",
      height: "126px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "257px",
      height: "171px",
    },
    [theme.breakpoints.up('md')]: {
      width: "257px",
      height: "171px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "257px",
      height: "171px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "325px",
      height: "200px",
    },
  },
  addNbIcon:{
    [theme.breakpoints.down('xs')]: {
      width: "56px",
      height: "68px",
    },
  },
  text: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "300",
    textAlign: "center",
    // marginTop: "8px",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "6.7em",
    // paddingBottom: "2em",
    [theme.breakpoints.down('xs')]: {
      fontSize: 14.2,
    },
  },
  symbol: {
    fontSize: 22,
    fontWeight: "600",
    marginRight: "6px",
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      marginRight: "4px",
    },
  },
  cardText: {
    fontFamily: "Poppins",
    fontSize: 16.02,
    fontWeight: "300",
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  }
});

export default styles;
