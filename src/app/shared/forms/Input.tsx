import type { InputHTMLAttributes } from "react";
import formStyles from "./forms.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

export default function Input({ label, hint, ...inputProps }: InputProps) {
  return (
    <div>
      <label>
        <div className={formStyles.label}>{label}</div>
        {hint && <div className={formStyles.hint}>{hint}</div>}
        <input {...inputProps} />
      </label>
    </div>
  );
}
