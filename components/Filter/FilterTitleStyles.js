const styles = (theme) =>({
    jumbo: {
        background: "url(/map_head.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        // height: "150px",
        height: "100%",
        margin: "0 auto -16px",
        padding: "20px",
        [theme.breakpoints.down('xs')]: {
          padding: "20px",
        },
        [theme.breakpoints.between('xs, sm')]: {
          padding: "20px",
        },
        [theme.breakpoints.up('md')]: {
          padding: "20px",
        },
        [theme.breakpoints.up('lg')]: {
          padding: "20px",
        },
      },
      header: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
      },
    
      title: {
        fontFamily:"Poppins",
        fontSize: 24,
        color: "#323643",
        fontWeight: "600",
        margin: "24px 0 10px 0",
        letterSpacing: 0,
        textAlign: "center",
        lineHeight: 1.04,
        [theme.breakpoints.down('xs')]: {
          fontSize: 20,
          margin: "24px 0 12px 0",
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 24,
          margin: "24px 0 10px 0",
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 24,
          margin: "24px 0 12px 0",
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 30,
          margin: "24px 0 14px 0",
        },
      },
      subtitle: {
        fontFamily:"Poppins",
        fontSize: 15.02,
        fontWeight: "300",
        color: "#323643",
        margin: "8px 0 24px 0 ",
        letterSpacing: "normal",
        lineHeight: 1.44,
        [theme.breakpoints.down('xs')]: {
          fontSize: 12,
          margin: "6px 0 18px 0 ",
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 15.02,
          margin: "8px 0 24px 0 ",
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 19,
          margin: "10px 0 28px 0 ",
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 17,
          margin: "12px 0 19px 0 ",
        },
      },
});

export default styles;