const styles = theme => ({
  root: {
    height: "100vh",
    // overflow: "hidden",
  },
  jumbo: {
    width: "100%",
    height: "30%",
    margin: "0 auto",
    position: "fixed",
    backgroundColor: "#fff",
    [theme.breakpoints.down('xs')]: {
      height: "30%",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "40%",
    },
    [theme.breakpoints.up('md')]: {
      height: "40%",
    },
    [theme.breakpoints.up('lg')]: {
      height: "40%",
    },
    [theme.breakpoints.up('xl')]: {
      height: "40%",
    },
  },
  signUpContent: {
    height: "70%",
    // overflowX: "hidden",
    // overflowY: "scroll",
    // overflow: "scroll",
    position: "relative",
    marginTop: "calc(100vh * 0.4)",
    [theme.breakpoints.down('xs')]: {
      marginTop: "calc(100vh * 0.33)",
      height: "70%",
    },
    [theme.breakpoints.between('xs, sm')]: {
      marginTop: "calc(100vh * 0.4)",
      height: "60%",
    },
    [theme.breakpoints.up('md')]: {
      marginTop: "calc(100vh * 0.4)",
      height: "60%",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: "calc(100vh * 0.4)",
      height: "60%",
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: "calc(100vh * 0.4)",
      height: "60%",
    },
    
  },
  wrapper: {
    position: "absolute",
    // overflowX: "hidden",
    // overflowY: "scroll",
    overflow: "scroll",
    // paddingTop: "22em",
    // paddingBottom: "11em",
    width: "100%",
    height: "100%",
    paddingBottom: "7em",
  },
});

export default styles;
