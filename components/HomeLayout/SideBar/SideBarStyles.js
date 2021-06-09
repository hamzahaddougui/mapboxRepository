const styles = (theme) => ({
    sideContainerClosed:{
        height: "100vh",
        width: "57px",
        boxShadow: "0 2px 4px 0 rgba(14, 31, 53, 0.12)",
        backgroundColor: "#f3f3f3",
        position: "fixed",
        top: 0,
        left: 0,
        paddingTop: "1.5em",
        zIndex: 10,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        // display: "flex",
        // alignItems: "center"
    },
    sideContainerOpen:{
        height: "100vh",
        width: "240px",
        boxShadow: "0 2px 4px 0 rgba(14, 31, 53, 0.12)",
        backgroundColor: "#f3f3f3",
        position: "fixed",
        top: 0,
        left: 0,
        paddingTop: "1.5em",
        zIndex: 10,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        // display: "flex",
        // alignItems: "center"
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logoOpenIcon: {
      cursor: "pointer"
    },
    logoIcon: {
        height: "14px",
        width: "45px",
        // marginLeft: "5px",
        cursor: "pointer"
    },
    listWrapper: {
        "& .MuiListItem-root.Mui-selected": {
            backgroundColor: "transparent"
        }
    },
    listContainer: {
        marginTop: "36px",
    },
    listIconContainer:{
        marginTop: "16px",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    listIconWrapper: {
        minWidth: 0,
        marginRight: "16px" 
    },
    listIcon: {
        height: "20px",
        width: "20px",
    },
    listTxt: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: 500,
        color: "#323643",
        textTransform: "Capitalize",
        margin: 0,
        "& .MuiListItemText-primary": {
            fontWeight: 500, 
            fontSize: 12,
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
                fontSize: 14,
              },
              [theme.breakpoints.up('xl')]: {
                fontSize: 14.3,
              },
        },
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
            fontSize: 14,
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 14.3,
          },
    }
});

export default styles;