const styles = (theme) => ({
    backContainer: {
        display: "inline-flex",
        // margin: "0 8px",
        cursor: "pointer",
        position: "absolute",
        top: "24px",
        left: "24px",
    },
    backIcon: {
        width: "22px",
        height: "22px",
        display: "inline-flex",
        float: "left",
        alignItems: "center",
        marginRight: "4px",
        [theme.breakpoints.down('xs')]: {
            width: "18px",
            height: "18px",
            marginRight: "3px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            width: "22px",
            height: "22px",
            marginRight: "4px",
        },
        [theme.breakpoints.up('md')]: {
            width: "25px",
            height: "25px",
            marginRight: "5px",
        },
        [theme.breakpoints.up('lg')]: {
            width: "25px",
            height: "25px",
            marginRight: "5px",
        },
    },
    backText: {
        display: "inline-flex",
        float: "left",
        alignItems: "center",
        margin: 0,
        fontSize: "12px",
        color: "#323643",
        [theme.breakpoints.down('xs')]: {
            fontSize: "10px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize: "12px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "14px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "14px",
        },
    }
});

export default styles;