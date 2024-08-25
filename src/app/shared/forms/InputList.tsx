import type { KeyboardEventHandler } from "react";
import { useState } from "react";
import Input from "./Input";

interface InputListProps {
  id: string;
  label: string;
  placeholder?: string;
  provideSearchResults?: (query: string) => string[];
  values: string[];
  onValuesChanged: (newValues: string[]) => void;
}

export default function InputList({
  label,
  placeholder,
  id,
  provideSearchResults,
  values,
  onValuesChanged,
}: InputListProps) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    const valueSet = new Set(values);
    const results =
      provideSearchResults?.(query).filter((result) => !valueSet.has(result)) ??
      [];

    if (ev.key === "Enter") {
      if (results.at(0)?.toLowerCase() === query.toLowerCase()) {
        onValuesChanged([...values, results[0]]);
        setQuery("");
        setSearchResults([]);
      }

      ev.preventDefault();
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    const valueSet = new Set(values);
    const results =
      provideSearchResults?.(query).filter((result) => !valueSet.has(result)) ??
      [];

    if (
      ev.key === "Unidentified" &&
      results.at(0)?.toLowerCase() === query.toLowerCase()
    ) {
      onValuesChanged([...values, results[0]]);
      setQuery("");
      setSearchResults([]);
      return;
    }

    setSearchResults(results);
  };

  return (
    <div>
      <Input
        id={id}
        label={label}
        placeholder={placeholder}
        list={searchResults.length ? `${id}-search-results` : undefined}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        value={query}
        onValueChange={setQuery}
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
