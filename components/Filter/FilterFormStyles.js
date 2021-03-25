const styles = () => ({

    // FilterFormHeader Styles
    filterFormHeader: {
      marginBottom: "27px",
    },
    elementContainer: {
      maxWidth: "100px",
      cursor: "pointer"
    },
    iconContainer: {
      height: "66px",
      width: "66px",
      borderRadius: "50%",
      backgroundColor: "#FFF",
      border: "1px solid #F2F4F4",
      boxShadow: "0 2px 4px 0 rgba(50,54,67,0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    selectedIconContainer: {
      height: "78px",
      width: "78px",
      borderRadius: "50%",
      backgroundColor: "#323643",
      boxShadow: "0 2px 4px 0 rgba(50,54,67,0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      height: "30px",
      marginTop: "12px",
      display: "flex",
      alignItems: "center",
      textAlign: "center"
    },
    titleTxt: {
      fontSize: 12.24,
      color: "#323643",
      textTransform: "capitalize",
    },
    selectedTitleTxt: {
      fontSize: 14.24,
      color: "#323643",
      fontWeight: "bold",
      textTransform: "capitalize",
    },

    // FilterForm Styles
    checkyButton: {
      height: "40px",
      width: "216px",
      border: "1px solid #323643",
      borderRadius: "24px",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    checkyButtonActive: {
      height: "40px",
      width: "216px",
      borderRadius: "24px",
      backgroundColor: "#323643",
      color: "#FFF",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    filterFormRoot: {
      paddingBottom: "90px",
    }
  });
    
  export default styles;