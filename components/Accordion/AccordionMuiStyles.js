const AccordionMuiStyles = (theme) => ({
    root: {
        // border: '1px solid #979797',
        border: 'none',
        // borderRadius: "28px",
        marginBottom: "8px",
        boxShadow: 'none',
        '&:not(:last-child)': {
          // border: '1px solid #979797',
          border: 'none',
          marginBottom: "8px",
          borderRadius: "28px",
        },
        '&:last-child': {
            // border: '1px solid #979797',
            border: 'none',
            marginBottom: "8px",
            borderRadius: "28px",
          },
        '&:before': {
          display: 'none',
        },
        '&$expanded': {
          margin: 'auto',
          border: 'none'
        },
    },
    expanded: {},
});

export default AccordionMuiStyles;