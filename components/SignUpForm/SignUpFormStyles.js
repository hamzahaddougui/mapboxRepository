const styles = () => ({
  // SignUp Form Styles
  paper: {
    marginTop: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 20.27,
    fontWeight: "bold",
    textTransform: "Uppercase",
  },
  form: {
    width: "600px", // Fix IE 11 issue.
    marginTop: "18px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "27px",
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
    }
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
  },
  titleOther: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "300",
    marginTop: "48px",
  },
  authWrapper: {
    width: "600px",
    marginTop: "16px",
  },
  auth: {
    width: "296px",
    borderRadius: "24px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none !important",
    border: "1px solid rgba(50, 54, 67, 0.16) !important",
  },
});

export default styles;
