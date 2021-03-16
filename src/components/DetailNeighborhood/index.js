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
        height: "897px",
        backgroundColor: "purple"
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
                <Paper className={classes.paper}>

                </Paper>
            </div>
        </div>
    )
}

export default index
