import React from "react";
import styles from "./SplittedButton.module.css";

const SplittedButton = ({ active1, active2, label1, label2, onClick1, onClick2 }) => {
  return (
    <div className={styles.splittedButtonView}>
      <div
        className={active1 ? styles.splittedButtonItemActive : styles.splittedButtonItem}
        onClick={onClick1}
      >
        {label1}
      </div>
      <div
        className={active2 ? styles.splittedButtonItemActive : styles.splittedButtonItem}
        onClick={onClick2}
      >
        {label2}
      </div>
    </div>
  );
};

export default SplittedButton;
