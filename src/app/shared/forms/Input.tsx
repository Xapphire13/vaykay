import formStyles from "./forms.css";

interface InputProps {
  label: string;
  name?: string;
  hint?: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "password" | "email";
}

export default function Input({
  label,
  name,
  hint,
  placeholder,
  required,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label>
        <div className={formStyles.label}>{label}</div>
        {hint && <div className={formStyles.hint}>{hint}</div>}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </label>
    </div>
  );
}
