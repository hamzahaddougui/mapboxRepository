
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
    width: "257px",
    height: "171px",
    cursor: "pointer",
    marginBottom: "1em",
    [theme.breakpoints.down('xs')]: {
      width: "185px",
      height: "126px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "257px",
      height: "171px",
    },
    [theme.breakpoints.up('md')]: {
      width: "257px",
      height: "171px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "257px",
      height: "171px",
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
    height: "24px",
    width: "24px",
    margin: "16px 15px 0 0",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      height: "18px",
      width: "18px",
      margin: "10px 9px 0 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "24px",
      width: "24px",
      margin: "16px 15px 0 0",
    },
    [theme.breakpoints.up('md')]: {
      height: "24px",
      width: "24px",
      margin: "16px 15px 0 0",
    },
    [theme.breakpoints.up('lg')]: {
      height: "24px",
      width: "24px",
      margin: "16px 15px 0 0",
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
    fontSize: 20,
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
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      padding: "1em",
      fontSize: 20,
    },
    [theme.breakpoints.up('lg')]: {
      padding: "1em",
      fontSize: 20,
    },
    [theme.breakpoints.up('xl')]: {
      padding: "1.5em 1em 1em 1em",
      fontSize: 22,
    },
  },
  scoreValue: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "600",
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 12,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 14,
    },
  },
  scoreContainer: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#575ff9",
    opacity: 0.9,
    boxShadow: "0 3px 7px 0 rgba(148, 95, 233, 0.71)",
    margin: "12px",
    [theme.breakpoints.down('xs')]: {
      width: "28px",
      height: "28px",
      margin: "8px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "35px",
      height: "35px",
      margin: "12px",
    },
    [theme.breakpoints.up('md')]: {
      width: "35px",
      height: "35px",
      margin: "12px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "35px",
      height: "35px",
      margin: "12px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "38px",
      height: "38px",
      margin: "12px",
    },
  },
  scoreContainerFav: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0061",
    opacity: 0.9,
    boxShadow: "0 3px 7px 0 rgba(250, 2, 98, 0.7)",
    margin: "12px",
    [theme.breakpoints.down('xs')]: {
      width: "28px",
      height: "28px",
      margin: "8px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "35px",
      height: "35px",
      margin: "12px",
    },
    [theme.breakpoints.up('md')]: {
      width: "35px",
      height: "35px",
      margin: "12px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "35px",
      height: "35px",
      margin: "12px",
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
    width: "257px",
    cursor: "pointer",
    height: "171px",
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
      width: "257px",
      height: "171px",
    },
    [theme.breakpoints.up('md')]: {
      width: "257px",
      height: "171px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "257px",
      height: "171px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "325px",
      height: "200px",
    },
  },
  backSideHeart: {
    width: "64",
    height: "60",
    margin: "10px 40.8px 4px 39.8px",
    [theme.breakpoints.down('xs')]: {
      width: "42px",
      height: "38px",
      margin: "4px 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "64",
      height: "60",
      margin: "10px 40.8px 4px 39.8px",
    },
    [theme.breakpoints.up('md')]: {
      width: "64",
      height: "60",
      margin: "10px 40.8px 4px 39.8px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "64",
      height: "60",
      margin: "10px 40.8px 4px 39.8px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "68px",
      height: "64px",
      margin: "12px 0 6px 0",
    },
  },
  backSideTitle: {
    margin: "4px 27.8px 2px 27.3px",
    fontFamily: "Poppins",
    fontSize: 14.2,
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
      fontSize: 14.2,
      margin: "4px 27.8px 2px 27.3px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14.2,
      margin: "4px 27.8px 2px 27.3px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14.2,
      margin: "4px 27.8px 2px 27.3px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16.02,
      margin: "6px 0 4px 0",
    },
  },
  backSideDesc: {
    margin: "2px 0 14px",
    fontFamily: "Poppins",
    fontSize: 12.7,
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
      fontSize: 12.7,
      margin: "2px 0 14px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 12.7,
      margin: "2px 0 14px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 12.7,
      margin: "2px 0 14px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 14.2,
      margin: "4px 0 16px",
    },
  },
  backSideDetail: {
    margin: "14px 0 9px",
    fontFamily: "Poppins",
    fontSize: 12.7,
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
      fontSize: 12.7,
      margin: "14px 0 9px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 12.7,
      margin: "14px 0 9px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 12.7,
      margin: "14px 0 9px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 14.2,
      margin: "18px 0 12px",
    },
  }
});

export default styles;
