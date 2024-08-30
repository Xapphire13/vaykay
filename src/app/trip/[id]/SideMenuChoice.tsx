import React from "react";
import styles from "./SideMenu.css";
import Link from "next/link";
import clsx from "clsx";

interface SideMenuChoiceProps {
  icon: React.ReactNode;
  iconText: React.ReactNode;
  href?: string;
  isActive?: boolean;
}

export default function SideMenuChoice({
  icon,
  iconText,
  href,
  isActive = false,
}: SideMenuChoiceProps) {
  const content = (
    <div className={clsx(styles.indvContainer, isActive && styles.activeTab)}>
      <button>{icon}</button>
      <div className={styles.description}>{iconText}</div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
