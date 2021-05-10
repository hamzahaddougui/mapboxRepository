const styles = (theme) => ({
    signInRoot: {
        width: "70vw",
        // height: "68vh",
        height: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "17px",
        backgroundColor: "#FFF",
        padding: "22px",
        boxShadow: "0 6px 12px 0 rgba(14, 31, 53, 0.08), 0 4px 8px 0 rgba(14, 31, 53, 0.1), 0 1px 4px 0 rgba(14, 31, 53, 0.12)",
          [theme.breakpoints.down('xs')]: {
            width: "90vw",
            // height: "70vh",
            height: "auto",
            padding: "20px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            width: "70vw",
            // height: "68vh",
            height: "auto",
            padding: "22px",
          },
          [theme.breakpoints.up('md')]: {
            width: "60vw",
            // height: "65vh",
            height: "auto",
            padding: "24px",
          },
          [theme.breakpoints.up('lg')]: {
            width: "50vw",
            // height: "60vh",
            height: "auto",
            padding: "34px",
          },
          [theme.breakpoints.up('xl')]: {
            width: "50vw",
            // height: "60vh",
            height: "auto",
            padding: "38px",
          },
    },
    titleContainer: {
        margin: "0 0 18px 0",
        [theme.breakpoints.down('xs')]: {
            margin: "0 0 16px 0",
          },
          [theme.breakpoints.between('xs, sm')]: {
            margin: "0 0 18px 0",
          },
          [theme.breakpoints.up('md')]: {
            margin: "0 0 20px 0",
          },
          [theme.breakpoints.up('lg')]: {
            margin: "0 0 23px 0",
          },
          [theme.breakpoints.up('xl')]: {
            margin: "0 0 26px 0",
          },
    },
    signInTitle: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: 600,
        color: "#303339",
        textTransform: "uppercase",
        [theme.breakpoints.down('xs')]: {
            fontSize: 14.2,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 16,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 18,
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 20.3,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 22,
          },
    },
    closeIcon: {
        width: "18px",
        height: "18px",
        cursor: "pointer",
        position: "absolute",
        right: "28px",
        [theme.breakpoints.down('xs')]: {
            width: "16px",
            height: "16px",
            right: "24px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            width: "18px",
            height: "18px",
            right: "28px",
          },
          [theme.breakpoints.up('md')]: {
            width: "20px",
            height: "20px",
            right: "32px",
          },
          [theme.breakpoints.up('lg')]: {
            width: "22px",
            height: "22px",
            right: "34px",
          },
          [theme.breakpoints.up('xl')]: {
            width: "28px",
            height: "28px",
            right: "38px",
          },
    },
    signInDivider: {
        height: "1px",
        width: "80%",
        opacity: 0.09,
        border: "solid 1px #323643",
    },
    formContainer: {
        margin: "16px 0 0 0",
        [theme.breakpoints.down('xs')]: {
            margin: "12px 0 0 0",
          },
          [theme.breakpoints.between('xs, sm')]: {
            margin: "16px 0 0 0",
          },
          [theme.breakpoints.up('md')]: {
            margin: "20px 0 0 0",
          },
          [theme.breakpoints.up('lg')]: {
            margin: "24px 0 0 0",
          },
          [theme.breakpoints.up('xl')]: {
            margin: "28px 0 0 0",
          },
    },
    formTitle: {
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: 300,
        color: "#303339",
        margin: "0 0 8px 0",
        [theme.breakpoints.down('xs')]: {
            fontSize: 18,
            margin: "0 0 6px 0",
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 20,
            margin: "0 0 8px 0",
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 22,
            margin: "0 0 10px 0",
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 25,
            margin: "0 0 12px 0",
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 28,
            margin: "0 0 16px 0",
          },
    },
    inputElement: {
        width: "80%",
        margin: "6px 0",
        [theme.breakpoints.down('xs')]: {
            margin: "4px 0",
          },
          [theme.breakpoints.between('xs, sm')]: {
            margin: "6px 0",
          },
          [theme.breakpoints.up('md')]: {
            margin: "6px 0",
          },
          [theme.breakpoints.up('lg')]: {
            margin: "8px 0",
          },
          [theme.breakpoints.up('xl')]: {
            margin: "10px 0",
          },
    },
    input: {
        textAlign: "center",
        '&::placeholder': {
          fontFamily: "Poppins",
          fontWeight: "300",
          fontSize: 13,
          color: '#323643',
          opacity: 1,
          [theme.breakpoints.down('xs')]: {
            fontSize: 12,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 13,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 13,
          },
          [theme.breakpoints.up('lg')]: {
            // fontSize: 14.2,
            fontSize: 14.2,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 16,
          },
        },
    },
    MuiInput: {
      "& .MuiOutlinedInput-root": {
          borderRadius: "27px",
      },
    //   "& .MuiOutlinedInput-notchedOutline": {
    //     borderColor: "rgba(50, 54, 67, 0.16) !important",
    //   },
      "& .MuiOutlinedInput-input": {
          height: "50px",
          padding: 0,
          [theme.breakpoints.down('xs')]: {
            height: "46px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            height: "50px",
          },
          [theme.breakpoints.up('md')]: {
            height: "52px",
          },
          [theme.breakpoints.up('lg')]: {
            height: "54px",
          },
          [theme.breakpoints.up('xl')]: {
            height: "64px",
          },
      },
    },
    submitButton: {
        height: "50px",
        borderRadius: "27px",
        border: "solid 1px rgba(50, 54, 67, 0.16)",
        backgroundColor: "#f2f4f4",
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: 300,
        color: "#323643",
        textTransform: "none",
        [theme.breakpoints.down('xs')]: {
            height: "46px",
            fontSize: 12,
          },
          [theme.breakpoints.between('xs, sm')]: {
            height: "50px",
            fontSize: 13,
          },
          [theme.breakpoints.up('md')]: {
            height: "52px",
            fontSize: 13,
          },
          [theme.breakpoints.up('lg')]: {
            height: "54px",
            fontSize: 14.2,
          },
          [theme.breakpoints.up('xl')]: {
            height: "64px",
            fontSize: 16,
          },
    },
    smContainer: {
        margin: "20px 0",
        [theme.breakpoints.down('xs')]: {
            margin: "18px 0",
          },
          [theme.breakpoints.between('xs, sm')]: {
            margin: "20px 0",
          },
          [theme.breakpoints.up('md')]: {
            margin: "24px 0",
          },
          [theme.breakpoints.up('lg')]: {
            margin: "32px 0",
          },
          [theme.breakpoints.up('xl')]: {
            margin: "36px 0",
          },
    },
    smTxt: {
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: 300,
        color: "#303339",
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
          },
          [theme.breakpoints.between('xs, sm')]: {
            fontSize: 13,
          },
          [theme.breakpoints.up('md')]: {
            fontSize: 14.2,
          },
          [theme.breakpoints.up('lg')]: {
            // fontSize: 14.2,
            fontSize: 16,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 18,
          },
    },
    smButtonsWrapper: {
        width: "80%",
        margin: "12px 0 0 0",
        [theme.breakpoints.down('xs')]: {
            margin: "4px 0 0 0",
          },
    },
    smElement: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            margin: "8px 0 0 0",
          },
    },
    smElementAuth: {
        height: "50px",
        width: "98%",
        borderRadius: "27px !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none !important",
        border: "1px solid rgba(50, 54, 67, 0.16) !important",
        [theme.breakpoints.down('xs')]: {
            height: "46px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            height: "50px",
          },
          [theme.breakpoints.up('md')]: {
            height: "52px",
          },
          [theme.breakpoints.up('lg')]: {
            height: "54px",
          },
          [theme.breakpoints.up('xl')]: {
            height: "64px",
          },
    }
})  

export default styles;