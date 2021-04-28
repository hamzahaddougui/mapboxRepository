const styles = (theme) => ({
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
    height: "78px",
    width: "58px",
    position: "absolute",
    bottom: "18px",
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down('xs')]: {
      height: "68px",
      width: "56px",
      bottom: "24px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "78px",
      width: "58px",
    },
    [theme.breakpoints.up('md')]: {
      height: "104px",
      width: "70px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "104px",
      width: "70px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "104px",
      width: "70px",
    },
  },
  navigation: {
    color: "#323643",
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 14.2,
    textTransform: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
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
    margin: "0 2px 0 0",
    opacity: 0.57,
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      margin: "0 1px 0 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 11.3,
      margin: "0 2px 0 0",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 11.3,
      margin: "0 2px 0 0",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 11.3,
      margin: "0 2px 0 0",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 13,
      margin: "0 2px 0 0",
    },
  },
  brandName: {
    fontFamily: "Poppins",
    fontSize: 11.3,
    fontWeight: 500,
    color: "#323643",
    margin: "0 0 0 2px",
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      margin: "0 0 0 1px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 11.3,
      margin: "0 0 0 2px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 11.3,
      margin: "0 0 0 2px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 11.3,
      margin: "0 0 0 2px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 13,
      margin: "0 0 0 2px",
    },
  },
});

export default styles;
