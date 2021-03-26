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
    height: "22%",
    margin: "0 auto",
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
    fontSize: "25px",
    color: "#323643",
    fontWeight: "600",
    margin: "24px 0 8px 0",
  },

  subtitle: {
    fontSize: "16.02px",
    color: "#323643",
    fontWeight: "200",
    margin: "8px 0 24px 0 ",
    letterSpacing: "0.01071em",
  },
  form: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
