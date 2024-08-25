import { DateRangePicker } from "@nextui-org/date-picker";
import { getLocalTimeZone, today } from "@internationalized/date";

interface DateRangeProps {
  name: string;
  label: string;
  className?: string;
  isDisabled?: boolean;
}

export default function DateRange({
  name,
  label,
  className,
  isDisabled,
}: DateRangeProps) {
  return (
    <DateRangePicker
      className={className}
      variant="bordered"
      isDisabled={isDisabled}
      label={label}
      defaultValue={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()),
      }}
      minValue={today(getLocalTimeZone())}
      startName={`${name}_start`}
      endName={`${name}_end`}
    />
  );
}
