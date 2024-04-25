import React from "react";
import { List } from "react-bootstrap-icons";
import IconButton from "../shared/IconButton";
import * as styles from "./AppMenuButton.css";

export default function AppMenuButton() {
  return (
    <IconButton className={styles.container}>
      <List size={40} color="white" />
    </IconButton>
  );
}
