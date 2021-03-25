const NeighborhoodMiniCardImg = "/NeighborhoodMiniCardImg.png";

const styles = (theme) => ({

    // Neighborhood Detail Styles
    root: {
        // width: "1000px",
        // height: "100vh",
      },
      jumboBackground: {
        backgroundColor: "#9A9895",
        backgroundImage: "url(/map_head.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "22%",
        position: "fixed",
      },
      backContainer: {
        position: "absolute",
        display: "inline-flex",
        margin: "30px 0 0 32px",
        cursor: "pointer",
      },
      backIcon: {
        width: "24px",
        height: "24px",
        display: "inline-flex",
        float: "left",
        alignItems: "center",
        marginRight: "4px",
      },
      backText: {
        display: "inline-flex",
        float: "left",
        alignItems: "center",
        margin: 0,
        fontFamily: "Poppins",
        fontSize: 12,
        color: "#323643",
      },
      paper: {
        // width: "730px",
        // height: "86%",
        // position: "absolute",
        // left: "50%",
        // transform: "translate(-50%)",
        // top: "2%",
        marginBottom: "2em",
        borderRadius: "24px",
        // boxShadow: "0 5px 18px 0 rgba(227,228,254,0.63)",
        // overflow: "auto",
        paddingBottom: "1em",
      },
      title: {
        width: "153px",
        height: "41px",
        backgroundColor: "#FFF",
        // position: "absolute",
        // left: "50%",
        // transform: "translate(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0 0 34px 34px",
      },
      titleTxt: {
        fontFamily: "Poppins",
        fontSize: 16.02,
        textAlign: "center",
        textTransform: "Capitalize",
      },
      imgSlider: {
        width: "100%",
        // height: "547px",
        height: "400px",
        // backgroundColor: "#575FF9",
        backgroundImage: `url(${NeighborhoodMiniCardImg})`,
        borderRadius: "24px 24px 0 0",
        position: "relative",
      },
      scoreBall: {
        width: "71px",
        height: "41px",
        backgroundColor: "#FFF",
        borderRadius: "20.5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "1em",
        // position: "absolute",
      },
      score: {
        fontFamily: "Poppins",
        fontSize: 16.02,
        color: "#575FF9",
        fontWeight: "bold",
      },
      gridList: {
        flexWrap: "nowrap",
        transform: "translateZ(0)",
        height: "60px",
        margin: 0,
      },
      progressBar: {
        // "& .MuiLinearProgress-root": {
        //   height: "22px",
        //   borderRadius: "8px",
        // },
        // borderRadius: "10px",
        height: "100%",
        backgroundColor: "#575FF9",
        position: "relative",
      },
      progressContainer: {
        margin: "0.5em 1em 0.5em 0em",
        height: "20px",
        width: "129px",
        backgroundColor: "#e7e7e7",
        borderRadius: "10px",
        overflow: "hidden",
        // right: "36px",
      },
      progressTxt: {
        // position: "absolute",
        // left: "50%",
        // transform: "translate(-50%)",
        // marginLeft: "3em",
        // marginTop: "-3px",
        color: "#FFF",
      },
      clearWrapper: {
        backgroundColor: "white",
        height: "68px",
        width: "68px",
        color: "#575FF9",
        boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
      },
      redoWrapper: {
        backgroundColor: "white",
        height: "48px",
        width: "48px",
        color: "#323643",
        boxShadow: "0 4px 8px 0 rgb(14 31 53 / 16%)",
      },
      favoriteWrapper: {
        backgroundColor: "white",
        height: "68px",
        width: "68px",
        color: "#FF0061",
        boxShadow: "0 16px 28px 0 rgb(14 31 53 / 16%)",
      },
      bigIcon: {
        fontSize: "38px",
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
      navigation: {
        width: "100%",
        height: "60px",
        position: "relative",
        marginBottom: "1em",
      },
      line: {
        width: "98%",
        border: "1px solid #f5f5f5",
        margin: 0,
        bottom: 0,
        left: "50%",
        transform: "translate(-50%)",
      },
      container: {
        display: "grid",
        gridGap: "4px",
        gridAutoColumns: "150px",
        gridTemplateRows: "60px",
        gridAutoFlow: "column",
        overflowX: "scroll",
        scrollSnapType: "x proximity",
      },
      navigationElement: {
        scrollSnapAlign: "center",
        padding: "2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        /* background:coral; */
        borderRadius: "8px",
        textAlign: "center",
      },
      category: {
        fontSize: 14.24,
        cursor: "pointer",
      },
      categoryActive: {
        border: "1px solid #323643",
        borderRadius: "16px",
        backgroundColor: "#e3e6e3",
        padding: "3px 16px",
        fontSize: 14.24,
        fontWeight: "bold",
        cursor: "pointer",
      },
      itemContainer: {
        borderInlineStartColor: "#e7e7e7",
        borderInlineStartWidth: "1px",
        borderInlineStartStyle: "solid",
        borderTopColor: "#e7e7e7",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        //padding: "0 1em !important",
      },
      table: {
        /* display: grid; */
        /* grid-gap: 0px; */
        width: "100%",
        /* grid-template-columns: 50% 50%; */
        /* height: 60px; */
        /* grid-auto-rows: 40px; */
        /* padding-bottom: 1em; */
        height: "calc(100vh - 700px)",
        borderBottomColor: "#e7e7e7",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        /* padding-bottom: 1em; */
        /* grid-auto-flow: column;
          
          overflow-x: scroll;
          scroll-snap-type: x proximity; */
      },
      tableElement: {
        scrollSnapAlign: "center",
        padding: "2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        /* background:coral; */
        border: "0.5px solid #f5f5f5",
        position: "relative",
      },
      filterName: {
        /* position: absolute; */
        /* left: 36px; */
        maxWidth: "10em",
      },
      iconsContainer: {
        alignItems: "center",
      }
      
});

export default styles;