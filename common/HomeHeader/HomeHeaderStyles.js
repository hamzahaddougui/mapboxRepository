const styles = (theme) => ({
    headerContainer: {
        padding: "18px 22px",
        padding: props => (props.noPadding ? "0px" : "18px 22px"),
    },
    headerTxt: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 300,
        color: "#323643",
    },
    accountContainer: {
        // position: "fixed",
        // right: "28px",
        // top: "18px",
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
});

export default styles;