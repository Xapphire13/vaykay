interface CheckboxProps {
  label: string;
  onChange?: (isChecked: boolean) => void;
}

export default function Checkbox({ label, onChange }: CheckboxProps) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(ev) => onChange?.(ev.target.checked)}
        />{" "}
        {label}
      </label>
    </div>
  );
}
