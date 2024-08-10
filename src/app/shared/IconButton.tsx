import React from "react";
import * as styles from "./IconButton.css";
import cx from "classnames";
import Link from "next/link";

export interface IconButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

export default function IconButton({
  className,
  children,
  href,
}: IconButtonProps) {
  if (href) {
    return (
      <Link className={cx(styles.container, className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cx(styles.container, className)}>{children}</button>
  );
}
