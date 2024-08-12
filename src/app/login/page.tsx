"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import styles from "./page.css";

export default function LoginPage() {
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const handleCreateAccountPressed = () => setIsCreatingUser(true);
  const handleCancelCreateAccount = () => setIsCreatingUser(false);

  return (
    <main className={styles.container}>
      {isCreatingUser ? (
        <CreateAccountForm onCancel={handleCancelCreateAccount} />
      ) : (
        <LoginForm onCreateAccount={handleCreateAccountPressed} />
      )}
    </main>
  );
}
