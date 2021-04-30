
const styles = theme => ({
  // Neighborhood Card Styles
  root: {
    backgroundColor: "#ffffff",
    backgroundImage:  props => `url(http://www.nomadville.xyz/api/nbdata/static/city-img/${props.image}.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "24px",
    margin: "0 4px",
    width: "225px",
    height: "150px",
    cursor: "pointer",
    marginBottom: "1em",
    [theme.breakpoints.down('xs')]: {
      width: "185px",
      height: "126px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('md')]: {
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('lg')]: {
      // width: "257px",
      // height: "171px",
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "325px",
      height: "200px",
    },
  },
  heartContainer: {
    zIndex: 10,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  heartIcon: {
    height: "22px",
    width: "22px",
    margin: "13px 12px 0 0",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      height: "18px",
      width: "18px",
      margin: "10px 9px 0 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "22px",
      width: "22px",
      margin: "13px 12px 0 0",
    },
    [theme.breakpoints.up('md')]: {
      height: "22px",
      width: "22px",
      margin: "13px 12px 0 0",
    },
    [theme.breakpoints.up('lg')]: {
      // height: "24px",
      // width: "24px",
      // margin: "16px 15px 0 0",
      height: "22px",
      width: "22px",
      margin: "13px 12px 0 0",
    },
    [theme.breakpoints.up('xl')]: {
      height: "28px",
      width: "28px",
      margin: "20px 28px 0 0",
    },
  },
  title: {
    padding: "1em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "600",
    textShadow: "0 2px 9px #303339",
    textAlign: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
    [theme.breakpoints.down('xs')]: {
      padding: "1 0 0.5em 0",
      fontSize: 15,
    },
    [theme.breakpoints.between('xs, sm')]: {
      padding: "1em",
      fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
      padding: "1em",
      fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
      padding: "1em",
      // fontSize: 20,
      fontSize: 18,
    },
    [theme.breakpoints.up('xl')]: {
      padding: "1.5em 1em 1em 1em",
      fontSize: 22,
    },
  },
  scoreValue: {
    color: "#FFF",
    fontSize: 11,
    fontFamily: "Poppins",
    fontWeight: "600",
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 11,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 11,
    },
    [theme.breakpoints.up('lg')]: {
      // fontSize: 12,
      fontSize: 11,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 14,
    },
  },
  scoreContainer: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#575ff9",
    opacity: 0.9,
    boxShadow: "0 3px 7px 0 rgba(148, 95, 233, 0.71)",
    margin: "8px 12px",
    [theme.breakpoints.down('xs')]: {
      width: "28px",
      height: "28px",
      margin: "8px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "30px",
      height: "30px",
      margin: "8px 12px",
    },
    [theme.breakpoints.up('md')]: {
      width: "30px",
      height: "30px",
      margin: "8px 12px",
    },
    [theme.breakpoints.up('lg')]: {
      // width: "35px",
      // height: "35px",
      // margin: "12px",
      width: "30px",
      height: "30px",
      margin: "8px 12px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "38px",
      height: "38px",
      margin: "12px",
    },
  },
  scoreContainerFav: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0061",
    opacity: 0.9,
    boxShadow: "0 3px 7px 0 rgba(250, 2, 98, 0.7)",
    margin: "8px 12px",
    [theme.breakpoints.down('xs')]: {
      width: "28px",
      height: "28px",
      margin: "8px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "30px",
      height: "30px",
      margin: "8px 12px",
    },
    [theme.breakpoints.up('md')]: {
      width: "30px",
      height: "30px",
      margin: "8px 12px",
    },
    [theme.breakpoints.up('lg')]: {
      // width: "35px",
      // height: "35px",
      // margin: "12px",
      width: "30px",
      height: "30px",
      margin: "8px 12px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "38px",
      height: "38px",
      margin: "12px",
    },
  },

  //BACK SIDE CSS
  backSideRoot: {
    backgroundColor: "#ffffff",
    width: "225px",
    cursor: "pointer",
    height: "150px",
    margin: "0 4px",
    borderRadius: "24px",
    marginBottom: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      width: "185px",
      height: "126px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('md')]: {
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('lg')]: {
      // width: "257px",
      // height: "171px",
      width: "225px",
      height: "150px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "325px",
      height: "200px",
    },
  },
  backSideHeart: {
    width: "56px",
    height: "52px",
    margin: "8px 0 4px",
    [theme.breakpoints.down('xs')]: {
      width: "42px",
      height: "38px",
      margin: "4px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "56px",
      height: "52px",
      margin: "8px 0 4px",
    },
    [theme.breakpoints.up('md')]: {
      width: "56px",
      height: "52px",
      margin: "8px 0 4px",
    },
    [theme.breakpoints.up('lg')]: {
      // width: "64",
      // height: "60",
      // margin: "10px 40.8px 4px 39.8px",
      width: "56px",
      height: "52px",
      margin: "8px 0 4px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "68px",
      height: "64px",
      margin: "12px 0 6px 0",
    },
  },
  backSideTitle: {
    margin: "4px 0 2px",
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.06,
    letterSpacing: "normal",
    textAlign: "center",
    color: "#323643",
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,
      margin: "2px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 13,
      margin: "4px 0 2px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 13,
      margin: "4px 0 2px",
    },
    [theme.breakpoints.up('lg')]: {
      // fontSize: 14.2,
      // margin: "4px 27.8px 2px 27.3px",
      fontSize: 13,
      margin: "4px 0 2px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
      margin: "6px 0 4px 0",
    },
  },
  backSideDesc: {
    margin: "2px 0 12px",
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.18,
    letterSpacing: "normal",
    textAlign: "center",
    color: "#323643",
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      margin: "2px 0 8px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 11,
      margin: "2px 0 12px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 11,
      margin: "2px 0 12px",
    },
    [theme.breakpoints.up('lg')]: {
      // fontSize: 12.7,
      // margin: "2px 0 14px",
      fontSize: 11,
      margin: "2px 0 12px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 14.2,
      margin: "4px 0 16px",
    },
  },
  backSideDetail: {
    margin: "12px 0 6px",
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 0.87,
    letterSpacing: "normal",
    textAlign: "center",
    color: "#323643",
    textDecoration: "underline",
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      margin: "8px 0 4px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 11,
      margin: "12px 0 6px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 11,
      margin: "12px 0 6px",
    },
    [theme.breakpoints.up('lg')]: {
      // fontSize: 12.7,
      // margin: "14px 0 9px",
      fontSize: 11,
      margin: "12px 0 6px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 14.2,
      margin: "18px 0 12px",
    },
  }
});

export default styles;
