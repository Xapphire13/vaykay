import React from "react";
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu() {
  return (
    <>
      <div className={styles.dropdown_menu}>
        <button className={styles.dropdown_button}>Dropdown</button>
        <div className={styles.dropdown_content}>
          <a href="#">Cats</a>
          <a href="#">Many Dogs</a>
        </div>
      </div>
    </>
  );
}
