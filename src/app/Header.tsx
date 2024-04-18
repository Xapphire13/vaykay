import React from "react";
import styles from "./Header.module.css";
import PrimaryMenuButton from "./PrimaryMenuButton";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.brand}>Vaykay</h1>

      <div className={styles.content}>
        <PrimaryMenuButton />
      </div>
    </header>
  );
}
