const styles = (theme) => ({
    favoriteBodyElement: {
        width: "50%", 
        height: "100%"
    },
    favoriteCategoryButton: {
        padding: "3px 42px",
        fontFamily: "Poppins",
        fontSize: 14.2,
        // fontWeight: 300,
        color: "#323643",
        opacity: 0.5,
        backgroundColor: "transparent",
        borderRadius: 13.5,
        textTransform: "none",
        width: "144px",
        margin: "0 3px",
    },
    favoriteCategoryButtonSelected: {
        padding: "3px 24px",
        backgroundColor: "rgba(87, 95, 249, 0.18)",
        boxShadow: "0 0 2px 0 rgba(50, 54, 67, 0.21)",
        borderRadius: 13.5,
        fontFamily: "Poppins",
        fontSize: 14.2,
        color: "#323643",
        textTransform: "none",
        width: "144px",
        margin: "0 3px",
        "&:hover": {
            backgroundColor: "rgba(87, 95, 249, 0.18)",
        }
    },
    buttonsContainer: {
        position: "relative",
        padding: "18px 0",
        display: "flex",
        alignItems: "flex-start"
    },
    homeFiltersIconContainer: {
        position: "absolute",
        right: "28px",
    },
    homeFiltersIcon: {
        height: "35px",
        width: "35px",
        cursor: "pointer",
    }
});

export default styles;