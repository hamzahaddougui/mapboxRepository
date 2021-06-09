const styles = (theme) => ({
    NbTabs: {

    },
    nbTabsIndicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > span": {
            maxWidth: 150,
            width: "150%",
            backgroundColor: "#575ff9"
        }
    },
    flexContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    NbTab: {
        "& .MuiTab-wrapper": {
            display: "inline-block",
            marginBottom: "-16px",
        },
        "& span": {
            fontFamily: "Poppins",
            fontSize: 14.2,
            fontWeight: 600,
            color: "#303339",
            textTransform: "none",
        },
    },
    NbTabIcon: {
        margin: "0 4px -4px 0 !important",
        height: "18px",
        width: "20px"
    }
});

export default styles;