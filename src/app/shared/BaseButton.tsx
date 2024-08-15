import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";
import styles from "./BaseButton.css";
import Link from "next/link";

export interface BaseButtonProps {
  children: string;
  onPress?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  href?: string;
  disabled?: boolean;
}

export default function BaseButton({
  children,
  className,
  onPress,
  type = "button",
  href,
  disabled,
}: BaseButtonProps) {
  if (href) {
    return (
      <Link className={classNames(styles.container, className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames(styles.container, className)}
      type={type}
      onClick={onPress}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
