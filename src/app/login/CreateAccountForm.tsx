import { createUser } from "../database/users";
import ButtonGroup from "../shared/ButtonGroup";
import Input from "../shared/forms/Input";
import InputGroup from "../shared/forms/InputGroup";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import styles from "./page.css";

interface CreateAccountFormProps {
  onCancel: () => void;
}

export default function CreateAccountForm({
  onCancel,
}: CreateAccountFormProps) {
  return (
    <form className={styles.formContainer} action={createUser}>
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
      <ButtonGroup className={styles.buttonGroup}>
        <PrimaryButton type="submit">Create</PrimaryButton>
        <SecondaryButton onPress={onCancel}>Cancel</SecondaryButton>
      </ButtonGroup>
    </form>
  );
}
