const styles = (theme) => ({
    confirmRoot: {
        // width: "50vw",
        width: "auto",
        height: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "17px",
        backgroundColor: "#FFF",
        boxShadow: "0 6px 12px 0 rgba(14, 31, 53, 0.08), 0 4px 8px 0 rgba(14, 31, 53, 0.1), 0 1px 4px 0 rgba(14, 31, 53, 0.12)",
        overflow: "hidden",
        [theme.breakpoints.down('xs')]: {
            width: "75%",
          },
        [theme.breakpoints.down('750')]: {
          width: "60%",
        },
    },
    contentContainer: {
        width: "auto",
        padding: "42px 64px",
        [theme.breakpoints.down('xs')]: {
            padding: "36px 36px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            padding: "42px 64px",
          },
          [theme.breakpoints.up('md')]: {
            padding: "48px 96px",
          },
          [theme.breakpoints.up('lg')]: {
            padding: "56px 112px",
          },
          [theme.breakpoints.up('xl')]: {
            padding: "64px 128px",
          },
    },
    deleteIcon: {
        height: "62px",
        width: "62px",
        [theme.breakpoints.down('xs')]: {
            height: "50px",
            width: "50px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            height: "62px",
            width: "62px",
          },
          [theme.breakpoints.up('md')]: {
            height: "74px",
            width: "74px",
          },
          [theme.breakpoints.up('lg')]: {
            height: "86px",
            width: "86px",
          },
          [theme.breakpoints.up('xl')]: {
            height: "98px",
            width: "98px",
          },
    },
    deleteConfirmTitle: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 300,
        color: "#323643",
        textAlign: "center",
        margin: "23px 0 23px 0",
        "& span": {
            color: "#575ff9"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 18,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 20,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 22.5,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 25,
          },
    },
    confirmButtonsWrapper: {
        width: "100%",
    },
    confirmElement: {
        [theme.breakpoints.down('xs')]: {
            margin: "6px 0 0 0",
          },
    },
    buttonElement: {
        width: "98%",
        height: "40px",
        border: "solid 1px rgba(50, 54, 67, 0.24)",
        borderRadius: "21px",
        backgroundColor: "#FFF",
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: 300,
        color: "#323643",
        textTransform: "none",
        [theme.breakpoints.down('xs')]: {
            fontSize: 11,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 12,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 13,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 14.2,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 16,
          },
    }
});

export default styles;