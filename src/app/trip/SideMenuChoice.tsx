import React from "react";
import * as styles from "./SideMenu.css";
import Link from "next/link";

interface SideMenuChoiceProps {
  icon: React.ReactNode;
  iconText: React.ReactNode;
  href?: string;
}

export default function SideMenuChoice({
  icon,
  iconText,
  href,
}: SideMenuChoiceProps) {
  const content = (
    <div className={styles.indvContainer}>
      <button>{icon}</button>
      <div className={styles.description}>{iconText}</div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
