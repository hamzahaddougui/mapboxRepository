const styles = (theme) => ({
  // SignUp Form Styles
  paper: {
    marginTop: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    textTransform: "Uppercase",
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 22,
    },

  },
  form: {
    width: "600px", // Fix IE 11 issue.
    marginTop: "18px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "27px",
    },
    [theme.breakpoints.down('xs')]: {
      width: "380px",
    },
  },
  input: {
    textAlign: "center",
    '&::placeholder': {
      fontFamily: "Poppins",
      fontWeight: "300",
      fontSize: 16.02,
      color: '#323643',
      opacity: 1,
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
  },
  MuiInput: {
    "& .MuiOutlinedInput-input": {
      padding: "16px 14px",
      [theme.breakpoints.down('xs')]: {
        padding: "14px 14px",
      },
      [theme.breakpoints.between('xs, sm')]: {
        padding: "16px 14px",
      },
      [theme.breakpoints.up('md')]: {
        padding: "18.5px 14px",
      },
      [theme.breakpoints.up('lg')]: {
        padding: "18.5px 14px",
      },
      [theme.breakpoints.up('xl')]: {
        padding: "18.5px 14px",
      },
    },
  },
  helperWrapper: {
    marginTop: "16px",
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
    marginTop: "32px",
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
      marginTop: "20px",
    },
    [theme.breakpoints.between('xs, sm')]: {
      fontSize: 16.02,
      marginTop: "32px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16.02,
      marginTop: "32px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16.02,
      marginTop: "32px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
      marginTop: "46px",
    },
  },
  authWrapper: {
    width: "600px",
    marginTop: "16px",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]: {
      marginTop: 0
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
