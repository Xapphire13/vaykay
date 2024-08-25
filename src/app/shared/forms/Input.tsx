import type { InputProps } from "@nextui-org/input";
import { Input as NextUiInput } from "@nextui-org/input";

export default function Input(props: InputProps) {
  return <NextUiInput variant="bordered" {...props} />;
}
