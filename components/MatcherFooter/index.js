import React from "react";
import { useRouter } from "next/router";
import { Button, makeStyles, Typography } from "@material-ui/core";
import styles from "./MatcherFooter.module.css";
import muiStyles from "./MatcherFooterStyle.js";

const useStyles = makeStyles(muiStyles);

const MatcherFooter = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleStartMatcher = () => {
    router.push("/matcher/start");
    // setOpen(!open);
    // console.log(current);
  };

  return (
    <div className={styles.bottomBox}>
      <div onClick={handleStartMatcher} style={{ cursor: "pointer" }}>
        <div className={styles.thunder}>
          <img src="/thunder.svg" alt="thunder" />
        </div>
        <Button className={classes.matchButton}>Start the Matcher</Button>
      </div>

      <div style={{ position: "absolute", right: "4%", display: "flex", alignItems: "center" }}>
        <Typography style={{ fontSize: "10px", color: "#323643", opacity: "57%" }}>
          Powered by
        </Typography>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default MatcherFooter;
