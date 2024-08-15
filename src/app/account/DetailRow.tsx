import styles from "./DetailRow.css";

interface DetailRowProps {
  label: string;
  children: React.ReactNode;
}

export default function DetailRow({ label, children }: DetailRowProps) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}:</div>
      <div>{children}</div>
    </div>
  );
}
