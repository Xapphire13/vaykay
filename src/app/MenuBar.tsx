import React from "react";
import * as styles from "./MenuBar.css";

export default function MenuBar() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Trip Library</div>
      <div className={styles.filters}>Filters</div>
      <div>Action buttons</div>
    </div>
  );
}
