const AccordionDetailsStyles = (theme) => ({
    root: {
        padding: "16px 0",
        display: "grid",
        alignItems: "center",
        // marginLeft: "34px",
        [theme.breakpoints.down('xs')]: {
            padding: "12px 0",
        },
        [theme.breakpoints.between('xs, sm')]: {
            padding: "16px 0",
        },
        [theme.breakpoints.up('md')]: {
            padding: "16px 0",
        },
        [theme.breakpoints.up('lg')]: {
            padding: "16px 0",
        },
        [theme.breakpoints.up('xl')]: {
            padding: "18px 0",
        },
    },
});

export default AccordionDetailsStyles;