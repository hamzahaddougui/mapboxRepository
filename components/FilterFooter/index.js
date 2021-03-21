import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterFooter.module.css";
import { Typography } from "@material-ui/core";

const FilterFooter = ({ onClick }) => {
  const checked = useSelector(state => state.modules.filter.checkedValues);

  return checked.length > 0 ? (
    <div className={styles.bottomBox}>
      <div className={styles.navigation} onClick={onClick}>
        Next
      </div>

      <div style={{ position: "absolute", right: "4%", display: "flex", alignItems: "center" }}>
        <Typography style={{ fontSize: "10px", color: "#323643", opacity: "57%" }}>
          Powered by
        </Typography>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
      </div>
    </div>
  ) : (
    <div className={styles.invisibleBottomBox}></div>
  );
};

export default FilterFooter;
