import formStyles from "./forms.css";

interface InputProps {
  label: string;
  name?: string;
  hint?: string;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  label,
  name,
  hint,
  placeholder,
  required,
}: InputProps) {
  return (
    <div>
      <label>
        <div className={formStyles.label}>{label}</div>
        {hint && <div className={formStyles.hint}>{hint}</div>}
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          required={required}
        />
      </label>
    </div>
  );
}
