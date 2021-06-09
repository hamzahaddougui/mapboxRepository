const styles = (theme) => ({
  // FilterHeader Styles
  root: {
    marginBottom: "27px",
  },
  elementContainer: {
    maxWidth: "100px",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      maxWidth: "86px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      maxWidth: "100px",
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: "100px",
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: "100px",
    },
  },
  selectedIconContainer: {
    height: "62px",
    width: "62px",
    borderRadius: "50%",
    backgroundColor: "#323643",
    boxShadow: "0 2px 4px 0 rgba(50,54,67,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      height: "40px",
      width: "40px",
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
      // height: "74px",
      // width: "74px",
      height: "68px",
      width: "68px",
    },
  },
  selectedIcon:{
    height: "28px",
    width: "28px",
    [theme.breakpoints.down('xs')]: {
      height: "22px",
      width: "22px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "28px",
      width: "28px",
    },
    [theme.breakpoints.up('md')]: {
      height: "36px",
      width: "36px",
    },
    [theme.breakpoints.up('lg')]: {
      // height: "40px",
      // width: "40px",
      height: "36px",
      width: "36px",
    },
  },
  iconContainer: {
    height: "56px",
    width: "56px",
    borderRadius: "50%",
    backgroundColor: "#FFF",
    border: "1px solid #F2F4F4",
    boxShadow: "0 2px 4px 0 rgba(50,54,67,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      height: "38px",
      width: "38px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "56px",
      width: "56px",
    },
    [theme.breakpoints.up('md')]: {
      height: "62px",
      width: "62px",
    },
    [theme.breakpoints.up('lg')]: {
      // height: "68px",
      // width: "68px",
      height: "62px",
      width: "62px",
    },
  },
  icon: {
    height: "26px",
    width: "26px",
    [theme.breakpoints.down('xs')]: {
      height: "18px",
      width: "18px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "26px",
      width: "26px",
    },
    [theme.breakpoints.up('md')]: {
      height: "32px",
      width: "32px",
    },
    [theme.breakpoints.up('lg')]: {
      // height: "36px",
      // width: "36px",
      height: "32px",
      width: "32px",
    },
  },

  textContainer: {
    height: "30px",
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down('xs')]: {
      height: "22px",
      marginTop: "10px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      height: "30px",
      marginTop: "12px",
    },
    [theme.breakpoints.up('md')]: {
      height: "48px",
      marginTop: "14px",
    },
    [theme.breakpoints.up('lg')]: {
      // height: "56px",
      // marginTop: "16px",
      height: "48px",
      marginTop: "14px",
    },
  },
  selectedTitleTxt: {
    fontFamily: "Poppins",
    fontSize: 12.2,
    fontWeight: "600",
    color: "#323643",
    textTransform: "capitalize",
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 12.2,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
    },
  },
  titleTxt: {
    fontFamily: "Poppins",
    fontSize: 11.2,
    fontWeight: "300",
    color: "#323643",
    textTransform: "capitalize",
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 11.2,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
    },
  },
  
});

export default styles;
