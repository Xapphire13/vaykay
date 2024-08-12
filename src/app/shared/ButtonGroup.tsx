import classNames from "classnames";
import styles from "./ButtonGroup.css";

interface ButtonGroupProps {
  className?: string;
  children: React.ReactNode;
}

export default function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
}
