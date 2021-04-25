const styles = (theme) => ({

    // Matcher Restart Styles
    root: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        overflow: "hidden",
        zIndex: 3,
        // display: props => (props.open ? "block" : "none"),
      },
      close: {
        width: "27px",
        height: "27px",
        position: "absolute",
        right: "30px",
        top: "33px",
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
          width: "22px",
          height: "22px",
        },
        [theme.breakpoints.between('xs, sm')]: {
          width: "27px",
          height: "27px",
        },
        [theme.breakpoints.up('md')]: {
          width: "27px",
          height: "27px",
        },
        [theme.breakpoints.up('lg')]: {
          width: "27px",
          height: "27px",
        },
        [theme.breakpoints.up('xl')]: {
          width: "36px",
          height: "36px",
        },
      },
      title: {
        fontFamily: "Poppins",
        fontSize: 19,
        marginTop: "36px",
        textAlign: "center",
        fontWeight: "600",
        [theme.breakpoints.down('xs')]: {
          fontSize: 16.02,
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 19,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 25,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 25,
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: 28,
        },
      },
      favoriteIcon: {
        color: "#FF0061",
        position: "relative",
        top: "3px",
        [theme.breakpoints.down('xs')]: {
          fontSize: 20
        },
      },
      desc: {
        fontFamily: "Poppins",
        fontSize: 16.02,
        marginTop: "23px",
        textAlign: "center",
        fontWeight: "300",
        [theme.breakpoints.down('xs')]: {
          fontSize: 14,
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 16.02,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 18.02,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 18.02,
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: 20,
        },
      },
      buttonsWrapper: {
        width: "440px",
        marginTop: "33px",
        [theme.breakpoints.down('xs')]: {
          width: "380px",
        },
      },
      customButton: {
        width: "216px",
        height: "40px",
        backgroundColor: "white",
        border: "1px solid rgba(50,54,67,0.24)",
        borderRadius: "21px",
        textTransform: "none",
        fontFamily: "Poppins",
        fontSize: 16.02,
        fontWeight: "300",
        [theme.breakpoints.down('xs')]: {
          width: "100%",
          height: "35px",
          fontSize: 14,
        },
        [theme.breakpoints.between('xs, sm')]: {
          width: "216px",
          height: "40px",
          fontSize: 16.02,
        },
        [theme.breakpoints.up('md')]: {
          width: "216px",
          height: "40px",
          fontSize: 16.02,
        },
        [theme.breakpoints.up('lg')]: {
          width: "216px",
          height: "40px",
          fontSize: 16.02,
        },
        [theme.breakpoints.up('xl')]: {
          width: "280px",
          height: "50px",
          fontSize: 18.02,
        },
      },

      backContainer: {
        position: "absolute",
        display: "inline-flex",
        margin: "33px 0 0 30px",
        cursor: "pointer",
        // padding: "1em",
    },
    backIcon: {
        width: "20px",
        display: "inline-flex",
        height: "20px",
        alignItems: "center",
        marginRight: "4px",
        float: "left",
        [theme.breakpoints.down('xs')]: {
          width: "18px",
          height: "18px",
          marginRight: "3px",
        },
        [theme.breakpoints.between('xs, sm')]: {
          width: "20px",
          height: "20px",
        },
        [theme.breakpoints.up('md')]: {
          width: "24px",
          height: "24px",
        },
        [theme.breakpoints.up('lg')]: {
          width: "24px",
          height: "24px",
        },
        [theme.breakpoints.up('xl')]: {
          width: "30px",
          height: "30px",
        },
    },
    backText: {
        display: "inline-flex",
        alignItems: "center",
        float: "left",
        margin: 0,
        color: "#323643",
        fontSize: 12,
        [theme.breakpoints.down('xs')]: {
          fontSize: 11,
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 12,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 12,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 12,
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: 12,
        },
    },
    restartMatcherWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -40%)",
    },
    restartIcon: {
        height: "72px",
        width: "82px",
        [theme.breakpoints.down('xs')]: {
          height: "58px",
          width: "66px",
        },
        [theme.breakpoints.between('xs, sm')]: {
          height: "72px",
          width: "82px",
        },
        [theme.breakpoints.up('md')]: {
          height: "93px",
          width: "107px",
        },
        [theme.breakpoints.up('lg')]: {
          height: "93px",
          width: "107px",
        },
        [theme.breakpoints.up('xl')]: {
          height: "93px",
          width: "107px",
        },
    }
});

export default styles;