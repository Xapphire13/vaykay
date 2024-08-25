"use client";
import type { FocusEventHandler } from "react";
import { useEffect, useState } from "react";
import { updatePassword } from "../database/users";
import Input from "../shared/forms/Input";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import { useFormState, useFormStatus } from "react-dom";

interface SubmitButtonProps {
  disabled?: boolean;
}

function SubmitButton({ disabled }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton type="submit" disabled={pending || disabled}>
      Submit
    </PrimaryButton>
  );
}

export default function ChangePasswordForm() {
  const [actionState, updatePasswordAction] = useFormState(
    updatePassword,
    null
  );
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChangePasswordPressed = () => {
    setUpdatingPassword(true);
  };

  const handleRetypedPasswordBlur: FocusEventHandler<HTMLInputElement> = (
    ev
  ) => {
    if (!ev.target.form) {
      return;
    }

    const formData = new FormData(ev.target.form);
    const newPasswordValue = formData.get("newPassword")?.toString();

    setPasswordMismatch(newPasswordValue !== ev.target.value);
  };

  useEffect(() => {
    if (actionState?.result === true) {
      setUpdatingPassword(false);
    }
  }, [actionState]);

  if (!updatingPassword) {
    return (
      <SecondaryButton onPress={handleChangePasswordPressed}>
        Change password
      </SecondaryButton>
    );
  }

  return (
    <>
      {actionState?.error && <div>Error: {actionState.error}</div>}
      {actionState?.result === false && (
        <div>Error: Couldn&apos;t update password</div>
      )}
      <form action={updatePasswordAction}>
        <Input
          type="password"
          label="Current password"
          name="currentPassword"
          required
        />
        <Input
          type="password"
          label="New password"
          name="newPassword"
          required
        />
        <Input
          type="password"
          label="Re-type new password"
          required
          // @ts-expect-error onBlue type seems off
          onBlur={handleRetypedPasswordBlur}
        />
        {passwordMismatch && <div>Passwords must match!</div>}

        <SubmitButton disabled={passwordMismatch} />
      </form>
    </>
  );
}
