import Input from "./Input";

interface InputListProps {
  label: string;
  hint?: string;
  placeholder?: string;
}

export default function InputList({
  label,
  hint,
  placeholder,
}: InputListProps) {
  return (
    <div>
      <Input label={label} hint={hint} placeholder={placeholder} />
    </div>
  );
}
