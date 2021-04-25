
const styles = (theme) => ({
    popper: {
        zIndex: 2,
        marginTop: "4px",
    },
    root: {
        maxHeight: "calc(100vh - 250px)",
        maxWidth: "362px",
        backgroundColor: "#fff",
        opacity: "0.90 !important",
        overflowY: "scroll",
        overflowX: "hidden",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "225px",
            maxHeight: "calc(100vh - 225px)",
        },
        [theme.breakpoints.between('xs, sm')]: {
            maxWidth: "300px",
            maxHeight: "calc(100vh - 225px)",
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: "375px",
            maxHeight: "calc(100vh - 225px)",
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: "375px",
            maxHeight: "calc(100vh - 225px)",
        },
    },
});

export default styles;