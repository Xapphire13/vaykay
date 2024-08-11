import type { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps {
  children: string;
  onPress?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function PrimaryButton({
  children,
  onPress,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button type={type} onClick={onPress}>
      {children}
    </button>
  );
}
