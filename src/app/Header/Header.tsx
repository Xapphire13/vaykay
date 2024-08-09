import React from "react";
import AppMenuButton from "./AppMenuButton";
import * as styles from "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <h1 className={styles.brand}>Vaykay</h1>
      </Link>

      <div className={styles.content}>
        <AppMenuButton />
      </div>
    </header>
  );
}
