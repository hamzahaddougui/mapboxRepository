const styles = (theme) => ({
    percentMatch:{
        fontFamily: "Poppins",
        fontWeight: "300",
        fontSize: 14.24,
        color: "#323643",
        margin: "16px 34px",
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            margin: "12px 24px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize: 14.2,
            margin: "16px 34px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 14.2,
            margin: "16px 34px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 14.2,
            margin: "16px 34px",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 16.02,
            margin: "18px 48px",
        },
    },
    accordionTitle:{
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: 16,
        color: "#323643",
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize: 15.2,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 15.2,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 15.2,
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 17.02,
        },
    },
    CheckedValue:{
        fontFamily: "Poppins",
        fontWeight: "300",
        fontSize: 14.24,
        color: "#323643",
        margin: "7px 0 0 34px",
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            marginLeft: "24px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 16.02,
            marginLeft: "48px",
        },
    },
    CheckedValueActive:{
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: 14.24,
        color: "#323643",
        margin: "7px 0 0 34px",
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            marginLeft: "24px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 16.02,
            marginLeft: "48px",
        },
    },
    filterGroupTitle:{
        fontFamily: "Poppins",
        fontWeight: "300",
        fontSize: 14.24,
        margin: "0 0 0 34px",
        color: "#323643",
        opacity: 0.49,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            marginLeft: "24px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 14.2,
            marginLeft: "34px",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 16.02,
            marginLeft: "48px",
        },
    },
    filterGroupArray: {
        padding: "0 24px",
        marginBottom: "6px",
        [theme.breakpoints.down('xs')]: {
            padding: "0 14px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            padding: "0 24px",
        },
        [theme.breakpoints.up('md')]: {
            padding: "0 24px",
        },
        [theme.breakpoints.up('lg')]: {
            padding: "0 24px",
        },
        [theme.breakpoints.up('xl')]: {
            padding: "0 36px",
        },
        
    }
});

export default styles;