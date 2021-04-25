const styles = (theme) => ({
    splittedButtonView: {
        backgroundColor: "#323643",
        display: "inline-flex",
        padding: "4px",
        borderRadius: "24px",
        opacity: 0.77,
        left: "37px",
        [theme.breakpoints.down('xs')]: {
            padding: "3px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            padding: "4px",
        },
        [theme.breakpoints.up('md')]: {
            padding: "4px",
        },
        [theme.breakpoints.up('lg')]: {
            padding: "4px",
        },
        [theme.breakpoints.up('xl')]: {
            padding: "5px",
        },
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
        fontFamily: "Poppins",
        fontWeight: "300",
        fontSize: 14.24,
        color: "#fff",
        opacity: 0.5,
        [theme.breakpoints.down('xs')]: {
            padding: "4px 16px",
            fontSize: 11,
        },
        [theme.breakpoints.between('xs, sm')]: {
            padding: "4px 24px",
            fontSize: 14.2,
        },
        [theme.breakpoints.up('md')]: {
            padding: "4px 24px",
            fontSize: 14.2,
        },
        [theme.breakpoints.up('lg')]: {
            padding: "4px 24px",
            fontSize: 14.2,
        },
        [theme.breakpoints.up('xl')]: {
            padding: "4px 28px",
            fontSize: 16.02,
        },
    },
    splittedButtonItemActive: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f4f4",
        borderRadius: "24px",
        padding: "4px 24px",
        cursor: "pointer",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: 14.24,
        color: "#323643",
        [theme.breakpoints.down('xs')]: {
            padding: "4px 16px",
            fontSize: 11,
        },
        [theme.breakpoints.between('xs, sm')]: {
            padding: "4px 24px",
            fontSize: 14.2,
        },
        [theme.breakpoints.up('md')]: {
            padding: "4px 24px",
            fontSize: 14.2,
        },
        [theme.breakpoints.up('lg')]: {
            padding: "4px 24px",
            fontSize: 14.2,
        },
        [theme.breakpoints.up('xl')]: {
            padding: "4px 28px",
            fontSize: 16.02,
        },
    },
    icon: {
        height: "20px",
        width: "12px",
        marginRight: "5px",
        [theme.breakpoints.down('xs')]: {
            height: "12px",
            width: "8px",
            marginRight: "2px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            height: "20px",
            width: "12px",
            marginRight: "2px",
        },
        [theme.breakpoints.up('md')]: {
            height: "20px",
            width: "12px",
            marginRight: "2px",
        },
        [theme.breakpoints.up('lg')]: {
            height: "20px",
            width: "12px",
            marginRight: "2px",
        },
        [theme.breakpoints.up('xl')]: {
            height: "24px",
            width: "16px",
            marginRight: "2px",
        },
    },
    contentTxt: {
        fontFamily: "Poppins",
        fontSize: 14.2,
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        // color: "#323643",
        [theme.breakpoints.down('xs')]: {
            fontSize: 11,
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize: 14.2,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 14.2,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 14.2,
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 16.02,
        },
    }
});

export default styles;