const NeighborhoodMiniCardImg = "/NeighborhoodMiniCardImg.png";
const addNbIcon = "/addNeighborhood.svg";

const styles = (theme) => ({

    // Neighborhood Card Styles
    nCard_title: {
        color: "white",
        fontSize: 20,
        fontFamily: "Poppins",
        fontWeight: "Bold",
        textAlign: "center",
        cursor: "pointer",
        whiteSpace: "nowrap",
      },
      nCard_score: {
        color: "white",
        fontSize: 12,
        fontFamily: "Poppins",
        fontWeight: "Bold",
      },
      nCard_heartIcon: {
        color: "white",
      },
      nCard_titleBar: {
        background:
          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      },
      nCard_wrapper: {
        backgroundColor: "#ffffff",
        backgroundImage: `url(${NeighborhoodMiniCardImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
        margin: "0 4px",
        width: "257px",
        cursor: "pointer",
        marginBottom: "1em",
      },
      nCard_HeartIconWrapper: {
        zIndex: 10,
      },
    
    // Add Neighborhood Card Styles
    addNghbr_wrapper: {
        backgroundColor: "white",
        backgroundImage: `url(${addNbIcon})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "center",
        backgroundPosition: "50%  35%",
        borderRadius: "24px",
        margin: "0 4px",
        width: "257px",
        // height: "100%",
        cursor: "pointer",
        marginBottom: "1em",
        zIndex: 1500,
        position: "relative",
      },
      addNghbr_text: {
        fontFamily: "Poppins",
        color: "#323643",
        fontSize: 16.02,
        fontWeight: "lighter",
        textAlign: "center",
        marginTop: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "6.7em",
        paddingBottom: "2em",
      },

      // Neighborhood List Bar Styles
      nList_root: {
        //display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: "transparent",
        // height: "210px",
        padding: "4px 0",
        position: "fixed",
        bottom: 0,
        // height: "25%",
        width: "100%",
        zIndex: "2",
        paddingBottom: "100px",
        "& .menu-wrapper": {
          width: "100% !important",
          overflowX: "scroll !important",
        },
      },
      nList_gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
        //marginTop: 'calc(100vh - 33%)',
      },
      nList_title: {
        color: "white",
        fontSize: 20,
        fontFamily: "Poppins",
        fontWeight: "Bold",
        textAlign: "center",
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%, -50%)",
        cursor: "pointer",
      },
      nList_score: {
        color: "white",
        fontSize: 12,
        fontFamily: "Poppins",
        fontWeight: "Bold",
      },
      nList_heartIcon: {
        color: "white",
      },
      nList_HeartIconWrapper: {
        position: "absolute",
        top: "18px",
        right: "21px",
      },
      nList_titleBar: {
        background:
          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      },
      nList_wrapper: {
        backgroundColor: "#323643",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 50)",
        borderRadius: "24px",
        margin: "0 4px",
        width: "257px",
        height: "100%",
        //cursor: "pointer",
      },

      // Neighborhood List Bar module CSS
      score: {
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#575ff9",
        opacity: 0.9,
        boxShadow: "0px 3px 7px 0px rgba(148, 95, 233, 71)",
        margin: "12px",
      },
      scoreFavorite: {
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff0061",
        opacity: 0.9,
        boxShadow: "0px 3px 7px 0px rgba(250, 2, 98, 70)",
        margin: "12px",
      }
});

export default styles;