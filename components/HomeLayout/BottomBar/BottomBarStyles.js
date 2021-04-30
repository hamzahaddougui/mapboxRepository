const styles = (theme) => ({
    bottomContainer:{
        height: "65px",
        width: "100vw",
        boxShadow: "0 20px 40px -1px rgba(14, 31, 53, 0.12), 0 12px 18px 0 rgba(14, 31, 53, 0.2), 0 6px 10px 0 rgba(14, 31, 53, 0.12)",
        backgroundColor: "#ffffff",
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 2,
    },
    buttonContainer :{
        width: "calc( 100% - 57px)",
        position: "absolute",
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    LaststepContainer:{
        position: "absolute",
        bottom: "17px",
        right: "30px",
    },
    navigationTxt:{
        fontFamily: "Poppins",
        fontSize: 16.02,
        fontWeight: 300,
        textTransform: "none",
        "&:hover": {
        backgroundColor: "transparent",
        },
    },
    stepContainer:{
        position: "absolute",
        right: "30px",
        bottom: "17px",
    },
    navigationStep:{
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: 300,
    },
    navigationTotalSteps:{
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: 600,
    }

});

export default styles;