
const styles = theme => ({

  // Matcher Footer Styles
  signInButton: {
    position: "relative",
    bottom: "65px",
    padding: "10px 22px",
    margin: "0 0 18px 21px",
    backgroundColor: "#FFF",
    border: "solid 1px rgba(50, 54, 67, 0.16)",
    borderRadius: "27px",
    textTransform: "none",
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 300,
    color: "#323643",
    "&:hover": {
      backgroundColor: "#FFF",
    },
    [theme.breakpoints.down('xs')]: {
      padding: "8px 18px",
      margin: "0 0 18px 21px",
      fontSize: 11,
    },
    [theme.breakpoints.between('xs, sm')]: {
      padding: "10px 22px",
      margin: "0 0 18px 21px",
      fontSize: 12,
    },
    [theme.breakpoints.up('md')]: {
      padding: "11px 26px",
      margin: "0 0 18px 21px",
      fontSize: 13,
    },
    [theme.breakpoints.up('lg')]: {
      padding: "12px 30px",
      margin: "0 0 18px 21px",
      fontSize: 13.5,
    },
    [theme.breakpoints.up('xl')]: {
      padding: "12px 30px",
      margin: "0 0 18px 21px",
      fontSize: 14.3,
    },
  },
  matchButton: {
    height: "45px",
    border: "1px solid #979797",
    backgroundColor: "transparent",
    padding: "10px 40px",
    borderRadius: "22.5px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down('xs')]: {
      height: "36px",
      padding: "8px 26px",
      borderRadius: "22.5px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "45px",
      padding: "10px 40px",
      borderRadius: "22.5px",
    },
    [theme.breakpoints.up('md')]: {
      height: "45px",
      padding: "10px 40px",
      borderRadius: "22.5px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "45px",
      padding: "10px 40px",
      borderRadius: "22.5px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "48px",
      padding: "12px 46px",
      borderRadius: "32px",
    },
  },
  matchButtonTxt: {
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 16.02,
    color: "#323643",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
    },
  },
  nMatcher: {
    height: "78px",
    width: "58px",
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down('xs')]: {
      height: "68px",
      width: "56px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "78px",
      width: "58px",
    },
    [theme.breakpoints.up('md')]: {
      height: "104px",
      width: "70px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "104px",
      width: "70px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "104px",
      width: "70px",
    },
  },
  restartMatcherButton: {
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 14.2,
    color: "#323643",
    textTransform: "none",
    position: "relative",
    // padding: "8px 45px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
    },
  },
  poweredBy: {
    fontFamily: "Poppins", 
    fontSize: 11.3, 
    fontWeight: "300", 
    color: "#323643",
    margin: "0 2px 0 0",
    opacity: 0.57,
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      margin: "0 1px 0 0",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 11.3,
      margin: "0 2px 0 0",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 11.3,
      margin: "0 2px 0 0",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 11.3,
      margin: "0 2px 0 0",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 13,
      margin: "0 2px 0 0",
    },
  },
  brandName: {
    fontFamily: "Poppins",
    fontSize: 11.3,
    fontWeight: 500,
    color: "#323643",
    margin: "0 0 0 2px",
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      margin: "0 0 0 1px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 11.3,
      margin: "0 0 0 2px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 11.3,
      margin: "0 0 0 2px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 11.3,
      margin: "0 0 0 2px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 13,
      margin: "0 0 0 2px",
    },
  },
  rMatcherButtonIcon: {
    marginRight: "5px",
    width: "14px",
    height: "12px",
  },
  bottomBox: {
    height: "65px",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 6px 10px 0 rgba(14, 31, 53, 0.12), 0 12px 18px 0 rgba(14, 31, 53, 0.2), 0 20px 40px -1px rgba(14, 31, 53, 0.12)",
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4,
  },
  thunder: {
    height: "74px",
    width: "74px",
    position: "absolute",
    bottom: "80%",
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down('xs')]: {
      height: "52px",
      width: "52px",
      bottom: "72%",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "74px",
      width: "74px",
      bottom: "80%",
    },
    [theme.breakpoints.up('md')]: {
      height: "74px",
      width: "74px",
      bottom: "80%",
    },
    [theme.breakpoints.up('lg')]: {
      height: "74px",
      width: "74px",
      bottom: "80%",
    },
    [theme.breakpoints.up('xl')]: {
      height: "82px",
      width: "82px",
      bottom: "80%",
    },
  },
  logo: {
    marginLeft: "12px",
  },
  splitButton : {
    backgroundColor: "#323643",
    display: "inline-flex",
    padding: "4px",
    borderRadius: "24px",
    opacity: "77%",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    marginTop: "12px",
    zIndex: 2,
  },
  splitButtonView: {
    backgroundColor: "#323643",
    display: "inline-flex",
    padding: "4px",
    borderRadius: "24px",
    opacity: "77%",
    /* position: absolute;
    left: 50%;
    transform: translate(-50%); */
    marginTop: "12px",
    left: "37px",
    position: "relative",
    zIndex: 2,
  },
  splitButtonItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    float: "left",
    backgroundColor: "transparent",
    borderRadius: "24px",
    padding: "4px 24px",
    cursor: "pointer",
    color: "#fff",
    opacity: "50%",
  },
  splitButtonItemActive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f4f4",
    borderRadius: "24px",
    padding: "4px 24px",
    cursor: "pointer",
    color: "#323643",
  },
  dropDown: {
    backgroundColor: "#323643",
    height: "40px",
    width: "200px",
    display: "inline-flex",
    position: "absolute",
    marginTop: "12px",
    right: "37px",
    cursor: "pointer",
    zIndex: 2,
  },
  dropDownContent: {
    height: "calc(100vh - 15%)",
    width: "362px",
    backgroundColor: "#fff",
    position: "absolute",
    right: "37px",
    marginTop: "9px",
    paddingTop: "24px",
    overflow: "hidden",
    opacity: "90%",
    zIndex: 3,
  },
  dropDownItem: {
    display: "flex",
    marginLeft: "16%",
    alignItems: "center",
    color: "#000",
  },
  percentMatch: {
    display: "flex",
    marginLeft: "12%",
    alignItems: "center",
    color: "#fff",
  },
  navigation: {
    color: "#323643",
    textDecoration: "none",
    cursor: "pointer",
    padding: "8px 45px",
    /* padding-left : 20px; */
  },
  SwipeView: {
    backgroundColor: "#323643",
    opacity: 0.77,
  },
  leftGroupButtons: {
    backgroundColor: "thistle",
  },
  bottomNavigationButtons: {
    display: "inline-flex",
  },
  restartMatcher: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    left: "25%",
    bottom: "20%",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      left: "15%",
    },
    [theme.breakpoints.between('xs, sm')]: {
      left: "25%",
    },
    [theme.breakpoints.up('md')]: {
      left: "30%",
    },
    [theme.breakpoints.up('lg')]: {
      left: "30%",
    },
    [theme.breakpoints.up('xl')]: {
      left: "32%",
    },
  },
  homeMatcher: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    right: "25%",
    bottom: "20%",
    [theme.breakpoints.down('xs')]: {
      right: "15%",
    },
    [theme.breakpoints.between('xs, sm')]: {
      right: "25%",
    },
    [theme.breakpoints.up('md')]: {
      right: "30%",
    },
    [theme.breakpoints.up('lg')]: {
      right: "30%",
    },
    [theme.breakpoints.up('xl')]: {
      right: "32%",
    },
  },
  homeMatcherActive: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    right: "25%",
    bottom: "20%",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      right: "15%",
    },
    [theme.breakpoints.between('xs, sm')]: {
      right: "25%",
    },
    [theme.breakpoints.up('md')]: {
      right: "30%",
    },
    [theme.breakpoints.up('lg')]: {
      right: "30%",
    },
    [theme.breakpoints.up('xl')]: {
      right: "32%",
    },
  },
  homeMatcherThunderActive: {
    height: "66px",
    width: "64px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    bottom: "30px",
    zIndex: 2,
    transition: "ease 0.5s",
    [theme.breakpoints.down('xs')]: {
      height: "58px",
      width: "56px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "66px",
      width: "64px",
    },
    [theme.breakpoints.up('md')]: {
      height: "76px",
      width: "74px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "76px",
      width: "74px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "76px",
      width: "74px",
    },
  },
  homeMatcherThunder: {
    height: "60px",
    width: "58px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    bottom: "30px",
    zIndex: 2,
    transition: "ease 0.25s",
    [theme.breakpoints.down('xs')]: {
      height: "48px",
      width: "46px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "60px",
      width: "58px",
    },
    [theme.breakpoints.up('md')]: {
      height: "62px",
      width: "60px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "62px",
      width: "60px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "62px",
      width: "60px",
    },
  }
});

export default styles;
