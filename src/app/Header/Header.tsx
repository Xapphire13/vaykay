import React from "react";
import AppMenuButton from "./AppMenuButton";
import * as styles from "./Header.css";
import Link from "next/link";
import { getUser } from "../database/users";
import IconButton from "../shared/IconButton";
import { PersonCircle } from "react-bootstrap-icons";

export default async function Header() {
  const user = await getUser();

  return (
    <header className={styles.container}>
      <Link href="/">
        <h1 className={styles.brand}>Vaykay</h1>
      </Link>

      <div className={styles.content}>
        <div>Hello {user?.firstName}!</div>
        <IconButton label="Account" href="/account">
          <PersonCircle size={40} color="white" />
        </IconButton>
        <AppMenuButton />
      </div>
    </header>
  );
}
