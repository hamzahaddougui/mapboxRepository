import React from "react";
import styles from "./DropDownMenu.module.css";

const DropDownMenu = ({ open }) => {
  return (
    open && (
      <div className={styles.dropDownContent}>
        <p className={styles.dropDownItem}>Settlement</p>
        <ul>
          <li className={styles.dropDownItem}>Village</li>
          <li className={styles.dropDownItem}>Beach access</li>
          <li className={styles.dropDownItem}>Below market homes</li>
        </ul>
        <p className={styles.dropDownItem}>Zoning</p>
        <ul>
          <li className={styles.dropDownItem}>Low crime rate</li>
          <li className={styles.dropDownItem}>Clean air</li>
          <li className={styles.dropDownItem}>Walkable</li>
          <li className={styles.dropDownItem}>Quality top water</li>
          <li className={styles.dropDownItem}>Medical facilities</li>
          <li className={styles.dropDownItem}>Young population</li>
          <li className={styles.dropDownItem}>Very conservative</li>
        </ul>
        <p className={styles.dropDownItem}>Housing</p>
        <ul>
          <li className={styles.dropDownItem}>Below market homes</li>
          <li className={styles.dropDownItem}>Below market rentals</li>
          <li className={styles.dropDownItem}>High home ownership</li>
          <li className={styles.dropDownItem}>Low vacancy rate</li>
          <li className={styles.dropDownItem}>Newer housing</li>
        </ul>
      </div>
    )
  );
};

export default DropDownMenu;
