const styles = () => ({
  // Add Neighborhood Styles
  root: {
    backgroundColor: "#FFF",
    height: "100vh",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: "0px",
    left: "0px",
    zIndex: "1",
    display: props => (props.open ? "block" : "none"),
  },
  close: {
    width: "27px",
    height: "27px",
    position: "absolute",
    right: "27px",
    top: "33px",
    cursor: "pointer",
  },
  bottomBox: {
    height: "8%",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 6px 10px 0 rgba(14,31,53,0.12), 0 12px 18px 0 rgba(14,31,53,0.20), 0 20px 40px -1px rgba(14,31,53,0.12)",
    position: "fixed",
    top: "92%",
    right: "0%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navigation: {
    color: "#323643",
    fontSize: 16.02,
    textTransform: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  addNeighborhoodImg: {
    width: "119px",
    height: "112",
  },
  addNeighborhoodTxt: {
    fontFamily: "Poppins",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "17px",
  },
  addNeighborhoodWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "25%",
    transform: "translate(-50%, -25%)",
  },
  addNeighborhoodInput: {
    marginTop: "32px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "32px",
    },
  },
});

export default styles;
