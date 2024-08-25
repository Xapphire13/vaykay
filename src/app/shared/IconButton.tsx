import React from "react";
import styles from "./IconButton.css";
import Link from "next/link";
import clsx from "clsx";

export interface IconButtonProps {
  className?: string;
  label: string;
  children: React.ReactNode;
  href?: string;
  onPress?: () => void;
}

export default function IconButton({
  label,
  className,
  children,
  href,
  onPress,
}: IconButtonProps) {
  if (href) {
    return (
      <Link
        aria-label={label}
        className={clsx(styles.container, className)}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      aria-label={label}
      className={clsx(styles.container, className)}
      onClick={onPress}
    >
      {children}
    </button>
  );
}
