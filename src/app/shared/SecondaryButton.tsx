import type { ButtonProps } from "@nextui-org/button";
import { Button } from "@nextui-org/button";
import styles from "./SecondaryButton.css";
import clsx from "clsx";

export default function SecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      color="secondary"
      variant="bordered"
      className={clsx(styles.container, className)}
      {...props}
    />
  );
}
