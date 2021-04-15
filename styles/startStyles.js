const styles = theme => ({
  root: {
    backgroundColor: "#FFF",
    height: "100vh",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: "0px",
    left: "0px",
    zIndex: "2",
    overflowX: "hidden",
    // display: props => (props.open ? "block" : "none"),
  },
  jumbo: {
    background: "url(/map_head.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "150px",
    margin: "0 auto -16px",
    padding: "20px",
  },
  header: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },

  title: {
    fontFamily:"Poppins",
    fontSize: 25,
    color: "#323643",
    fontWeight: "600",
    margin: "24px 0 14px 0",
    letterSpacing: 0,
    textAlign: "center",
    lineHeight: 1.04,
  },
  subtitle: {
    fontFamily:"Poppins",
    fontSize: 16.02,
    fontWeight: "300",
    color: "#323643",
    margin: "8px 0 24px 0 ",
    letterSpacing: "normal",
    lineHeight: 1.44,
  },
  form: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
