const styles = (theme) => ({
    appBar: {
        position: 'fixed',
    },
    closeIcon:{
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    title: {
        fontFamily: "Poppins",
        FontWeight: "Lighter",
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    wrapper: {
        padding: "2em 0 1em 0", 
        marginTop: "4em"
    },
    showMoreIconContainer: {
        borderRadius: 0
    }
});

export default styles;