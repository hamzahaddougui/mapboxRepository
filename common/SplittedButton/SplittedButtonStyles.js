const styles = (theme) => ({
    splittedButtonView: {
        backgroundColor: "#323643",
        display: "inline-flex",
        padding: "4px",
        borderRadius: "24px",
        opacity: 0.77,
        left: "37px",
    },
    splittedButtonItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        float: "left",
        backgroundColor: "transparent",
        borderRadius: "24px",
        padding: "4px 24px",
        cursor: "pointer",
        fontFamily: "Poppins-Light",
        fontSize: 14.24,
        color: "#fff",
        opacity: 0.5,
    },
    splittedButtonItemActive: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f4f4",
        borderRadius: "24px",
        padding: "4px 24px",
        cursor: "pointer",
        fontFamily: "Poppins-Medium",
        fontSize: 14.24,
        color: "#323643",
    },
    icon: {
        height: "20px",
        width: "12px",
        marginRight: "5px",
    }
});

export default styles;