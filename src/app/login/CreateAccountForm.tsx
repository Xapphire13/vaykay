import { createUser } from "../database/users";
import ButtonGroup from "../shared/ButtonGroup";
import Input from "../shared/forms/Input";
import InputGroup from "../shared/forms/InputGroup";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import loginPageStyles from "./page.css";
import styles from "./CreateAccountForm.css";

interface CreateAccountFormProps {
  onCancel: () => void;
}

export default function CreateAccountForm({
  onCancel,
}: CreateAccountFormProps) {
  return (
    <form className={loginPageStyles.formContainer} action={createUser}>
      <Input name="username" label="Username" required />
      <Input name="email" label="Email" required />

      <InputGroup>
        <Input name="firstName" label="First Name" required />
        <Input name="lastName" label="Last Name" required />
      </InputGroup>

      <InputGroup>
        <Input name="password" label="Password" type="password" required />
        {/* TODO, validate */}
        <Input label="Re-enter Password" type="password" required />
      </InputGroup>
      <ButtonGroup>
        <PrimaryButton className={styles.button} type="submit" fullWidth>
          Create
        </PrimaryButton>
        <SecondaryButton className={styles.button} onPress={onCancel}>
          Cancel
        </SecondaryButton>
      </ButtonGroup>
    </form>
  );
}
