const styles = theme => ({
  root: {
    // backgroundColor: "#9A9895",
    // height: "100vh",
  },
  jumbo: {
    // backgroundColor: "#9A9895",
    // backgroundImage: 'url(/map.svg)',
    // backgroundSize: "contain",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // height: "100vh",
    // width: "100vw",
    // zIndex: 2,
  },
  mapHeader: {
    position: "relative",
    zIndex: 2,
  },
  matcherFooter: {
    position: "fixed",
    zIndex: 2,
    bottom: 0,
  },

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
