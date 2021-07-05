const homeExampleImage = "/homeExample.jpg";

const styles = (theme) => ({
    closeIcon:{
        // fontSize: 36,
        position: "absolute",
        right: "24px",
        top: "24px",
        height: "22px",
        width: "22px",
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
            right: "16px",
            top: "16px",
            height: "18px",
            width: "16px",
        },
    },
    title: {
        fontFamily: "Poppins",
        fontSize: 25,
        fontWeight: 600,
        color: "#323643",
        [theme.breakpoints.down('xs')]: {
          fontSize: 17,
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 20,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 23,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 25,
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: 28,
        },
    },
    cardsWrapper: {
        display: "flex",
        justifyContent: "center",
        marginTop: "22px",
        height: "75vh",
        width: "60vw",
    },
    swipe: {
        position: "absolute",
    },
    CardContainer:{
        position: "relative",
        height: "75vh",
        width: "60vw",
        // marginTop: "22px",
        borderRadius: "30px",
        backgroundColor: "#FFF",
        // backgroundImage: `url(${homeExampleImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // boxShadow: "0 2px 4px 0 rgba(48, 51, 57, 0.25), 0 5px 18px 0 rgba(227, 228, 254, 0.63)",
    },
    cardContentTxt: {
        position: "absolute",
        bottom: 0,
        padding: "1em",
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 500,
        color: "#FFF",
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 14,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 16,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 18,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 20,
          },
    },
    controllersContainer:{
        marginTop: "20px"
    },
    smallIcon: {
        width: "38px",
        height: "38px",
        margin: "0 16px",
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
            width: "28px",
            height: "28px",
            margin: "0 12px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            width: "38px",
            height: "38px",
            margin: "0 16px",
        },
        [theme.breakpoints.up('md')]: {
            width: "46px",
            height: "46px",
            margin: "0 20px",
        },
        [theme.breakpoints.up('lg')]: {
            width: "52px",
            height: "52px",
            margin: "0 24px",
        },
        [theme.breakpoints.up('xl')]: {
            width: "52px",
            height: "52px",
            margin: "0 24px",
        },
    },
    BigIcon: {
        width: "72px",
        height: "72px",
        margin: "0 24px",
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
            width: "48px",
            height: "48px",
            margin: "0 12px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            width: "58px",
            height: "58px",
            margin: "0 16px",
        },
        [theme.breakpoints.up('md')]: {
            width: "66px",
            height: "66px",
            margin: "0 20px",
        },
        [theme.breakpoints.up('lg')]: {
            width: "72px",
            height: "72px",
            margin: "0 24px",
        },
        [theme.breakpoints.up('xl')]: {
            width: "72px",
            height: "72px",
            margin: "0 24px",
        },
    },
    controllersTxt: {
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: 300,
        margin: "0 28px",
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            margin: "0 14px",
        },
    }
});

export default styles;