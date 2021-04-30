const homeExampleImage = "/homeExample.jpg";

const styles = (theme) => ({
    closeIcon:{
        // fontSize: 36,
        position: "absolute",
        right: "24px",
        top: "24px",
        height: "22px",
        width: "22px",
        cursor: "pointer"
    },
    title: {
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: 600,
        color: "#323643",
    },
    CardContainer:{
        height: "75vh",
        width: "60vw",
        marginTop: "22px",
        borderRadius: "30px",
        backgroundColor: "#FFF",
        backgroundImage: `url(${homeExampleImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 2px 4px 0 rgba(48, 51, 57, 0.25), 0 5px 18px 0 rgba(227, 228, 254, 0.63)",
    },
    controllersContainer:{
        marginTop: "20px"
    },
    smallIcon: {
        width: "52px",
        height: "52px",
        margin: "0 24px",
        cursor: "pointer",
    },
    BigIcon: {
        width: "72px",
        height: "72px",
        margin: "0 24px",
        cursor: "pointer",
    },
    controllersTxt: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 300,
        margin: "0 28px",
    }
});

export default styles;