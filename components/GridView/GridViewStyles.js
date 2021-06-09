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
        FontWeight: 300,
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    wrapper: {
        padding: "2em 0 1em 0", 
        marginTop: "4em",
        overflowY: "scroll",
        scrollBehavior: "smooth",
    },
    showMoreIconContainer: {
        borderRadius: 0
    }
});

export default styles;