const styles = () => ({

    // FilterFooter Styles
    bottomBox: {
        height: "65px",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 6px 10px 0 rgba(14, 31, 53, 0.12), 0 12px 18px 0 rgba(14, 31, 53, 0.2), 0 20px 40px -1px rgba(14, 31, 53, 0.12)",
        position: "fixed",
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 3,
    },
    poweredBy: {
        fontFamily: "Poppins", 
        fontSize: 11.3, 
        fontWeight: "300", 
        color: "#323643",
        margin: "0 3px 0 0",
        opacity: 0.57
      },
      brandName: {
        fontFamily: "Poppins",
        fontSize: 11.3,
        fontWeight: 500,
        color: "#323643",
        margin: "0 0 0 3px"
      },
    invisibleBottomBox: {
        height: "74px",
        width: "100%",
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255))",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%)",
        zIndex: 3,
    },
    logo: {
        marginLeft: "12px",
    },
    navigation: {
        color: "#323643",
        textDecoration: "none",
        cursor: "pointer",
        padding: "8px 45px",
    },

});

export default styles;