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
  },
  helperWrapper: {
    marginTop: "16px",
  },
  helper: {
    color: "#323643",
    opacity: 0.68,
    fontSize: 14.24,
    textDecoration: "underline",
  },
  titleOther: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "lighter",
    marginTop: "59px",
  },
  authWrapper: {
    width: "600px",
    marginTop: "16px",
  },
  auth: {
    width: "100%",
    borderRadius: "24px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
