const styles = theme => ({
  root: {
    backgroundColor: "#FFF",
    height: "100vh",
    width: "100vw",
    // position: "absolute",
    // top: "0px",
    // bottom: "0px",
    // right: "0px",
    // left: "0px",
    // zIndex: "2",
    // overflowX: "hidden",
    overflow: "hidden",
    // display: props => (props.open ? "block" : "none"),
  },
  contentContainer: {
    height: "calc( 100% - 65px )",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  headContainer: {
    position: "fixed",
    top: 0
  },
  titleContainer: {
    width: "100%",
  },
  groupsContainer: {
    width: "100%",
  },
  formContainer: {
    width: "100%",
    overflow: "scroll",
    // maxHeight: "200px",
    maxHeight: "380px",
    [theme.breakpoints.down('xs')]: {
      maxHeight: "370px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      // maxHeight: "200px",
      maxHeight: "380px",
    },
    [theme.breakpoints.up('md')]: {
      // maxHeight: "250px",
      maxHeight: "430px",
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: "510px",
    },
    [theme.breakpoints.up('xl')]: {
      maxHeight: "700px",
    },
  },

  headerWrapper: {
    height: "30%",
  },
  headerTitle: {
    height: "50%",
  },
  headerGroups: {
    height: "50%",
    padding: "16px 0",
    [theme.breakpoints.down('xs')]: {
      padding: "4px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      padding: "16px 0",
    },
    [theme.breakpoints.up('md')]: {
      padding: "16px 0",
    },
    [theme.breakpoints.up('lg')]: {
      padding: "16px 0",
    },
  },
  formWrapper: {
    height: "66%", 
    position: "relative", 
    overflowY: "scroll",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      height: "62%",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "66%",
    },
  },

  jumbo: {
    background: "url(/map_head.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "150px",
    margin: "0 auto -16px",
    padding: "20px",
  },
  header: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },

  title: {
    fontFamily:"Poppins",
    fontSize: 25,
    color: "#323643",
    fontWeight: "600",
    margin: "24px 0 14px 0",
    letterSpacing: 0,
    textAlign: "center",
    lineHeight: 1.04,
  },
  subtitle: {
    fontFamily:"Poppins",
    fontSize: 16.02,
    fontWeight: "300",
    color: "#323643",
    margin: "8px 0 24px 0 ",
    letterSpacing: "normal",
    lineHeight: 1.44,
  },
  form: {
    // overflow: "hidden",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default styles;
