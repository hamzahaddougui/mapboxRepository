const styles = () => ({
  background: {
    backgroundColor: "#fff",
    backgroundImage: "url(/map_head.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "22%",
    position: "fixed",
    zIndex: -1,
    top: 0,
  },
  backContainer: {
    position: "absolute",
    display: "inline-flex",
    margin: "8px",
    cursor: "pointer",
    padding: "1em",
  },
  backIcon: {
    width: "24px",
    height: "24px",
    display: "inline-flex",
    float: "left",
    alignItems: "center",
    marginRight: "4px",
  },
  backText: {
    display: "inline-flex",
    float: "left",
    alignItems: "center",
    margin: 0,
    fontFamily: "Poppins",
    fontSize: 12,
    color: "#323643",
  },

  header: {
    position: "relative",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  headerTitle: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 25,
    fontWeight: "Bold",
    margin: "29px 0 6px 0",
  },
  headerDesc: {
    fontFamily: "Poppins",
    color: "#323643",
    fontSize: 16.02,
    fontWeight: "lighter",
    margin: "8px 0 16px 0",
  },
});

export default styles;
