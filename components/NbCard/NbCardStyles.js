const NeighborhoodMiniCardImg = "/NeighborhoodMiniCardImg.png";

const styles = theme => ({
  // Neighborhood Card Styles
  root: {
    backgroundColor: "#ffffff",
    backgroundImage: `url(${NeighborhoodMiniCardImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "24px",
    margin: "0 4px",
    width: "257px",
    cursor: "pointer",
    marginBottom: "1em",
  },
  heartContainer: {
    zIndex: 10,
  },
  heart: {
    color: "white",
  },
  title: {
    padding: "1em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins",
    fontWeight: "Bold",
    textAlign: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  scoreValue: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "Bold",
  },
  scoreContainer: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#575ff9",
    opacity: 0.9,
    boxShadow: "0px 3px 7px 0px rgba(148, 95, 233, 71)",
    margin: "12px",
  },
  scoreContainerFav: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0061",
    opacity: 0.9,
    boxShadow: "0px 3px 7px 0px rgba(250, 2, 98, 70)",
    margin: "12px",
  },
});

export default styles;
