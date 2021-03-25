const styles = (theme) => ({

    // Matcher Restart Styles
    root: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        overflow: "hidden",
        zIndex: 3,
        // display: props => (props.open ? "block" : "none"),
      },
      close: {
        width: "27px",
        height: "27px",
        position: "absolute",
        right: "30px",
        top: "33px",
        cursor: "pointer",
      },
      title: {
        fontSize: 25,
        marginTop: "36px",
        textAlign: "center",
        fontWeight: "bold",
      },
      favoriteIcon: {
        color: "#FF0061",
        position: "relative",
        top: "3px",
      },
      desc: {
        fontSize: 18.02,
        marginTop: "23px",
        textAlign: "center",
        fontWeight: "lighter",
      },
      buttonsWrapper: {
        width: "440px",
        marginTop: "33px",
      },
      customButton: {
        width: "216px",
        height: "40px",
        backgroundColor: "white",
        border: "1px solid rgba(50,54,67,0.24)",
        borderRadius: "21px",
        textTransform: "none",
      },

      backContainer: {
        position: "absolute",
        display: "inline-flex",
        margin: "30px 0 0 33px",
        cursor: "pointer",
    },
    backIcon: {
        width: "24px",
        display: "inline-flex",
        height: "24px",
        alignItems: "center",
        marginRight: "4px",
        float: "left",
    },
    backText: {
        display: "inline-flex",
        alignItems: "center",
        float: "left",
        margin: 0,
        color: "#323643",
        fontSize: "12px",
    },
    restartMatcherWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -40%)",
    },
    restartIcon: {
        height: "93px",
        width: "107px",
    }
});

export default styles;