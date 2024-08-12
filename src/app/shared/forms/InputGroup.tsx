import styles from "./InputGroup.css";

interface InputGroupProps {
  children: React.ReactNode;
}

export default function InputGroup({ children }: InputGroupProps) {
  return <div className={styles.container}>{children}</div>;
}
