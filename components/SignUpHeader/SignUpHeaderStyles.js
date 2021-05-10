const styles = (theme) => ({
  background: {
    backgroundColor: "#fff",
    backgroundImage: "url(/map_head.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "30%",
    position: "fixed",
    zIndex: -1,
    top: 0,
    [theme.breakpoints.down('xs')]: {
      height: "25%",
    },
  },
  backContainer: {
    position: "absolute",
    display: "inline-flex",
    margin: "8px",
    cursor: "pointer",
    padding: "1em",
    zIndex: 2,
  },
  backIcon: {
    width: "24px",
    height: "24px",
    display: "inline-flex",
    float: "left",
    alignItems: "center",
    marginRight: "4px",
  },
  backText: {
    display: "inline-flex",
    float: "left",
    alignItems: "center",
    margin: 0,
    fontFamily: "Poppins",
    fontSize: 12,
    color: "#323643",
  },

  header: {
    position: "relative",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  headerTitle: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 22,
    fontWeight: "600",
    margin: "24px 0 6px 0",
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
      margin: "24px 0 4px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 22,
      margin: "24px 0 6px 0",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 22,
      margin: "24px 0 6px 0",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
      margin: "24px 0 6px 0",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 26,
      margin: "24px 0 8px 0",
    },
  },
  headerDesc: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "300",
    margin: "0 0 8px 0",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
      margin: "0 0 8px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 14.2,
      margin: "0 0 8px 0",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.2,
      margin: "0 0 12px 0",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14.2,
      margin: "0 0 12px 0",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
      margin: "0 0 16px 0",
    },
  },
});

export default styles;
