import React from "react";
import * as styles from "./MenuBar.css";

export default function MenuBar() {
  return (
    <div className={styles.container}>
      <div className={styles.filters}>Filters</div>
      <div className={styles.actions}>Action buttons</div>
    </div>
  );
}
