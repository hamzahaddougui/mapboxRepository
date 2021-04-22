const styles = theme => ({
  // Neighborhood Detail Styles
  root: {
    // height: "100%",
    height: "100vh",
    width: "80vw",
    position: "absolute",
    // justifyContent: "center",
    // alignItems: "center",
    left: "50%",
    // top: "45%",
    transform: "translate(-50%)",
  },
  paper: {
    // backgroundColor: "#FFF",
    // marginBottom: "2em",
    
    // paddingBottom: "1em",
    height: "92%",
    // overflow: "hidden"
  },

  imgSlider: {
    width: "100%",
    // height: "400px",
    height: "50%",
    backgroundColor: "#FFF",
    backgroundImage: props => `url(http://www.nomadville.xyz/api/nbdata/static/city-img/${props.image}.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // borderRadius: "24px 24px 0 0",
    // position: "relative",
  },
  title: {
    // width: "153px",
    height: "41px",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0 0 34px 34px",
    padding: "0 2em",
  },
  titleTxt: {
    fontFamily: "Poppins",
    fontSize: 16.02,
    fontWeight: 500,
    textAlign: "center",
    textTransform: "Capitalize",
  },
  scoreBall: {
    width: "71px",
    height: "41px",
    backgroundColor: "#FFF",
    border: "0 solid rgba(255,255,255,0.25)",
    boxShadow: "0 3px 7px 0 rgba(148,95,233,0.35)",
    borderRadius: "20.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1em",
    // position: "absolute",
  },
  scoreBallIcon:{
    height: "16px",
    width: "12px",
    marginRight: "2px",
  },
  score: {
    fontFamily: "Poppins",
    fontSize: 16.02,
    color: "#575FF9",
    fontWeight: "600",
  },

  navigation: {
    backgroundColor: "#FFF",
    width: "100%",
    // height: "60px",
    height: "7%",
    overflowX: "scroll",
    // position: "relative",
    // marginBottom: "1em",
  },
  container: {
    display: "grid",
    gridGap: "4px",
    gridAutoColumns: "160px",
    gridTemplateRows: "100%",
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
    // marginRight: "8px"
  },
  category: {
    fontFamily: "Poppins",
    fontSize: 14.24,
    fontWeight: "300",
    textTransform: "capitalize",
    cursor: "pointer",
  },
  categoryActive: {
    border: "1px solid #323643",
    borderRadius: "16px",
    backgroundColor: "#e3e6e3",
    padding: "3px 16px",
    fontFamily: "Poppins",
    fontSize: 14.24,
    fontWeight: "500",
    textTransform: "capitalize",
    cursor: "pointer",
  },

  table: {
    width: "100%",
    // height: "calc(100vh - 700px)",
    height: "43%",
    overflowX: "hidden",
    overflowY: "scroll",
    backgroundColor: "#FFF",
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderTopColor: "#e7e7e7",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
  },
  itemContainer: {
    padding: "0.5em 0.5em 0.5em 1.5em !important",
    // borderInlineStartColor: "#e7e7e7",
    // borderInlineStartWidth: "1px",
    // borderInlineStartStyle: "solid",
    borderTopColor: "#e7e7e7",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    // borderInlineEndColor: "#e7e7e7",
    // borderInlineEndWidth: "1px",
    // borderInlineEndStyle: "solid",
    // borderBottomColor: "#e7e7e7",
    // borderBottomWidth: "1px",
    // borderBottomStyle: "solid",
    '&:nth-child(odd)': {
      // border: '1px solid #979797',
    borderInlineEndColor: "#e7e7e7",
    borderInlineEndWidth: "1px",
    borderInlineEndStyle: "solid",
    // width: "100%",
    },
    '&:last-child': {
        // border: '1px solid #979797',
      borderBottomColor: "#e7e7e7",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      // width: "100%",
    },
    // '&:last-child :last-child(odd)': {
    //   // border: '1px solid #979797',
    //   borderInlineEndColor: "#e7e7e7",
    //   borderInlineEndWidth: "1px",
    //   borderInlineEndStyle: "solid",
    // },
    '&:nth-last-child(2)': {
      borderBottomColor: "#e7e7e7",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      // width: "100%",
    },
    maxHeight: "50px",
    width: "50%",
  },
  filterName: {
    fontFamily: "Poppins",
    fontSize: 14.24,
    fontWeight: 400,
    // maxWidth: "10em",
  },
  iconsContainer: {
    // backgroundColor: "#FFF",
    height: "68px",
    alignItems: "center",
  },
  clearWrapper: {
    backgroundColor: "white",
    height: "68px",
    width: "68px",
    color: "#575FF9",
    boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },
  bigIcon: {
    fontSize: "38px",
    "&:hover": {
      fontSize: "40px",
      transition: "linear 0.2s"
    },
  },
  redoWrapper: {
    backgroundColor: "white",
    height: "48px",
    width: "48px",
    color: "#323643",
    boxShadow: "0 4px 8px 0 rgb(14 31 53 / 16%)",
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },
  smallIcon: {
    fontSize: "24px",
    "&:hover": {
      fontSize: "26px",
      transition: "linear 0.2s"
    },
  },
  favoriteWrapper: {
    backgroundColor: "white",
    height: "68px",
    width: "68px",
    color: "#FF0061",
    boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
    "&:hover": {
      backgroundColor: "#FFF",
    },
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#575FF9",
    // position: "relative",
    position: "absolute",
  },
  progressContainer: {
    margin: "0.5em 1em 0.5em 0em",
    height: "20px",
    width: "129px",
    backgroundColor: "#e7e7e7",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative"
  },
  progressTxt: {
    fontFamily: "Poppins",
    fontSize: 14.24,
    fontWeight: 600,
    color: "#FFF",
    position: "relative"
    // position: "absolute"
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
