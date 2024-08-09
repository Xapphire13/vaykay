import React from "react";
import * as styles from "./SideMenu.css";

interface SideMenuChoiceProps {
  icon: React.ReactNode;
  iconText: React.ReactNode;
}

export default function SideMenuChoice({
  icon,
  iconText,
}: SideMenuChoiceProps) {
  return (
    <>
      <div className={styles.indvContainer}>
        <button>{icon}</button>
        <div className={styles.description}>{iconText}</div>
      </div>
    </>
  );
}
