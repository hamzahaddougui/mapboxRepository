const styles = theme => ({
  // Neighborhood Detail Styles
  root: {
    // height: "100%",
    height: "100vh",
    // width: "80vw",
    width: "85vw",
    position: "absolute",
    // justifyContent: "center",
    // alignItems: "center",
    left: "50%",
    // top: "45%",
    transform: "translate(-50%)",
    [theme.breakpoints.down('xs')]: {
      width: "92vw",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "85vw",
    },
    [theme.breakpoints.up('md')]: {
      width: "65vw",
    },
    [theme.breakpoints.up('lg')]: {
      width: "65vw",
    },
    [theme.breakpoints.up('xl')]: {
      width: "65vw",
    },
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
    height: "38px",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0 0 32px 32px",
    padding: "0 2em",
    [theme.breakpoints.down('xs')]: {
      height: "36px",
      borderRadius: "0 0 28px 28px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "38px",
    },
    [theme.breakpoints.up('md')]: {
      height: "41px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "41px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "41px",
    },
  },
  titleTxt: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: 500,
    textAlign: "center",
    textTransform: "Capitalize",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18.02,
    },
  },
  scoreBall: {
    width: "58px",
    height: "33px",
    backgroundColor: "#FFF",
    border: "0 solid rgba(255,255,255,0.25)",
    boxShadow: "0 3px 7px 0 rgba(148,95,233,0.35)",
    borderRadius: "20.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1em",
    // position: "absolute",
    [theme.breakpoints.down('xs')]: {
      width: "48px",
      height: "28px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "58px",
      height: "33px",
    },
    [theme.breakpoints.up('md')]: {
      width: "71px",
      height: "41px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "71px",
      height: "41px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "71px",
      height: "41px",
    },
  },
  scoreBallIcon:{
    height: "14px",
    width: "10px",
    marginRight: "2px",
    [theme.breakpoints.down('xs')]: {
      height: "12px",
      width: "8px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "14px",
      width: "10px",
    },
    [theme.breakpoints.up('md')]: {
      height: "16px",
      width: "12px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "16px",
      width: "12px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "16px",
      width: "12px",
    },
  },
  score: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: "#575FF9",
    fontWeight: "600",
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 13,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18.02,
    },
  },

  navigation: {
    backgroundColor: "#FFF",
    // width: "100%",
    height: "50px",
    // height: "7%",
    overflow: "hidden",
    // position: "relative",
    // marginBottom: "1em",
    [theme.breakpoints.down('xs')]: {
      height: "45px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "50px",
    },
    [theme.breakpoints.up('md')]: {
      height: "60px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "60px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "70px",
    },
  },
  container: {
    display: "grid",
    gridGap: "4px",
    gridAutoColumns: "160px",
    gridTemplateRows: "100%",
    gridAutoFlow: "column",
    overflowX: "scroll",
    overflowY: "hidden",
    scrollSnapType: "x proximity",
    [theme.breakpoints.up('xl')]: {
      gridAutoColumns: "230px",
    },
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
    fontSize: 13.5,
    fontWeight: "300",
    textTransform: "capitalize",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 13.5,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.24,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14.24,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
    },
  },
  categoryActive: {
    border: "1px solid #323643",
    borderRadius: "16px",
    backgroundColor: "#e3e6e3",
    padding: "3px 16px",
    fontFamily: "Poppins",
    fontSize: 13.5,
    fontWeight: "500",
    textTransform: "capitalize",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 13.5,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.24,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14.24,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
    },
  },
  leftArrowContainer: {
    backgroundColor: "#FFF", 
    opacity: 0.9, 
    width: "6%", 
    height: "50px",
    position: "absolute", 
    right: 0, 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      height: "45px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "50px",
    },
    [theme.breakpoints.up('md')]: {
      height: "60px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "60px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "70px",
    },
  },

  table: {
    width: "100%",
    // height: "calc(100vh - 700px)",
    height: "calc( 100% - calc( 50% + 50px ))",
    overflowX: "hidden",
    overflowY: "scroll",
    backgroundColor: "#FFF",
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderTopColor: "#e7e7e7",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    [theme.breakpoints.down('xs')]: {
      height: "calc( 100% - calc( 50% + 45px ))",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "calc( 100% - calc( 50% + 50px))",
    },
    [theme.breakpoints.up('md')]: {
      height: "calc( 100% - calc( 50% + 60px))",
    },
    [theme.breakpoints.up('lg')]: {
      height: "calc( 100% - calc( 50% + 60px))",
    },
    [theme.breakpoints.up('xl')]: {
      height: "calc( 100% - calc( 50% + 70px))",
    },
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
    [theme.breakpoints.down('xs')]: {
      borderInlineEndColor: "#e7e7e7",
      borderInlineEndWidth: "1px",
      borderInlineEndStyle: "none",
    },
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
      [theme.breakpoints.down('xs')]: {
        borderBottomColor: "#e7e7e7",
        borderBottomWidth: "1px",
        borderBottomStyle: "none",
      },
      // width: "100%",
    },
    maxHeight: "50px",
    width: "50%",
    [theme.breakpoints.down('xs')]: {
      width: "100% !important",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "100%",
    },
    [theme.breakpoints.up('md')]: {
      width: "50%",
    },
    [theme.breakpoints.up('lg')]: {
      width: "50%",
    },
    [theme.breakpoints.up('xl')]: {
      width: "50%",
    },
  },
  filterName: {
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: 400,
    // maxWidth: "10em",
    maxWidth: "50%",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 13,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.24,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14.24,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
    },
  },
  iconsContainer: {
    // backgroundColor: "#FFF",
    height: "68px",
    alignItems: "center",
  },
  iconsWrapper:{
    height: "80%",
    alignItems: "center",
  },
  clearWrapper: {
    backgroundColor: "white",
    height: "62px",
    width: "62px",
    color: "#575FF9",
    boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
    "&:hover": {
      backgroundColor: "#FFF",
    },
    [theme.breakpoints.down('xs')]: {
      height: "56px",
      width: "56px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "62px",
      width: "62px",
    },
    [theme.breakpoints.up('md')]: {
      height: "68px",
      width: "68px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "68px",
      width: "68px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "82px",
      width: "82px",
    },
  },
  bigIcon: {
    fontSize: 34,
    "&:hover": {
      fontSize: 36,
      transition: "ease 0.2s",
      [theme.breakpoints.down('xs')]: {
        fontSize: 34,
      },
      [theme.breakpoints.between('xs, sm')]: {
        fontSize: 36,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 40,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 40,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 44,
      },
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 34,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 38,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 38,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 42,
    },
  },
  redoWrapper: {
    backgroundColor: "white",
    height: "46px",
    width: "46px",
    color: "#323643",
    boxShadow: "0 4px 8px 0 rgb(14 31 53 / 16%)",
    "&:hover": {
      backgroundColor: "#FFF",
    },
    [theme.breakpoints.down('xs')]: {
      height: "42px",
      width: "42px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "46px",
      width: "46px",
    },
    [theme.breakpoints.up('md')]: {
      height: "48px",
      width: "48px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "48px",
      width: "48px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "56px",
      width: "56px",
    },
  },
  smallIcon: {
    fontSize: 22,
    "&:hover": {
      fontSize: 24,
      transition: "ease 0.2s",
      [theme.breakpoints.down('xs')]: {
        fontSize: 23,
      },
      [theme.breakpoints.between('xs, sm')]: {
        fontSize: 24,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 26,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 26,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 28,
      },
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 21,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 22,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 28,
    },
  },
  favoriteWrapper: {
    backgroundColor: "white",
    height: "62px",
    width: "62px",
    color: "#FF0061",
    boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
    "&:hover": {
      backgroundColor: "#FFF",
    },
    [theme.breakpoints.down('xs')]: {
      height: "56px",
      width: "56px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "62px",
      width: "62px",
    },
    [theme.breakpoints.up('md')]: {
      height: "68px",
      width: "68px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "68px",
      width: "68px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "82px",
      width: "82px",
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
    height: "19px",
    width: "95px",
    backgroundColor: "#e7e7e7",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      height: "18px",
      width: "95px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "19px",
      width: "102px",
    },
    [theme.breakpoints.up('md')]: {
      height: "20px",
      width: "125px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "20px",
      width: "129px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "20px",
      width: "129px",
    },
  },
  progressTxt: {
    fontFamily: "Poppins",
    fontSize: 13.5,
    fontWeight: 600,
    color: "#FFF",
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 13.5,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.24,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14.24,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
    },
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
