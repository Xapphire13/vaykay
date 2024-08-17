import type { KeyboardEventHandler } from "react";
import { useState } from "react";
import Input from "./Input";

interface InputListProps {
  id: string;
  label: string;
  hint?: string;
  placeholder?: string;
  provideSearchResults?: (query: string) => string[];
}

export default function InputList({
  label,
  hint,
  placeholder,
  id,
  provideSearchResults,
}: InputListProps) {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    const query = ev.currentTarget.value;

    const results = provideSearchResults?.(query) ?? [];
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
        onKeyUp={handleKeyUp}
      />
      {searchResults.length !== 0 && (
        <datalist id={`${id}-search-results`}>
          {searchResults.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      )}
    </div>
  );
}
