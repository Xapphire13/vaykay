import { useState } from "react";
import styles from "./DateRange.css";
import { formatISO, parseISO } from "date-fns";

interface DateRangeProps {
  name: string;
}

export default function DateRange({ name }: DateRangeProps) {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  return (
    <div className={styles.container}>
      <label>
        Start{" "}
        <input
          name={`${name}_start`}
          type="date"
          value={formatISO(start, { representation: "date" })}
          onChange={(ev) => setStart(parseISO(ev.target.value))}
        />
      </label>
      <label>
        End{" "}
        <input
          name={`${name}_end`}
          type="date"
          min={formatISO(start, { representation: "date" })}
          value={formatISO(end, { representation: "date" })}
          onChange={(ev) => setEnd(parseISO(ev.target.value))}
        />
      </label>
    </div>
  );
}
