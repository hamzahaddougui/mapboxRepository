const styles = () => ({

    // SignUp Styles
    homeMatcher: {
        cursor: "pointer",
    },
    homeMatcher: {
        /* height: 104px; */
        /* width: 70px; */
        position: "absolute",
        /* bottom: 46px; */
        left: "50%",
        transform: "translateX(-50%)",
    },
    homeMatcherIcon: {
        height: "104px",
        width: "70px",
        position: "absolute",
        bottom: "18px",
        left: "50%",
        transform: "translateX(-50%)",
    },
    root: {
        // height: "100vh",
        // paddingBottom: "24px"
      },
      jumbo: {
        width: "100%",
        height: "0px",
        margin: "0 auto",
        // padding: "20px 20px 0 20px",
        position: "fixed",
        backgroundColor: "#fff",
      },
      jumboBackground: {
        backgroundColor: "#fff",
        backgroundImage: "url(/map_head.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        // height: "22%",
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
        //letterSpacing: "0.01071em"
      },
      bottomBox: {
        height: "74px",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow:
          "0 6px 10px 0 rgba(14,31,53,0.12), 0 12px 18px 0 rgba(14,31,53,0.20), 0 20px 40px -1px rgba(14,31,53,0.12)",
        position: "fixed",
        //top: "92%",
        bottom: "0%",
        right: "0%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      poweredBy: {
        fontSize: "10px",
        color: "#323643",
        opacity: "57%",
      },
      logo: {
        marginLeft: "12px",
      },
      brand: {
        position: "absolute",
        right: "4%",
        display: "flex",
        alignItems: "center",
      },
      // thunder: {
      //   height: "58px",
      //   width: "58px",
      //   position: "absolute",
      //   bottom: "80%",
      //   left: "50%",
      //   transform: "translateX(-50%)",
      // },
      navigation: {
        color: "#323643",
        fontSize: 16.02,
        textTransform: "none",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      wrapper: {
        // height: "100vh",
        paddingTop: "24em",
        paddingBottom: "11em",
        width: "100%",
        // overflowY: "auto",
      },
});

export default styles;