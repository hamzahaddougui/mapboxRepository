const styles = (theme) => ({
    popper: {
        marginTop: "8px",
    },
    root: {
        width: "239px",
        height: "fit-content",
        maxHeight: "360px",
        backgroundColor: "#FFF",
        borderRadius: "11.5px",
        boxShadow: "0 6px 12px 0 rgba(14, 31, 53, 0.08), 0 4px 8px 0 rgba(14, 31, 53, 0.1), 0 1px 4px 0 rgba(14, 31, 53, 0.12)",
        // padding: "24px 18px",
        padding: "8px 0px 14px",
    },
    ListTxt: {
        "& .MuiListItemText-primary": {
            fontFamily: "Poppins",
            fontSize: 14.3,
            fontWeight: 400,
            color: "#303339",
        },
        "& .MuiListItemText-secondary": {
            fontFamily: "Poppins",
            fontSize: 14.3,
            fontWeight: 400,
            color: "#303339",
        }
    },
    userDropDownDivider: {
        height: "1px",
        width: "88%",
        opacity: 0.18,
        border: "solid 1px #979797",
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
    },
});

export default styles;