import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.brand}>Vaykay</h1>

      <div className={styles.content}></div>
    </header>
  );
}
