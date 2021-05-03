const styles = (theme) => ({
    wrapper: {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    accountContainer: {
        position: "fixed",
        right: "28px",
        top: "18px",
        width: "fit-content"
    },
    thumbnail: {
        width: "40px",
        height: "40px",
        backgroundColor: "#ea609c",
        borderRadius: "50%",
    },
    thumbnailImage: {
        objectFit: "contain",
        width: "32px",
        height: "32px",
    },
    accountClt: {
        width: "28px",
        height: "19px",
        marginLeft: "16px",
        cursor: "pointer"
    },
    icon: {
        width: "124px",
        height: "118px",
    },
    title: {
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: 600,
        color: "#323643",
        marginTop: "32px",
    },
    desc: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 300,
        color: "#323643",
        marginTop: "16px",
        textAlign: "center"
    },
    highlighted :{
        fontWeight: 500,
    },
    nbExamples: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 500,
        color: "#323643",
    },
    buttonContainer: {
        border: "1px solid rgba(50, 54, 67, 0.24)",
        padding: "6px 70px 6px 70px",
        marginTop: "16px",
        borderRadius: "21px",
        textTransform: "none",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 300,
        color: "#323643",
        "&:hover": {
        backgroundColor: "transparent",
        },
    }
});

export default styles;