import React from "react";
import DropDownMenu from "./DropDownMenu";
import * as styles from "./MenuBar.css";

export default function MenuBar() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Trip Library</div>
      <div className={styles.filters}>
        <DropDownMenu />
      </div>
      <div>Action buttons</div>
    </div>
  );
}
