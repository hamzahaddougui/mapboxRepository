const styles = theme => ({
  matchButton: {
    border: "1px solid #979797",
    backgroundColor: "transparent",
    padding: "10px 40px",
    borderRadius: "22.5px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  nMatcher: {
    height: "104px",
    width: "70px",
    position: "absolute",
    bottom: "39px",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

export default styles;
