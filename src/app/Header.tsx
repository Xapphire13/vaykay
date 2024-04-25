import React from "react";
import * as styles from "./Header.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.brand}>Vaykay</div>
      <div className={styles.content}>Menu</div>
    </header>
  );
}
