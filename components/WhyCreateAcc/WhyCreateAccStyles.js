const styles = (theme) => ({
    WhyCreateAccRoot: {
        overflow: "hidden",
    },
    closeIconWrapper: {
        alignSelf: "flex-end",
        margin: "21px 18px 0 0",
          [theme.breakpoints.down('xs')]: {
            margin: "18px 14px 0 0",
          },
          [theme.breakpoints.between('xs, sm')]: {
            margin: "21px 18px 0 0",
          },
          [theme.breakpoints.up('md')]: {
            margin: "26px 21px 0 0",
          },
          [theme.breakpoints.up('lg')]: {
            margin: "30px 24px 0 0",
          },
          [theme.breakpoints.up('xl')]: {
            margin: "33px 27px 0 0",
          },
    },
    closeIcon: {
        height: "20px",
        width: "20px",
        cursor: "pointer",
          [theme.breakpoints.down('xs')]: {
            height: "16px",
            width: "16px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            height: "20px",
            width: "20px",
          },
          [theme.breakpoints.up('md')]: {
            height: "22px",
            width: "22px",
          },
          [theme.breakpoints.up('lg')]: {
            height: "24px",
            width: "24px",
          },
          [theme.breakpoints.up('xl')]: {
            height: "27px",
            width: "27px",
          },
    },
    title: {
        fontFamily: "Poppins",
        fontSize: 19,
        fontWeight: 700,
        color: "#303339",
          [theme.breakpoints.down('xs')]: {
            fontSize: 17,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 19,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 21,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 23,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 25,
          },
    },
    contentWrapper: {
        width: "70%",
        margin: "24px 0 24px 0",
          [theme.breakpoints.down('400')]: {
            width: "90% !important",
            // margin: "18px 0 18px 0 !important",
          },
          [theme.breakpoints.down('xs')]: {
            width: "80%",
            margin: "20px 0 20px 0",
          },
          [theme.breakpoints.between('xs, sm')]: {
            width: "70%",
            margin: "24px 0 24px 0",
          },
          [theme.breakpoints.up('md')]: {
            width: "60%",
            margin: "28px 0 28px 0",
          },
          [theme.breakpoints.up('lg')]: {
            width: "50%",
            margin: "36px 0 36px 0",
          },
          [theme.breakpoints.up('xl')]: {
            width: "40%",
            margin: "48px 0 48px 0",
          },
    },
    txt:{
        fontFamily: "Poppins",
        fontSize: 11,
        fontWeight: 300,
        color: "#303339",
        "& span": {
            fontWeight: 700,
        },
          [theme.breakpoints.down('xs')]: {
            fontSize: 10,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 11,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 12,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 13,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 14,
          },
    },
    txtFooter: {
        fontFamily: "Poppins",
        fontSize: 11,
        fontWeight: 600,
        color: "#303339",
          [theme.breakpoints.down('xs')]: {
            fontSize: 10,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 11,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 12,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 13,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 14,
          },
    },
    WhyCreateAccButton: {
        border: "1px solid rgba(50, 54, 67, 0.24)",
        borderRadius: "27px",
        backgroundColor: "#FFF",
        textTransform: "none",
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: 300,
        color: "#323643",
        padding: "5px 24px",
        "&:hover": {
            backgroundColor: "transparent",
        },
          [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            padding: "4px 20px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 13,
            padding: "5px 24px",
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 14,
            padding: "6px 28px",
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 15,
            padding: "7px 32px",
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 16,
            padding: "8px 36px",
          },
    },
    brandWrapper: {
        alignSelf: "flex-end",
        position: "absolute",
        bottom: 0,
        margin: "0 18px 21px 0",
          [theme.breakpoints.down('xs')]: {
            margin: "0 12px 10px 0",
          },
          [theme.breakpoints.between('xs, sm')]: {
            margin: "0 18px 21px 0",
          },
          [theme.breakpoints.up('md')]: {
            margin: "0 21px 26px 0",
          },
          [theme.breakpoints.up('lg')]: {
            margin: "0 24px 30px 0",
          },
          [theme.breakpoints.up('xl')]: {
            margin: "0 27px 33px 0",
          },
    },
    brand: {
        fontFamily: "Poppins",
        fontSize: 10,
        fontWeight: 300,
        color: "#323643",
        "& span": {
            fontWeight: 500,
        },
          [theme.breakpoints.down('xs')]: {
            fontSize: 9,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 10,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 11,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 11,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 12,
          },
    }
});

export default styles;