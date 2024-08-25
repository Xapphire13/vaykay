import type { ButtonProps } from "@nextui-org/button";
import { Button } from "@nextui-org/button";
import styles from "./SecondaryButton.css";
import classNames from "classnames";

export default function SecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      color="secondary"
      variant="bordered"
      className={classNames(styles.container, className)}
      {...props}
    />
  );
}
