const styles = () => ({
  // FilterHeader Styles
  root: {
    marginBottom: "27px",
  },
  elementContainer: {
    maxWidth: "100px",
    cursor: "pointer",
  },
  selectedIconContainer: {
    height: "78px",
    width: "78px",
    borderRadius: "50%",
    backgroundColor: "#323643",
    boxShadow: "0 2px 4px 0 rgba(50,54,67,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    height: "66px",
    width: "66px",
    borderRadius: "50%",
    backgroundColor: "#FFF",
    border: "1px solid #F2F4F4",
    boxShadow: "0 2px 4px 0 rgba(50,54,67,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    height: "30px",
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  selectedTitleTxt: {
    fontSize: 14.24,
    color: "#323643",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  titleTxt: {
    fontSize: 12.24,
    color: "#323643",
    textTransform: "capitalize",
  },
});

export default styles;
