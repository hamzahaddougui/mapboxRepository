import Router from "next/router";
import styles from './DetailNeighborhood.module.css'

import { makeStyles } from '@material-ui/core/styles';
import { 
    CssBaseline,
    Typography,
    Paper,
 } 
 from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        width: "100vw",
        height: "100vh",
    },
    jumboBackground:{
        backgroundColor: "#9A9895",
        backgroundImage: "url(/map_head.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "22%",
        position:'fixed'
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
    paper:{
        width: "827px",
        height: "85%",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        top: "2%",
        borderRadius: "24px",
        boxShadow: '0 5px 18px 0 rgba(227,228,254,0.63)'
    },
    title:{
        width: "153px",
        height: "41px",
        backgroundColor: "#FFF",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0 0 34px 34px"
    },
    titleTxt:{
        fontFamily: "Poppins",
        fontSize: 16.02,
        textAlign: "center",
        textTransform: "Capitalize"
    },
    imgSlider:{
        width: "100%",
        height: "547px",
        backgroundColor: "#575FF9",
        borderRadius: "24px 24px 0 0",
        position: "relative"
    },
    scoreBall:{
        width: "71px",
        height: "41px",
        backgroundColor: "#FFF",
        borderRadius: "20.5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "26px",
        left: "22px"
    },
    score:{
        fontFamily: "Poppins",
        fontSize: 16.02,
        color: "#575FF9",
        fontWeight: "bold"
    }
}));

const index = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.jumboBackground}>
                <div
                    className={classes.backContainer}
                    onClick={() => {
                        Router.push("/neighborhood");
                    }}
                    >
                    <img className={classes.backIcon} src="/back.svg" alt="backButton"></img>
                    <div className={classes.backText}>Map View</div>
                </div>
            </div>
            <Paper className={classes.paper}>
                    <div className={classes.imgSlider}>
                        <div className={classes.title}>
                            <Typography variant="h5" className={classes.titleTxt}>south beach</Typography>
                        </div>

                        <div className={classes.scoreBall}>
                            <Typography variant="h5" className={classes.score}>90%</Typography>
                        </div>
                    </div>
            </Paper>
        </div>
    )
}

export default index
