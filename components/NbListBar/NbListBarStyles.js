const styles = theme => ({
  // Neighborhood List Bar Styles
  root: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
    padding: "4px 0",
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: "2",
    paddingBottom: "70px",
    "& .menu-wrapper": {
      width: "100% !important",
      overflowX: "scroll !important",
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: "80px",
    },
  },
});

export default styles;
