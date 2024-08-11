import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";
import styles from "./PrimaryButton.css";

interface PrimaryButtonProps {
  children: string;
  onPress?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
}

export default function PrimaryButton({
  children,
  onPress,
  type = "button",
  className,
}: PrimaryButtonProps) {
  return (
    <button
      className={classNames(styles.container, className)}
      type={type}
      onClick={onPress}
    >
      {children}
    </button>
  );
}
