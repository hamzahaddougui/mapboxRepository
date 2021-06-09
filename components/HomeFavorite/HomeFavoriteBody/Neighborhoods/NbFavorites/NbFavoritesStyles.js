const  image = "/NeighborhoodMiniCardImg.png";

const styles = (theme) => ({
    nbNumTxt: {
        fontFamily: "Poppins",
        fontSize: 14.3,
        fontWeight: 300,
        color: "#323643",
        marginBottom: "8px",
        "& span": {
            fontWeight: 600,
        }
    },
    navigationContainer: {
        overflowX: "auto",
        overflowY: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "4px 0",
        flexWrap: "nowrap !important",
        maxWidth: "100%",
    },
    navigationElement: {
        minWidth: "fit-content",
        border: "1.2px solid rgba(50, 54, 67, 0.5)",
        borderRadius: 20,
        fontFamily: "Poppins",
        fontSize: 12.7,
        fontWeight: 300,
        color: "#303339",
        textTransform: "capitalize",
        marginRight: "8px",
    },
    navigationElementSelected: {
        minWidth: "fit-content",
        border: "1.2px solid #323643",
        borderRadius: 20,
        backgroundColor: "rgba(50, 54, 67, 0.03)",
        fontFamily: "Poppins",
        fontSize: 12.7,
        fontWeight: 300,
        color: "#303339",
        textTransform: "capitalize",
        marginRight: "8px",
    },
    dotIcon: {
        height: "3px",
        width: "3px",
        margin: "0 3px"
    },
    sortContainer: {
        marginTop: "8px",
    },
    sortTxt: {
        fontFamily: "Poppins",
        fontSize: 12.7,
        fontWeight: 300,
        color: "rgba(50, 54, 67, 0.77)",
    },
    sortIcon: {
        marginLeft: "3px"
    },

    // Card Styles
    cardContainer: {
        maxWidth: "245px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            width: "205px",
          },
          [theme.breakpoints.between('xs, sm')]: {
            maxWidth: "245px",
          },
          [theme.breakpoints.up('md')]: {
            width: "245px",
          },
          [theme.breakpoints.up('lg')]: {
            width: "2'5px",
          },
          [theme.breakpoints.up('xl')]: {
            width: "345px",
          },
    },
    cardImage: {
        backgroundColor: "#ffffff",
        backgroundImage:  `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
        // margin: "0 4px",
        // width: "225px",
        width: "100%",
        height: "150px",
        cursor: "pointer",
        // marginBottom: "1em",
        // [theme.breakpoints.down('xs')]: {
        //   width: "185px",
        //   height: "126px",
        // },
        // [theme.breakpoints.between('xs, sm')]: {
        //   width: "225px",
        //   height: "150px",
        // },
        // [theme.breakpoints.up('md')]: {
        //   width: "225px",
        //   height: "150px",
        // },
        // [theme.breakpoints.up('lg')]: {
        //   // width: "257px",
        //   // height: "171px",
        //   width: "225px",
        //   height: "150px",
        // },
        // [theme.breakpoints.up('xl')]: {
        //   width: "325px",
        //   height: "200px",
        // },
    },
    heartIcon: {
        height: "22px",
        width: "22px",
        margin: "13px 12px 0 0",
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
          height: "18px",
          width: "18px",
          margin: "10px 9px 0 0",
        },
        [theme.breakpoints.between('xs, sm')]: {
          height: "22px",
          width: "22px",
          margin: "13px 12px 0 0",
        },
        [theme.breakpoints.up('md')]: {
          height: "22px",
          width: "22px",
          margin: "13px 12px 0 0",
        },
        [theme.breakpoints.up('lg')]: {
          // height: "24px",
          // width: "24px",
          // margin: "16px 15px 0 0",
          height: "22px",
          width: "22px",
          margin: "13px 12px 0 0",
        },
        [theme.breakpoints.up('xl')]: {
          height: "28px",
          width: "28px",
          margin: "20px 28px 0 0",
        },
    },
    title: {
        padding: "1em",
        textOverflow: "ellipsis",
        overflow: "hidden",
        color: "white",
        fontSize: 18,
        fontFamily: "Poppins",
        fontWeight: "600",
        textShadow: "0 2px 9px #303339",
        textAlign: "center",
        cursor: "pointer",
        whiteSpace: "nowrap",
        [theme.breakpoints.down('xs')]: {
          padding: "1 0 0.5em 0",
          fontSize: 15,
        },
        [theme.breakpoints.between('xs, sm')]: {
          padding: "1em",
          fontSize: 18,
        },
        [theme.breakpoints.up('md')]: {
          padding: "1em",
          fontSize: 18,
        },
        [theme.breakpoints.up('lg')]: {
          padding: "1em",
          // fontSize: 20,
          fontSize: 18,
        },
        [theme.breakpoints.up('xl')]: {
          padding: "1.5em 1em 1em 1em",
          fontSize: 22,
        },
      },
      scoreContainerFav: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff0061",
        opacity: 0.9,
        boxShadow: "0 3px 7px 0 rgba(250, 2, 98, 0.7)",
        margin: "8px 12px",
        [theme.breakpoints.down('xs')]: {
          width: "28px",
          height: "28px",
          margin: "8px",
        },
        [theme.breakpoints.between('xs, sm')]: {
          width: "30px",
          height: "30px",
          margin: "8px 12px",
        },
        [theme.breakpoints.up('md')]: {
          width: "30px",
          height: "30px",
          margin: "8px 12px",
        },
        [theme.breakpoints.up('lg')]: {
          // width: "35px",
          // height: "35px",
          // margin: "12px",
          width: "30px",
          height: "30px",
          margin: "8px 12px",
        },
        [theme.breakpoints.up('xl')]: {
          width: "38px",
          height: "38px",
          margin: "12px",
        },
      },
      scoreValue: {
        color: "#FFF",
        fontSize: 11,
        fontFamily: "Poppins",
        fontWeight: "600",
        [theme.breakpoints.down('xs')]: {
          fontSize: 9,
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 11,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 11,
        },
        [theme.breakpoints.up('lg')]: {
          // fontSize: 12,
          fontSize: 11,
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: 14,
        },
      },
      homesNumTxt: {
        fontFamily: "Poppins",
        fontSize: 14.2,
        fontWeight: 600,
        color: "#303339",
        marginTop: "8px",
      },
      itemContainer: {
        // padding: "0.5em 0.5em 0.5em 0.5em !important",
        width: "100% !important"
      },
      filterName: {
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: 400,
        // maxWidth: "10em",
        maxWidth: "50%",
        [theme.breakpoints.down('xs')]: {
          fontSize: 13,
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 13,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 14.24,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 14.24,
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: 16.02,
        },
      },

      progressBar: {
        height: "100%",
        backgroundColor: "#575FF9",
        // position: "relative",
        position: "absolute",
      },
      progressContainer: {
        margin: "0.5em 1em 0.5em 0em",
        height: "19px",
        width: "95px",
        backgroundColor: "#e7e7e7",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        [theme.breakpoints.down('xs')]: {
          height: "18px",
          width: "95px",
        },
        [theme.breakpoints.between('xs, sm')]: {
          height: "19px",
          width: "102px",
        },
        [theme.breakpoints.up('md')]: {
          height: "20px",
          width: "125px",
        },
        [theme.breakpoints.up('lg')]: {
          height: "20px",
          width: "129px",
        },
        [theme.breakpoints.up('xl')]: {
          height: "20px",
          width: "129px",
        },
      },
      progressTxt: {
        fontFamily: "Poppins",
        fontSize: 13.5,
        fontWeight: 600,
        color: "#FFF",
        position: "relative",
        [theme.breakpoints.down('xs')]: {
          fontSize: 13,
        },
        [theme.breakpoints.between('xs, sm')]: {
          fontSize: 13.5,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 14.24,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 14.24,
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: 16.02,
        },
        // position: "absolute"
      },



    "@global": {
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          outline: "1px solid slategrey",
        },
      },
});

export default styles;