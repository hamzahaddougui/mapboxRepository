const styles = () => ({
  root: {
    height: "74px",
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
    fontSize: 16.02,
    textTransform: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  brand: {
    position: "absolute",
    right: "4%",
    display: "flex",
    alignItems: "center",
  },
  poweredBy: {
    fontSize: "10px",
    color: "#323643",
    opacity: "57%",
  },
  logo: {
    marginLeft: "12px",
  },
});

export default styles;
