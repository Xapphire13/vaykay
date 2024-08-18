import type { KeyboardEventHandler } from "react";
import { useState } from "react";
import Input from "./Input";

interface InputListProps {
  id: string;
  label: string;
  hint?: string;
  placeholder?: string;
  provideSearchResults?: (query: string) => string[];
  values: string[];
  onValuesChanged: (newValues: string[]) => void;
}

export default function InputList({
  label,
  hint,
  placeholder,
  id,
  provideSearchResults,
  values,
  onValuesChanged,
}: InputListProps) {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    const input = ev.currentTarget;
    const query = input.value;
    const valueSet = new Set(values);
    const results =
      provideSearchResults?.(query).filter((result) => !valueSet.has(result)) ??
      [];

    if (
      ev.key === "Enter" &&
      results.at(0)?.toLowerCase() === query.toLowerCase()
    ) {
      onValuesChanged([...values, results[0]]);
      input.value = "";
      setSearchResults([]);
      ev.preventDefault();
      return;
    }

    setSearchResults(results);
  };

  return (
    <div>
      <Input
        id={id}
        label={label}
        hint={hint}
        placeholder={placeholder}
        list={searchResults.length ? `${id}-search-results` : undefined}
        onKeyDown={handleKeyDown}
      />
      {searchResults.length !== 0 && (
        <datalist id={`${id}-search-results`}>
          {searchResults.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      )}
      {values && (
        <ul>
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
