import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps {
  children: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function PrimaryButton({
  children,
  type = "button",
}: PrimaryButtonProps) {
  return <button type={type}>{children}</button>;
}
