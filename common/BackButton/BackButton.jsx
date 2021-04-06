import React from "react";
import styles from "./BackButton.module.css";

const BackButton = ({ onClick }) => {
  return (
    <div className={styles.backContainer} onClick={onClick}>
      <img className={styles.backIcon} src="/back.svg" alt="backButton"></img>
      <div className={styles.backText}>Back</div>
    </div>
  );
};

export default BackButton;
