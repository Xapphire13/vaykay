import React from "react";
import styles from "./DropDownMenu.module.css";
import { ChevronDown } from "react-bootstrap-icons";

export default function DropDownMenu() {
  return (
    <>
      <div className={styles.dropdown_menu}>
        <button className={styles.dropdown_button}>
          Dropdown Choices{" "}
          <span className={styles.dropdown_chevron}>
            <ChevronDown />
          </span>
        </button>
        <ul className={styles.dropdown_content}>
          <li className={styles.dropdown_item}>Cats</li>
          <li className={styles.dropdown_item}>Many Dogs</li>
          <li className={styles.dropdown_item}>Pink Lemonade Drink</li>
          <li className={styles.dropdown_item}>Turtles</li>
        </ul>
      </div>
    </>
  );
}
