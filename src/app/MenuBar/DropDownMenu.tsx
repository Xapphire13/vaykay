import React from "react";
import * as styles from "./DropDownMenu.css";
import { ChevronDown } from "react-bootstrap-icons";

export default function DropDownMenu() {
  return (
    <div className={styles.menu}>
      <button className={styles.button}>
        Dropdown Choices{" "}
        <span className={styles.chevron}>
          <ChevronDown />
        </span>
      </button>
      <ul className={styles.content}>
        <li className={styles.item}>Cats</li>
        <li className={styles.item}>Many Dogs</li>
        <li className={styles.item}>Pink Lemonade Drink</li>
        <li className={styles.item}>Turtles</li>
      </ul>
    </div>
  );
}
