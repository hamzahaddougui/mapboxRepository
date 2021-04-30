const styles = () => ({
  // FavoriteListBar Styles
  root: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100vw",
    // marginLeft: "21px",
    paddingLeft: "21px",
    "& .menu-item-wrapper": {
      verticalAlign: "top",
      marginTop: "1em",
    },
    "& .menu-wrapper": {
      width: "100%",
      overflowX: "auto !important",
    },
  },
});

export default styles;
