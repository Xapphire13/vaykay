import type { ButtonProps } from "@nextui-org/button";
import { Button } from "@nextui-org/button";

export default function SecondaryButton(props: ButtonProps) {
  return <Button color="secondary" {...props} />;
}
