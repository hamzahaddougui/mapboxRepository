const styles = (theme) => ({
  // Add Neighborhood Styles
  root: {
    backgroundColor: "#FFF",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: "1",
    display: props => (props.open ? "block" : "none"),
    overFlow: "hidden",
  },
  close: {
    width: "27px",
    height: "27px",
    position: "absolute",
    right: "27px",
    top: "33px",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      width: "22px",
      height: "22px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "27px",
      height: "27px",
    },
    [theme.breakpoints.up('md')]: {
      width: "27px",
      height: "27px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "27px",
      height: "27px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "36px",
      height: "36px",
    },
  },
  alert: {
    height: "50px",
    width: "50px",
    position: "absolute",
    bottom : "100px"
  },
  bottomBox: {
    height: "65px",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 6px 10px 0 rgba(14,31,53,0.12), 0 12px 18px 0 rgba(14,31,53,0.20), 0 20px 40px -1px rgba(14,31,53,0.12)",
    position: "fixed",
    bottom: 0,
    right: "0%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navigation: {
    color: "#323643",
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 16.02,
    textTransform: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
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
  addNeighborhoodImg: {
    width: "96px",
    height: "88px",
    [theme.breakpoints.down('xs')]: {
      width: "78px",
      height: "72px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "96px",
      height: "88px",
    },
    [theme.breakpoints.up('md')]: {
      width: "119px",
      height: "112px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "119px",
      height: "112px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "119px",
      height: "112px",
    },
  },
  addNeighborhoodTxt: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    marginTop: "17px",
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 25,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 25,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 28,
    },
  },
  addNeighborhoodWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "25%",
    transform: "translate(-50%, -25%)",
  },
  addNeighborhoodInput: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      marginTop: "24px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      marginTop: "24px",
    },
    [theme.breakpoints.up('md')]: {
      marginTop: "32px",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: "32px",
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: "32px",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "32px",
      width: "80%",
      [theme.breakpoints.down('xs')]: {
        fontSize: 14.2,
        width: "60%",
      },
      [theme.breakpoints.between('xs, sm')]: {
        fontSize: 16.02,
        width: "80%",
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 18.02,
        width: "100%",
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 18.02,
        width: "100%",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
        width: "100%",
      },
    },
    "& .MuiOutlinedInput-input": {
      textAlign: "center",
      // padding: "8px 0",
      '&::placeholder': {
        fontFamily: "Poppins",
        fontWeight: "300",
        fontSize: 16.02,
        color: '#323643',
        opacity: 1,
        [theme.breakpoints.down('xs')]: {
          fontSize: 14.2,
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 16.02,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 18.02,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 18.02,
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: 20,
        },
      }
    },
    "& .MuiAutocomplete-inputRoot": {
      padding: "12.5px 4px",
      [theme.breakpoints.down('xs')]: {
        padding: "10px 4px",
      },
      [theme.breakpoints.between('xs, sm')]: {
        padding: "12.5px 4px",
      },
      [theme.breakpoints.up('md')]: {
        padding: "12.5px 4px",
      },
      [theme.breakpoints.up('lg')]: {
        padding: "12.5px 4px",
      },
      [theme.breakpoints.up('xl')]: {
        padding: "12.5px 4px",
      },
    }
  },
});

export default styles;
