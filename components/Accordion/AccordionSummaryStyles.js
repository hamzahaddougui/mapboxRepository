const AccordionSummaryStyles = (theme) => ({
    root: {
      backgroundColor: 'transparent',
      borderRadius: "28px",
      border: "1px solid #979797",
      // borderBottom: '1px solid rgba(0, 0, 0, .125)',
      // marginBottom: -1,
      minHeight: 40,
      padding: "0px 34px",
      '&$expanded': {
        minHeight: 40,
        border: "1px solid #979797",
        borderRadius: "28px",
      },
      [theme.breakpoints.down('xs')]: {
        maxHeight: "40px",
        padding: "0px 24px",
      },
      [theme.breakpoints.between('xs, sm')]: {
        maxHeight: "52px",
        padding: "0px 34px",
      },
      [theme.breakpoints.up('md')]: {
        maxHeight: "52px",
        padding: "0px 34px",
      },
      [theme.breakpoints.up('lg')]: {
        maxHeight: "52px",
        padding: "0px 34px",
      },
      [theme.breakpoints.up('xl')]: {
        maxHeight: "62px",
        padding: "0px 48px",
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
        [theme.breakpoints.down('xs')]: {
          margin: '12px 0',
        },
        [theme.breakpoints.between('xs, sm')]: {
          margin: '16px 0',
        },
        [theme.breakpoints.up('md')]: {
          margin: '16px 0',
        },
        [theme.breakpoints.up('lg')]: {
          margin: '16px 0',
        },
        [theme.breakpoints.up('xl')]: {
          margin: '16px 0',
        },
      },
      [theme.breakpoints.down('xs')]: {
        margin: '12px 0',
      },
      [theme.breakpoints.between('xs, sm')]: {
        margin: '16px 0',
      },
      [theme.breakpoints.up('md')]: {
        margin: '16px 0',
      },
      [theme.breakpoints.up('lg')]: {
        margin: '16px 0',
      },
      [theme.breakpoints.up('xl')]: {
        margin: '16px 0',
      },
    },
    expanded: {},
});

export default AccordionSummaryStyles;