import React from "react";
import AppMenuButton from "./AppMenuButton";
import * as styles from "./Header.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.brand}>Vaykay</h1>

      <div className={styles.content}>
        <AppMenuButton />
      </div>
    </header>
  );
}
