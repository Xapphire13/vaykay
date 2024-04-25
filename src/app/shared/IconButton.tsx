import React from "react";
import * as styles from "./IconButton.css";
import cx from "classnames";

export interface IconButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function IconButton({ className, children }: IconButtonProps) {
  return (
    <button className={cx(styles.container, className)}>{children}</button>
  );
}
