import styles from "./ButtonGroup.css";
import clsx from "clsx";

interface ButtonGroupProps {
  className?: string;
  children: React.ReactNode;
}

export default function ButtonGroup({ children, className }: ButtonGroupProps) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
