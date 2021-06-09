const styles = (theme) => ({
    rootContainerOpen:{
        // height: "calc( 100vh - 65px )",
        height: "100vh",
        width: "calc( 100vw - 240px )",
        padding: props => (props.noPadding ? "0px" : "24px"),
        overflowY: "auto",
        overflowX: "hidden",
        position: "absolute",
        top: 0,
        right: 0,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    rootContainerClosed:{
        // height: "calc( 100vh - 65px )",
        height: "100vh",
        width: "calc( 100vw - 57px )",
        padding: props => (props.noPadding ? "0px" : "24px"),
        overflowY: "auto",
        overflowX: "hidden",
        position: "absolute",
        top: 0,
        right: 0,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }
});

export default styles;