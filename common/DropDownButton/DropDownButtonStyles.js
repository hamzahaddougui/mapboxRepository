const styles = (theme) => ({
    dropDown: {
        backgroundColor: "#323643",
        height: "40px",
        width: "200px",
        /* display: inline-flex; */
        cursor: "pointer",
        alignItems: "center",
        padding: "0 20px",  
        [theme.breakpoints.down('xs')]: {
            height: "30px",
            width: "130px",
            padding: "0 10px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            height: "40px",
            width: "200px",
            padding: "0 20px",
        },
        [theme.breakpoints.up('md')]: {
            height: "40px",
            width: "200px",
            padding: "0 20px",
        },
        [theme.breakpoints.up('lg')]: {
            height: "40px",
            width: "200px",
            padding: "0 20px",
        },
        [theme.breakpoints.up('xl')]: {
            height: "45px",
            width: "225px",
            padding: "0 25px",
        },
    },
    contentButton: {
        display: "flex",
        marginLeft: "12%",
        alignItems: "center",
        color: "#fff",
    },
    arrowIcon: {
        height: "12px",
        width: "12px",
        [theme.breakpoints.down('xs')]: {
            height: "9px",
            width: "10px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            height: "12px",
            width: "12px",
        },
        [theme.breakpoints.up('md')]: {
            height: "12px",
            width: "12px",
        },
        [theme.breakpoints.up('lg')]: {
            height: "12px",
            width: "12px",
        },
        [theme.breakpoints.up('xl')]: {
            height: "14px",
            width: "14px",
        },
    },
    percentMatchTxt: {
        color: "#FFF", 
        fontSize : 14.2, 
        marginRight: "32px",
        [theme.breakpoints.down('xs')]: {
            fontSize : 11, 
            marginRight: "10px",
        },
        [theme.breakpoints.between('xs, sm')]: {
            fontSize : 14.2, 
            marginRight: "32px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize : 14.2, 
            marginRight: "32px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize : 14.2, 
            marginRight: "32px",
        },
        [theme.breakpoints.up('xl')]: {
            fontSize : 16.02, 
            marginRight: "32px",
        },
    }
});

export default styles;