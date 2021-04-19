const styles = () => ({
  root: {
    height: "65px",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 6px 10px 0 rgba(14,31,53,0.12), 0 12px 18px 0 rgba(14,31,53,0.20), 0 20px 40px -1px rgba(14,31,53,0.12)",
    position: "fixed",
    bottom: "0%",
    right: "0%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeMatcher: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    cursor: "pointer",
  },
  homeMatcherIcon: {
    height: "104px",
    width: "70px",
    position: "absolute",
    bottom: "18px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  navigation: {
    color: "#323643",
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 16.02,
    textTransform: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  brand: {
    position: "absolute",
    right: "21px",
    display: "flex",
    alignItems: "center",
  },
  poweredBy: {
    fontFamily: "Poppins", 
    fontSize: 11.3, 
    fontWeight: "300", 
    color: "#323643",
    margin: "0 3px 0 0",
    opacity: 0.57
  },
  brandName: {
    fontFamily: "Poppins",
    fontSize: 11.3,
    fontWeight: 500,
    color: "#323643",
    margin: "0 0 0 3px"
  },
});

export default styles;
