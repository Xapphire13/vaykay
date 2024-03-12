import React from "react";
import styles from "./MenuBar.module.css";

export default function MenuBar() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Trip Library</div>
      <div className={styles.filters}>Filters</div>
      <div>Action buttons</div>
    </div>
  );
}
