const addNbIcon = "/addNeighborhood.svg";

const styles = () => ({

    // FavoriteListBar Styles
    root: {
        //display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: "transparent",
        // height: "210px",
        width: "100vw",
        // padding: "4px 0",
        // height: "150px",
        // margin: "0px 29px 0",
        "& .menu-item-wrapper": {
          verticalAlign: "top",
          marginTop: "1em",
        },
        "& .menu-wrapper": {
          width: "100%",
        },
      },
      gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
        //marginTop: 'calc(100vh - 33%)',
      },
      title: {
        color: "white",
        fontSize: 20,
        fontFamily: "Poppins",
        fontWeight: "Bold",
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
      },
      score: {
        color: "white",
        fontSize: 12,
        fontFamily: "Poppins",
        fontWeight: "Bold",
      },
      heartIcon: {
        color: "white",
      },
      HeartIconWrapper: {
        position: "absolute",
        top: "18px",
        right: "21px",
      },
      titleBar: {
        background:
          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      },
      wrapper: {
        backgroundColor: "#323643",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 50)",
        borderRadius: "24px",
        margin: "8px 4px",
        //width: '257px',
      },
      addNeighborhoodPaper: {
        backgroundColor: "#ffffff",
        backgroundImage: `url(${addNbIcon})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundPosition: "center",
        // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        width: "257px",
        height: "175px",
        borderRadius: "24px",
        // padding: "1em 2em 2em 2em",
        marginRight: "0.6em",
        cursor: "pointer",
      },
      addNeighborhoodImg: {
        // width: "75px",
        // height: "71px",
        // marginTop: "24px",
      },
      addNeighborhoodTxt: {
        fontFamily: "Poppins",
        color: "#323643",
        fontSize: 16.02,
        fontWeight: "lighter",
        // height: "100%",
        // bottom: 0,
        // textAlign: "center",
        // marginTop: "8px",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      },
      addNeighborhoodWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      },
      score: {
        width: "35px",
        height: "34px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#575FF9",
        opacity: 0.9,
        boxShadow: "0px 3px 7px 0px rgba(148, 95, 233, 71)",
        position: "absolute",
        bottom: "17px",
        left: "20px",
    },
    scoreFavorite: {
        width: "35px",
        height: "34px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF0061",
        opacity: 0.9,
        boxShadow: "0px 3px 7px 0px rgba(250, 2, 98, 70)",
        position: "absolute",
        bottom: "17px",
        left: "20px",
    }
  });
    
  export default styles;