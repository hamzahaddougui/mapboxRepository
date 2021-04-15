const styles = () => ({
  root: {
    height: "65px",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 6px 10px 0 rgba(14,31,53,0.12), 0 12px 18px 0 rgba(14,31,53,0.20), 0 20px 40px -1px rgba(14,31,53,0.12)",
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  clickWrapper: {
    cursor: "pointer",
  },
  button: {
    color: "#323643",
    textDecoration: "none",
    cursor: "pointe",
    padding: "8px 45px",
  },
  nMatcherIcon: {
    height: "104px",
    width: "70px",
    position: "absolute",
    bottom: "39px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  navigation: {
    fontFamily: "Poppins", 
    fontSize: 16.02, 
    fontWeight: "300", 
    color: "#323643",
    cursor: "pointer",
  },

  poweredByWrapper: {
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
