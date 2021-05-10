const styles = theme => ({
  root: {
    backgroundColor: "#FFF",
    height: "100vh",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: "0px",
    left: "0px",
    zIndex: "2",
    overflowX: "hidden",
    // display: props => (props.open ? "block" : "none"),
  },
  jumbo: {
    background: "url(/map_head.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "22%",
    margin: "0 auto",
    padding: "20px",
    [theme.breakpoints.down('xs')]: {
      height: "16%",
    },
  },
  header: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },

  upperTitle: {
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 25,
    color: "#323643",
    margin: "24px 0 8px 0",
    textAlign: "center",
    [theme.breakpoints.down('xs')]: {
      fontSize: 21,
      margin: "24px 0 6px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 25,
      margin: "24px 0 8px 0",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 25,
      margin: "24px 0 8px 0",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 25,
      margin: "24px 0 8px 0",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 30,
      margin: "24px 0 10px 0",
    },
  },

  title: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 25,
    color: "#323643",
    // fontWeight: "600",
    margin: "0 0 4px 0",
    textAlign: "center",
    [theme.breakpoints.down('xs')]: {
      fontSize: 21,
      margin: "0 0 2px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 25,
      margin: "0 0 4px 0",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 25,
      margin: "0 0 4px 0",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 25,
      margin: "0 0 4px 0",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 30,
      margin: "0 0 6px 0",
    },
  },

  subtitle: {
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 16.02,
    color: "#323643",
    margin: "0 0 24px 0 ",
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      margin: "0 0 18px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 16.02,
      margin: "0 0 24px 0 ",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
      margin: "0 0 24px 0 ",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
      margin: "0 0 24px 0 ",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
      margin: "0 0 28px 0",
    },
  },
  form: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 2em",
    [theme.breakpoints.down('xs')]: {
      padding: "0 2em",
    },
    [theme.breakpoints.down('443')]: {
      padding: "4em 2em 2em 2em",
    },
  },
});

export default styles;
