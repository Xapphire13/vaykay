import type { ButtonProps } from "@nextui-org/button";
import { Button } from "@nextui-org/button";

export default function PrimaryButton(props: ButtonProps) {
  return <Button color="primary" {...props} />;
}
