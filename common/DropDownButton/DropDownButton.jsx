import React from "react";

import styles from "./DropDownButton.module.css";

const DropDownButton = ({ onClick }) => {
  return (
    <div className={styles.dropDown} onClick={onClick}>
      <p className={styles.contentButton}>Percent match</p>
    </div>
  );
};

export default DropDownButton;
