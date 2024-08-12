import type { BaseButtonProps } from "./BaseButton";
import BaseButton from "./BaseButton";
import styles from "./SecondaryButton.css";

type SecondaryButtonProps = BaseButtonProps;

export default function SecondaryButton(props: SecondaryButtonProps) {
  return <BaseButton {...props} className={styles.container} />;
}
