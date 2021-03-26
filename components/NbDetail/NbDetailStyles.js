const styles = theme => ({
  // Neighborhood Detail Styles
  root: {
    height: "100%",
  },
  paper: {
    marginBottom: "2em",
    borderRadius: "24px",
    paddingBottom: "1em",
    height: "100%",
  },
  imgSlider: {
    width: "100%",
    height: "400px",
    backgroundImage: props => `url(${props.image})`,
    borderRadius: "24px 24px 0 0",
    position: "relative",
  },
  title: {
    width: "153px",
    height: "41px",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0 0 34px 34px",
  },
  titleTxt: {
    fontFamily: "Poppins",
    fontSize: 16.02,
    textAlign: "center",
    textTransform: "Capitalize",
  },
  scoreBall: {
    width: "71px",
    height: "41px",
    backgroundColor: "#FFF",
    borderRadius: "20.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1em",
    // position: "absolute",
  },
  score: {
    fontFamily: "Poppins",
    fontSize: 16.02,
    color: "#575FF9",
    fontWeight: "bold",
  },
  navigation: {
    width: "100%",
    height: "60px",
    position: "relative",
    marginBottom: "1em",
  },
  container: {
    display: "grid",
    gridGap: "4px",
    gridAutoColumns: "150px",
    gridTemplateRows: "60px",
    gridAutoFlow: "column",
    overflowX: "scroll",
    scrollSnapType: "x proximity",
  },
  navigationElement: {
    scrollSnapAlign: "center",
    padding: "2px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    /* background:coral; */
    borderRadius: "8px",
    textAlign: "center",
  },
  category: {
    fontSize: 14.24,
    cursor: "pointer",
  },
  categoryActive: {
    border: "1px solid #323643",
    borderRadius: "16px",
    backgroundColor: "#e3e6e3",
    padding: "3px 16px",
    fontSize: 14.24,
    fontWeight: "bold",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    height: "calc(100vh - 700px)",
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
  },
  itemContainer: {
    borderInlineStartColor: "#e7e7e7",
    borderInlineStartWidth: "1px",
    borderInlineStartStyle: "solid",
    borderTopColor: "#e7e7e7",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
  },
  filterName: {
    maxWidth: "10em",
  },
  iconsContainer: {
    alignItems: "center",
  },
  clearWrapper: {
    backgroundColor: "white",
    height: "68px",
    width: "68px",
    color: "#575FF9",
    boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
  },
  bigIcon: {
    fontSize: "38px",
  },
  redoWrapper: {
    backgroundColor: "white",
    height: "48px",
    width: "48px",
    color: "#323643",
    boxShadow: "0 4px 8px 0 rgb(14 31 53 / 16%)",
  },
  favoriteWrapper: {
    backgroundColor: "white",
    height: "68px",
    width: "68px",
    color: "#FF0061",
    boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#575FF9",
    position: "relative",
  },
  progressContainer: {
    margin: "0.5em 1em 0.5em 0em",
    height: "20px",
    width: "129px",
    backgroundColor: "#e7e7e7",
    borderRadius: "10px",
    overflow: "hidden",
  },
  progressTxt: {
    color: "#FFF",
  },

  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
      height: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
});

export default styles;
