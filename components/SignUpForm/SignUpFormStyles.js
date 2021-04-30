const styles = (theme) => ({
  // SignUp Form Styles
  root: {
    width: "100%",
    // margin: 0,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  paper: {
    width: "auto", // Remove if any error
    marginTop: "6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      marginTop: "4px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      marginTop: "6px",
    },
    [theme.breakpoints.up('md')]: {
      marginTop: "6px",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: "12px",
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: "16px",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "Uppercase",
    [theme.breakpoints.down('xs')]: {
      fontSize: 14.2,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 20,
    },

  },
  form: {
    width: "500px", // Fix IE 11 issue.
    marginTop: "4px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "27px",
    },
    [theme.breakpoints.down('xs')]: {
      width: "380px",
      marginTop: "4px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      width: "500px",
      marginTop: "4px",
    },
    [theme.breakpoints.up('md')]: {
      width: "600px",
      marginTop: "4px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "600px",
      marginTop: "8px",
    },
    [theme.breakpoints.up('xl')]: {
      width: "600px",
      marginTop: "10px",
    },
  },
  formElement: {
    padding: "5px",
    [theme.breakpoints.down('xs')]: {
      padding: "4px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      padding: "5px",
    },
    [theme.breakpoints.up('md')]: {
      padding: "5px",
    },
    [theme.breakpoints.up('lg')]: {
      padding: "6px 8px",
    },
    [theme.breakpoints.up('xl')]: {
      padding: "8px",
    },
  },
  input: {
    textAlign: "center",
    '&::placeholder': {
      fontFamily: "Poppins",
      fontWeight: "300",
      fontSize: 14.2,
      color: '#323643',
      opacity: 1,
      [theme.breakpoints.down('xs')]: {
        fontSize: 13,
      },
      [theme.breakpoints.between('xs, sm')]: {
        fontSize: 14.2,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 14.2,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 14.2,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 16.02,
      },
    },
  },
  MuiInput: {
    "& .MuiOutlinedInput-input": {
      padding: "14px 6px",
      [theme.breakpoints.down('xs')]: {
        padding: "14px 6px",
      },
      [theme.breakpoints.between('xs, sm')]: {
        padding: "14px 6px",
      },
      [theme.breakpoints.up('md')]: {
        padding: "16px 8px",
      },
      [theme.breakpoints.up('lg')]: {
        padding: "16px 8px",
      },
      [theme.breakpoints.up('xl')]: {
        padding: "18.5px 14px",
      },
    },
  },
  helperWrapper: {
    marginTop: "14px",
  },
  helperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  helper: {
    color: "#323643",
    opacity: 0.7,
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: 14.24,
    textDecoration: "underline",
    textAlign: "center",
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 14.24,
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
  titleOther: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "300",
    marginTop: "18px",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
      marginTop: "16px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 16.02,
      marginTop: "18px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
      marginTop: "16px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
      marginTop: "20px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
      marginTop: "24px",
    },
  },
  authWrapper: {
    width: "600px",
    marginTop: "16px",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      width: "400px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      marginTop: "16px",
    },
    [theme.breakpoints.up('md')]: {
      marginTop: "8px",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: "16px",
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: "16px",
    },
  },
  authElement:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      marginTop: "1em"
    },
  },
  auth: {
    width: "98%",
    borderRadius: "24px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none !important",
    border: "1px solid rgba(50, 54, 67, 0.16) !important",
    [theme.breakpoints.down('xs')]: {
      width: "85%",
    },
  },
});

export default styles;
