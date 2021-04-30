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
    width: "225px",
    height: "150px",
    cursor: "pointer",
    marginBottom: "1em",
    zIndex: 1500,
    position: "relative",
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
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addNbIcon:{
    [theme.breakpoints.down('xs')]: {
      width: "56px",
      height: "68px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "62px",
      height: "72px",
    },
    [theme.breakpoints.up('md')]: {
      width: "62px",
      height: "72px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "62px",
      height: "72px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "72px",
      height: "82px",
    },
  },
  text: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 14.2,
    fontWeight: "300",
    textAlign: "center",
    // marginTop: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "6.7em",
    // paddingBottom: "2em",
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
    },
  },
  symbol: {
    fontSize: 20,
    fontWeight: "600",
    marginRight: "6px",
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      marginRight: "4px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 22,
    },
  },
  cardText: {
    fontFamily: "Poppins",
    fontSize: 14.2,
    fontWeight: "300",
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
    },
  }
});

export default styles;
