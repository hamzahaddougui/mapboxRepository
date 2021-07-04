const styles = (theme) => ({

    // First Section
    sectionContainer: {
        padding: "24px 16px",
        [theme.breakpoints.down('xs')]: {
            padding: "16px 12px",
        },
    },
    sectionTitle: {
        fontFamily: "Poppins",
        fontSize: 14.2,
        fontWeight: 400,
        color: "#323643",
    },
    sectionContent: {
        marginTop: "16px",
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: "center",
        },
    },
    fitToContentContainer: {
        width: "fit-content",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    },
    thumbnailImageContainer: {
        display: "flex",
        justifyContent: "center",
    },
    thumbnailImage: {
        objectFit: "contain",
        width: "190px",
        height: "190px",
        backgroundColor: "#ea609c",
        borderRadius: "50%",
    },
    editPhotoWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "14px",
    },
    editPhotoIcon: {
        height: "14px",
        width: "18px",
        margin: "0 5px",
    },
    editPhotoTxt: {
        fontFamily: "Poppins",
        fontSize: 14.3,
        fontWeight: 500,
        color: "#323643",
        margin: "0 5px",
    },
    nameInputsContainer: {
        width: "fit-content", 
        marginLeft: "30px",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginTop: "16px",
            width: "100%"
        },
    },
    inputLabelContainer: {
        marginBottom: "7px",
    },
    inputLabelTxt: {
        fontFamily: "Poppins",
        fontSize: 14.3,
        fontWeight: 500,
        color: "#323643",
    },
    MuiInput: {
        "& .MuiOutlinedInput-root": {
            // border: "solid 1px rgba(50, 54, 67, 0.16)",
            borderRadius: "27px",
            padding: "0 14px",
            fontFamily: "Poppins",
            fontSize: 14.3,
            fontWeight: 300,
            color: "#323643",
        },
        "& .MuiOutlinedInput-input": {
            padding: "14px 14px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "solid 1px rgba(50, 54, 67, 0.16)",
        },
        "& .MuiOutlinedInput-multiline": {
            padding: "4px 20px !important",
            borderRadius: "35px",
        }
    },
    inputButton: {
        fontFamily: "Poppins",
        fontSize: 12.7,
        fontWeight: 300,
        color: "#323643",
        textTransform: "none",
        textDecoration: "underline",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    inputSpaceMargin: {
        marginTop: "20px",
    },
    saveButton: {
        fontFamily: "Poppins",
        fontSize: 14.3,
        fontWeight: 500,
        color: "#FFF",
        textTransform: "none",
        backgroundColor: "#323643",
        borderRadius: "27px",
        padding: "8px 18px",
        marginRight: "8px",
        "&:hover": {
            backgroundColor: "#323643"
        }
    },
    cancelButton: {
        fontFamily: "Poppins",
        fontSize: 14.3,
        fontWeight: 500,
        color: "#323643",
        textTransform: "none",
        backgroundColor: "transparent",
        borderRadius: "27px",
        padding: "8px 18px",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },

    sectionDivider: {
        height: "1px",
        width: "95%",
        opacity: 0.16,
        border: "1px solid #979797",
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
    },

    // Second Section
    contactContainer: {
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: "center",
        },
    },
    doubleLabelContainer: {
        marginBottom: "7px",
    },
    verifiedTxt: {
        fontFamily: "Poppins",
        fontSize: 11.3,
        fontWeight: 300,
        color: "#323643",
        marginRight: "4px",
    },
    verifiedIcon: {
        display: "flex",
        alignItems: "center",
        height: "14px",
        width: "14px",
    },
    PhoneInputsContainer: {
        width: "fit-content", 
        marginLeft: "30px",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginTop: "16px",
            width: "100%"
        },
        [theme.breakpoints.down('641')]: {
            marginLeft: 0,
            marginTop: "16px",
            // width: "100%"
        },
        [theme.breakpoints.down('652')]: {
            marginLeft: "0px",
            // marginTop: "16px",
            // width: "100%"
        },
        // [theme.breakpoints.between('642', '652')]: {
        //     marginLeft: 0,
        //     marginTop: "16px",
        //     // width: "100%"
        // },
        [theme.breakpoints.between('652', '672')]: {
            marginLeft: "12px",
            marginTop: "0px",
            // width: "100%"
        },
    },
    addressInputContainer: {
        maxWidth: "508px",
    },
    normalInputSize: {
        minWidth: "246px",
    },

    // Third Section
    confirmPasswordContainer: {
        width: "fit-content", 
        marginLeft: "30px",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginTop: "16px",
            width: "100%"
        },
        [theme.breakpoints.down('641')]: {
            marginLeft: 0,
            // marginTop: "16px",
            // width: "100%"
        },
        [theme.breakpoints.down('652')]: {
            marginLeft: "0px",
            // marginTop: "16px",
            // width: "100%"
        },
        // [theme.breakpoints.between('642', '652')]: {
        //     marginLeft: 0,
        //     marginTop: "16px",
        //     // width: "100%"
        // },
        [theme.breakpoints.between('652', '672')]: {
            marginLeft: "12px",
            marginTop: "0px",
            // width: "100%"
        },
    },
    innerSectionContainer: {
        padding: "0 16px 24px 16px",
    },
    sectionSubTitle: {
        fontFamily: "Poppins",
        fontSize: 14.3,
        fontWeight: 300,
        color: "#323643",
    },
    resetPasswordIcon: {
        display: "flex",
        alignItems: "center",
        height: "17px",
        width: "15px",
        marginRight: "8px"
    },

    // Fourth Section
    lastSectionContainer: {
        padding: "24px 16px 100px 16px",
        [theme.breakpoints.down('xs')]: {
            padding: "24px 16px 48px 16px",
        },
    },
    deleteAccountButton: {
        maxWidth: "177px",
        fontFamily: "Poppins",
        fontSize: 14.3,
        fontWeight: 500,
        color: "#FFF",
        textTransform: "none",
        backgroundColor: "#323643",
        borderRadius: "27px",
        padding: "8px 18px",
        "&:hover": {
            backgroundColor: "#323643"
        }
    },
});

export default styles;