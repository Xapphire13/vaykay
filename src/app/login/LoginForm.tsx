import { authenticate } from "../database/users";
import ButtonGroup from "../shared/ButtonGroup";
import Input from "../shared/forms/Input";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import styles from "./page.css";

interface LoginFormProps {
  onCreateAccount: () => void;
}

export default function LoginForm({
  onCreateAccount: onCreateAccount,
}: LoginFormProps) {
  return (
    <form className={styles.formContainer} action={authenticate}>
      <Input name="username" label="Username" required />
      <Input name="password" label="Password" type="password" required />
      <ButtonGroup className={styles.buttonGroup}>
        <PrimaryButton type="submit">Login</PrimaryButton>
        <SecondaryButton onPress={onCreateAccount}>
          Create account
        </SecondaryButton>
      </ButtonGroup>
    </form>
  );
}
