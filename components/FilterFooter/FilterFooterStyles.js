const styles = (theme) => ({

    // FilterFooter Styles
    bottomBox: {
        height: "65px",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 6px 10px 0 rgba(14, 31, 53, 0.12), 0 12px 18px 0 rgba(14, 31, 53, 0.2), 0 20px 40px -1px rgba(14, 31, 53, 0.12)",
        position: "fixed",
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 3,
    },
    poweredBy: {
        fontFamily: "Poppins", 
        fontSize: 11.3, 
        fontWeight: "300", 
        color: "#323643",
        margin: "0 2px 0 0",
        opacity: 0.57,
        [theme.breakpoints.down('xs')]: {
        fontSize: 9,
        margin: "0 1px 0 0",
        },
        [theme.breakpoints.between('xs, sm')]: {
        fontSize: 11.3,
        margin: "0 2px 0 0",
        },
        [theme.breakpoints.up('md')]: {
        fontSize: 11.3,
        margin: "0 2px 0 0",
        },
        [theme.breakpoints.up('lg')]: {
        fontSize: 11.3,
        margin: "0 2px 0 0",
        },
        [theme.breakpoints.up('xl')]: {
        fontSize: 13,
        margin: "0 2px 0 0",
        },
      },
      brandName: {
        fontFamily: "Poppins",
        fontSize: 11.3,
        fontWeight: 500,
        color: "#323643",
        margin: "0 0 0 2px",
        [theme.breakpoints.down('xs')]: {
        fontSize: 9,
        margin: "0 0 0 1px",
        },
        [theme.breakpoints.between('xs, sm')]: {
        fontSize: 11.3,
        margin: "0 0 0 2px",
        },
        [theme.breakpoints.up('md')]: {
        fontSize: 11.3,
        margin: "0 0 0 2px",
        },
        [theme.breakpoints.up('lg')]: {
        fontSize: 11.3,
        margin: "0 0 0 2px",
        },
        [theme.breakpoints.up('xl')]: {
        fontSize: 13,
        margin: "0 0 0 2px",
        },
      },
    invisibleBottomBox: {
        height: "74px",
        width: "100%",
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255))",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%)",
        zIndex: 3,
    },
    logo: {
        marginLeft: "12px",
    },
    navigation: {
        fontFamily: "Poppins",
        fontSize: 16.02,
        fontWeight: 300,
        color: "#323643",
        textDecoration: "none",
        cursor: "pointer",
        padding: "8px 45px",
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize: 16.02,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 16.02,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 16.02,
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 18,
        },
    },

});

export default styles;