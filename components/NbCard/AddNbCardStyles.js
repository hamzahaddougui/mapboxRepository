const addNbIcon = "/addNeighborhood.svg";

const styles = theme => ({
  // Add Neighborhood Card Styles
  root: {
    backgroundColor: "white",
    backgroundImage: `url(${addNbIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%  35%",
    borderRadius: "24px",
    margin: "0 4px",
    minWidth: "257px",
    width: "257px",
    cursor: "pointer",
    marginBottom: "1em",
    zIndex: 1500,
    position: "relative",
  },

  text: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "lighter",
    textAlign: "center",
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "6.7em",
    paddingBottom: "2em",
  },
  symbol: {
    fontSize: 22,
    fontWeight: "bold",
    marginRight: "6px",
  },
});

export default styles;
